import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  Empl: Employee[] = [
    {
      id: 1,
      name: 'Emp one',
      email: 'emp1@gmail.com ',
      phone: 111,
    },
    {
      id: 2,
      name: 'Emp two',
      email: 'emp2@gmail.com ',
      phone: 222,
    },
  ];

  constructor() {}

  onGet() {
    return this.Empl;
  }
}
