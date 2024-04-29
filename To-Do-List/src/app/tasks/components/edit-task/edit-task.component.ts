import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-editTask',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  @Input() task!: Task;

  @Output() taskUpdatedEvent = new EventEmitter<Task>();
  @Output() closeEvent = new EventEmitter();

  editTaskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editTaskForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(new Date(), Validators.required),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.task);
    this.editTaskForm = this.fb.group({
      title: new FormControl(this.task.title, Validators.required),
      description: new FormControl(this.task.description, Validators.required),
      date: new FormControl(new Date(this.task.date), Validators.required),
    });
  }

  closeModal() {
    this.closeEvent.emit();
  }

  updateTask() {

    console.log(this.editTaskForm)
    if (!this.editTaskForm.valid) {
      alert('Incorrect Data');
      return;
    }
    if (this.editTaskForm.value.date.getDate() < new Date().getDate()) {
      alert('Date cannot be less than the current date');
      return;
    }

    let updatedTask: Task = this.editTaskForm.getRawValue();
    updatedTask._id = this.task._id;

    this.taskUpdatedEvent.emit(updatedTask);
  }
}
