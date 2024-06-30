import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:3000';

  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { name, password });
  }

  adminLogin(name: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/admin/login`, { name, password });
  }
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
  createAdmin(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/admin`, user);
  }
  getAllEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
