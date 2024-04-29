import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '../../interfaces/task';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-addTask',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() newTaskEvent = new EventEmitter<Task>();

  newTaskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newTaskForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(new Date(), Validators.required),
      durationTime: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  addNewTask() {
    if (!this.newTaskForm.valid) {
      alert('Incorrect Data');
      return;
    }

    let newTask: Task = this.newTaskForm.getRawValue();

    this.newTaskEvent.emit(newTask);
  }
}
