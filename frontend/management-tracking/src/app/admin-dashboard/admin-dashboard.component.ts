import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  currentData: string = 'employeeData';
  employeeData: any;  
  constructor(private share: SharedService, private employee: EmployeeService) { }
  ngOnInit(): void {
    this.employee.getAllEmployees().subscribe(
      res => {
        console.log(res);
        this.employeeData = res;
      },
      err => console.error(err)
    );
  }
  select(data: string) {
    this.currentData = data;
    console.log(this.currentData);
  } 

}
