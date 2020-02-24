import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';




export interface EmployeeRecordes {
  id: number;
  nameEn: string;
  nameAr: string;
  employeenumber: number;
  hiringDate: Date;
}



@Component({
    selector: 'app-delete-employee',
    templateUrl: './delete-employee.component.html',
    styleUrls: ['./delete-employee.component.scss']
})
/** delete-employee component*/
export class DeleteEmployeeComponent implements OnInit {
/** delete-employee ctor */
  displayedColumns: string[] = ['id', 'nameInEnglish', 'nameInArabic', 'employeeNumber','hiringDate','Action'];
  dataSource: any;
  employeeRecord: EmployeeRecordes[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: EmployeeService) {

  }
  ngOnInit() {
    //get all employee from database
    this.service.getAllEmployee().subscribe(res => {
      this.employeeRecord = res as any[];
      this.dataSource = new MatTableDataSource(this.employeeRecord);
      this.dataSource.paginator = this.paginator;

      console.log(this.employeeRecord)


    })

  }
  //delete employee using id 
  OnDelete(id) {
    this.service.DeleteEmployee(id).subscribe(res => {
      console.log('Sucssess')
      this.service.getAllEmployee().subscribe(res => {
        this.employeeRecord = res as any[];
        this.dataSource = new MatTableDataSource(this.employeeRecord);
        this.dataSource.paginator = this.paginator;

        console.log(this.employeeRecord)


      })
      err => {
        console.log(err)
      }
    })
  }
}
