import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface EmployeeRecords {
  id: number;
  nameEn: string;
  nameAr: string;
  employeenumber: number;
  hiringDate: Date;
}




@Component({
    selector: 'app-empolyee-records',
    templateUrl: './empolyee-records.component.html',
    styleUrls: ['./empolyee-records.component.scss']
})
/** empolyee-records component*/
export class EmpolyeeRecordsComponent implements OnInit {
/** empolyee-records ctor */

  displayedColumns: string[] = ['id', 'nameInEnglish', 'nameInArabic', 'employeeNumber','hiringDate'];
  employeeRecord: EmployeeRecords[];
  dataSource :any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private serivce: EmployeeService) {


  }
  ngOnInit() {
    this.serivce.getAllEmployee().subscribe(res => {
      this.employeeRecord = res as any[]
      this.dataSource = new MatTableDataSource(this.employeeRecord);
      this.dataSource.paginator = this.paginator;
      console.log(this.employeeRecord)

    })


    }
}
