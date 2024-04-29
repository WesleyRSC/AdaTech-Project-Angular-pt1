import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly apiUrl: string = `${environment.apiUrl}/tasks`;
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.apiUrl);
  }

  getTaskById(id: string) {
    return this.httpClient.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(task: Task): Observable<any> {
    return this.httpClient.post(this.apiUrl, task);
  }

  editTask(task: Task): Observable<any> {
    let id = task._id;
    let taskAux = { ...task, _id: undefined };
    return this.httpClient.put(`${this.apiUrl}/${id}`, taskAux);
  }

  removeTask(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
