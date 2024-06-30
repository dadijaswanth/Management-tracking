import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {
  employeeData: any;
  currentData!: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentEmployeeData.subscribe(data => this.employeeData = data);
    console.log(this.employeeData);
  }

  showData(dataType: string) {
    this.currentData = dataType;
  }
}
