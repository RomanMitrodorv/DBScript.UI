import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5287/api/v1/task/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserTasks(): Observable<any> {
    return this.http.get(API_URL + 'current', { responseType: 'json' });
  }

  getReleaseTasks(): Observable<any> {
    return this.http.get(API_URL + 'release', { responseType: 'json' });
  }

  getTaskInfo(id: number): Observable<any> {
    return this.http.get(`${API_URL}${id}`, { responseType: 'json' });
  }

  deployTask(id: number): Observable<any> {
    let url = `${API_URL}deploy/${id}`;
    return this.http.post(url, null);
  }
}
