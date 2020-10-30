import { Observable } from 'rxjs';
import { DepartmentsService } from './../../services/departments.service';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  departments$: Observable<Department[]>;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Old Way
    // this.departments =  this.departmentsService.departments;

    // Also an Old Way
    // this.departmentsService.getDepartments().subscribe(departments => {
    //   this.departments = departments;
    // });

    this.departments$ = this.departmentsService.getDepartments();
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }

}
