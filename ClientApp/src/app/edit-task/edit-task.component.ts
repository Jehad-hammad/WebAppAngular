import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskRecords } from '../task-records/task-records.component';
import { TaskService } from '../task.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-edit-task',
    templateUrl: './edit-task.component.html',
    styleUrls: ['./edit-task.component.scss']
})
/** edit-task component*/
export class EditTaskComponent implements OnInit {
/** edit-task ctor */
  //form group
  form = new FormGroup({
    Id: new FormControl(),
    NameEn: new FormControl(),
    NameAr: new FormControl(),
    Status: new FormControl(),
  })

  Id = this.data.id;
  NameEn = this.data.nameEn;
  NameAr = this.data.nameAr;
  Status = this.data.status;


  constructor(private service: TaskService, public dialog: MatDialog, public dialogRef: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: TaskRecords) {

  }
  ngOnInit() {
    console.log(this.data.id)
  }
  //submit data using id and body
  onSubmit(Id,form) {
    this.service.EditTask(Id,form).subscribe(res => {
      console.log('sucsess')
      this.dialogRef.close();


    })
    err =>{
      console.log(err)
    }
  }
  OnClose() {
    this.dialogRef.close();

  }
}
