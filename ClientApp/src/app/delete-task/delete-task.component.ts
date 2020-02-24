import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import {MatPaginator} from '@angular/material/paginator';

export class TaskRecords {
  id: number
  nameEn: string;
  nameAr: string;
  createdDate: Date;
  status: string;

}
@Component({
    selector: 'app-delete-task',
    templateUrl: './delete-task.component.html',
    styleUrls: ['./delete-task.component.scss']
})
/** delete-task component*/
export class DeleteTaskComponent implements OnInit {
/** delete-task ctor */
  displayedColumns: string[] = ['id', 'nameEn', 'nameAr', 'status', 'createdDate','Action'];
  dataSource: any;
  taskRecord: TaskRecords[];

  //declered to transfer data
  id: number
  nameEn: string;
  nameAr: string;
  createdDate: Date;
  status: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TaskService, public dialog: MatDialog) {

  }
  // get all task
  ngOnInit() {
    this.service.getAllTask().subscribe(res => {
      this.taskRecord = res as any;
      this.dataSource = new MatTableDataSource(this.taskRecord);
      this.dataSource.paginator = this.paginator;

    })
    
  }
  //open dialog and send task data 
  openDialog(id,nameEn,nameAr,status,createdDate): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '400px',
      data: { id: id, nameEn: nameEn, nameAr: nameAr, status: status, createdDate: createdDate }

    })

  }
  //delete using task id 
  OnDelete(id) {
    this.service.DeleteTask(id).subscribe(res => {
      console.log('sucsses')
      this.service.getAllTask().subscribe(res => {
        this.taskRecord = res as any;
        this.dataSource = new MatTableDataSource(this.taskRecord);
        this.dataSource.paginator = this.paginator;

      })
           
    })
    err => {
      console.log(err)
    }

  }

}
