import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { TaskService } from '../task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssignTaskComponent } from '../assign-task/assign-task.component';
import { TaskRecords } from '../task-records/task-records.component';


export class EmployeeList {
  id: number;
  nameEn: string;
}

@Component({
    selector: 'app-assign-employee-task',
    templateUrl: './assign-employee-task.component.html',
    styleUrls: ['./assign-employee-task.component.scss']
})
/** assign-employee-task component*/
export class AssignEmployeeTaskComponent implements OnInit {
/** assign-employee-task ctor */
  //form group
  form = new FormGroup({
    TaskId: new FormControl('', Validators.required),
    EmployeeId: new FormControl('', Validators.required)

  })
  //get the data from preivous page
  TaskId = this.data.id

 public empolyeeList= [];

  
  
  constructor(private serviceEmpo: EmployeeService, private serivceTask: TaskService,
    public dialogRef: MatDialogRef<AssignTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskRecords) {


  }
  ngOnInit() {
    //get the employee record from data base
    this.serviceEmpo.getAllEmployee().subscribe(res => {
      this.empolyeeList = res as any;
      
      console.log(this.empolyeeList)

    })
    console.log(this.data.id)
  }
  //submit data 
  onSave(form) {
    this.serivceTask.AssignTask(form).subscribe(res => {
      console.log('sucsses')
      this.dialogRef.close();

    })
    err => {
      console.log(err)

    }

  }
  //close dialog
  OnClose() {
    this.dialogRef.close();
  }
  
}
