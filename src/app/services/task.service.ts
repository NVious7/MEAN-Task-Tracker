import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:5000/tasks';
  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.url}`);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.url}/${task._id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.url}/${task._id}`, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.url}`, task);
  }
}
