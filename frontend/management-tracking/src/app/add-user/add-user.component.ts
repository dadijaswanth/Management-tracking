import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user = {
    contactInfo: '',
    district: '',
    employeeId: '',
    name: '',
    password: '',
    role: ''
  };

  constructor(private userService: EmployeeService) { }

  createUser() {
    this.userService.createUser(this.user).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
