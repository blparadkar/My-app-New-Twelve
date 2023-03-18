import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  // array1: any = [
  //   { id: 1, name: 'aaa' },
  //   { id: 11, name: 'aaabbb' },
  //   { id: 111, name: 'aaaccc' },
  // ];

  constructor(private EmpService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.EmpService.onGet();
  }
}
