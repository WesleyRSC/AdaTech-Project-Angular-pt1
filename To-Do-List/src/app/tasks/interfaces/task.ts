import { Time } from '@angular/common';

export interface Task {
  _id: string | undefined;
  title: string;
  description: string;
  date: Date;
  durationTime?: Time;
}
