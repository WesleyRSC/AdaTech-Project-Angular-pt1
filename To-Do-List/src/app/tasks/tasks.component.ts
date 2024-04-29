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

  addTask(newTask:Task) {
    this.showAddModal = false;
  
    this.taskService.addTask(newTask).subscribe({
      next: (result) => {
        this.getTasks();
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }

  removeTask(task: Task) {
    console.log(task);
    this.taskService.removeTask(task._id!).subscribe({
      next: (result) => {
        this.getTasks();
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }
}
