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
  @Output() closeEvent = new EventEmitter();

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

    console.log(this.newTaskForm.value.date)
    if (!this.newTaskForm.valid) {
      alert('Incorrect Data');
      return;
    }
    if (this.newTaskForm.value.date.getDate() < new Date().getDate()) {
      console.log(this.newTaskForm.value.date)
      alert('Date cannot be less than the current date');
      return;
    }

    let newTask: Task = this.newTaskForm.getRawValue();

    this.newTaskEvent.emit(newTask);
  }

  closeModal() {
    this.closeEvent.emit();
  }
}
