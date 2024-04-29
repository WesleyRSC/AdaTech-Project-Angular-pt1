import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from './shared/shared.module';
import { EditTaskComponent } from './tasks/components/edit-task/edit-task.component';
import { AddTaskComponent } from './tasks/components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditTaskComponent,
    AddTaskComponent,
  ],
  imports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
