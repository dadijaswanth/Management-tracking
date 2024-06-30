import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private employeeData = new BehaviorSubject(null);
  currentEmployeeData = this.employeeData.asObservable();

  constructor() { }

  changeEmployeeData(data: any) {
    this.employeeData.next(data);
  }
}
