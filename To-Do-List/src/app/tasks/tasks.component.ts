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
  showAddModal: boolean = false;
  showEditModal: boolean = false;

  selectedTask: Task | null = null;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (result) => {
        console.log(result);
        this.tasks = result;
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe({
      next: (result) => {
        this.showAddModal = false;
        this.getTasks();
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task._id!).subscribe({
      next: (result) => {
        this.getTasks();
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }

  openEditModal(task: Task) {
    this.selectedTask=task
    this.showEditModal = true;
  }

  updateTask(task: Task) {
    this.taskService.editTask(task).subscribe({
      next: (result) => {
        this.showEditModal = false;
        this.getTasks();
      },
      error: (err) => {
        console.log(err)
        alert(err.error);
      },
    });
  }
}