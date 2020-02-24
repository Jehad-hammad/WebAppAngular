import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export class TaskRecords {
  id:number
  nameEn: string;
  nameAr: string;
  createdDate: Date;
  status: string;

}

@Component({
    selector: 'app-task-records',
    templateUrl: './task-records.component.html',
    styleUrls: ['./task-records.component.scss']
})
/** task-records component*/
export class TaskRecordsComponent implements OnInit {
/** task-records ctor */
  displayedColumns: string[] = ['id', 'nameEn', 'nameAr', 'status', 'createdDate'];
  taskRecord: TaskRecords[];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: TaskService) {

  }
  ngOnInit() {
    this.service.getAllTask().subscribe(res => {
      this.taskRecord = res as any;
      this.dataSource = new MatTableDataSource(this.taskRecord);
      this.dataSource.paginator = this.paginator;
      

      console.log(this.dataSource)
    })
  }
}
