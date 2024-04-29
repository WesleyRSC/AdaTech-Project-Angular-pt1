import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from './shared/shared.module';
import { EditComponent } from './tasks/components/edit/edit.component';
import { AddTaskComponent } from './tasks/components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditComponent,
    AddTaskComponent,
  ],
  imports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
