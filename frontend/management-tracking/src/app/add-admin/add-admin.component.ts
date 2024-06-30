import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  admin = {
    name: '',
    contactInfo: '',
    password: '',
    role: 'admin'
  };

  constructor(private userService: EmployeeService) { }

  createAdmin() {
    this.userService.createAdmin(this.admin).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
