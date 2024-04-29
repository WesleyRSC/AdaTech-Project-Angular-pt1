import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Array<Task> = [];
  newTask: Task = {
    _id: undefined,
    title: '',
    description: '',
    date: new Date(),
    durationTime: { hours: 0, minutes: 0 },
  };
  currentTask: Task | null = null;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (result) => {
        this.tasks = result;
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }

  addTask() {
    if (!this.newTask.title.trim()) {
      return;
    }
    this.taskService.addTask(this.newTask).subscribe({
      next: (result) => {
        this.tasks.push(result);
        this.newTask = {
          _id: undefined,
          title: '',
          description: '',
          date: new Date(),
          durationTime: { hours: 0, minutes: 0 },
        };
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }

  selectTask(task: Task) {
    this.currentTask = { ...task };
  }

  clearSelection() {
    this.currentTask = null;
  }

  updateTask() {
    if (!this.currentTask) {
      return;
    }
    this.taskService.editTask(this.currentTask).subscribe(() => {
      const index = this.tasks.findIndex(
        (task) => task._id === this.currentTask!._id
      );
      if (index !== -1) {
        this.tasks[index] = { ...this.currentTask! };
      }
      this.currentTask = null;
    });
  }

  removeTask(_id: string | undefined) {
    if (_id) {
      this.taskService.removeTask(_id).subscribe({
        next: (result) => {
          this.tasks = this.tasks.filter((task) => task._id !== _id);
        },
        error: (err) => {
          alert(err.error);
        },
      });
    } else {
      console.error('ID da tarefa é indefinido.');
    }
  }
}
