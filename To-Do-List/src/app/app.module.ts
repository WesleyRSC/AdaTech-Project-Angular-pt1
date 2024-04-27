import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from './shared/shared.module';
import { EditComponent } from './tasks/components/edit/edit.component';
import { AddComponent } from './tasks/components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditComponent,
    AddComponent,
  ],
  imports: [    
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
