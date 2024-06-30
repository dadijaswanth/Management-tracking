import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  employeeData = {
    name: '',
    password: '',
   
  };
  adminData = {
    name: '',
    password: ''
  };

  constructor(private employee: EmployeeService,private router:Router,private share:SharedService) { }
  login() {
    this.employee.login(this.employeeData.name,this.employeeData.password).subscribe(result => {
      console.log(result);
      console.log(result.role);
      if (result.role === 'employee') {
        this.share.changeEmployeeData(result); // Store the login data
        this.router.navigate(['/employee-dashboard']);
      }
      else {
        alert('Invalid Credentials');
      }
    });
  }

  adminLogin() {
    this.employee.adminLogin(this.adminData.name, this.adminData.password).subscribe(result => {
      console.log(result);
      console.log(result.role);
      if (result.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      }
      else {
        alert('Invalid Credentials');
      }
    });
  }
}
