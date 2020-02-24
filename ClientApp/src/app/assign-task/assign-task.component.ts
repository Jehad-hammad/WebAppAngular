import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AssignEmployeeTaskComponent } from '../assign-employee-task/assign-employee-task.component';
import { MatPaginator } from '@angular/material/paginator';

export class TaskRecords {
  id: number
  nameEn: string;
  nameAr: string;
  createdDate: Date;
  status: string;

}

@Component({
    selector: 'app-assign-task',
    templateUrl: './assign-task.component.html',
    styleUrls: ['./assign-task.component.scss']
})
/** assign-task component*/
export class AssignTaskComponent implements OnInit {
/** assign-task ctor */
  displayedColumns: string[] = ['id', 'nameEn', 'nameAr', 'status', 'Assign'];
  dataSource: any;
  taskRecord: TaskRecords[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TaskService, public dialog: MatDialog) {

  }
  ngOnInit() {
    //get all task from data base 
    this.service.getAllTask().subscribe(res => {
      this.taskRecord = res as any;
      this.dataSource = new MatTableDataSource(this.taskRecord);
      this.dataSource.paginator = this.paginator;

    })
  }
  //to open and send id to the dialog
  onOPen(id) {
    const dialogRef = this.dialog.open(AssignEmployeeTaskComponent, {
      width: '400px',
      data :{id:id}
    })

  }
}
