import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export class TaskInfoRecords {
  empName: string;
  taskName: string;
  taskStatus: string;
  taskCreated: Date;
}

@Component({
    selector: 'app-task-info',
    templateUrl: './task-info.component.html',
    styleUrls: ['./task-info.component.scss']
})
/** task-info component*/
export class TaskInfoComponent implements OnInit {
/** task-info ctor */
  displayedColumns: string[] = ['empName', 'taskName', 'taskStatus', 'taskCreated'];
  taskInfoRecord: TaskInfoRecords[];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: TaskService) {

  }
  ngOnInit() {
    this.service.getTaskEmpoInfo().subscribe(res => {
      this.taskInfoRecord = res as any;
      this.dataSource = new MatTableDataSource(this.taskInfoRecord);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      console.log(res)
    }
      )

  }
  //filter on datasource

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
