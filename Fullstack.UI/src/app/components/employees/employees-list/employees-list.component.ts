import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '12bdj5',
      name: 'aziz ahmed',
      email: 'aziz@gmail.com',
      phone: 767256473,
      salary: 94027,
      department: 'IT'
    },
    {
      id: '23dr4',
      name: 'sameer Saimi',
      email: 'sam@gmail.com',
      phone: 76729373,
      salary: 39027,
      department: 'IT'
    },
    {
      id: '4rncejcoreij',
      name: 'danny dogshit',
      email: 'poop@gmail.com',
      phone: 7843373,
      salary: 35027,
      department: 'IT'
    }
  ]

  constructor() { }

  ngOnInit(): void {
   
  }

}
