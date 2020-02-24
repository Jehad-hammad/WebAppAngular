import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss']
})
/** add-task component*/
export class AddTaskComponent implements OnInit {
/** add-task ctor */
//form group
  form = new FormGroup({
    NameEn: new FormControl('', Validators.required),

    NameAr: new FormControl('', Validators.required),

    Status: new FormControl('', [
      Validators.required,
      
    ]),

    CreatedDate: new FormControl('', Validators.required),

  });


  constructor(private service: TaskService) {

  }

  ngOnInit() {

  }
  //submiting data
  onSubmit(form) {
    this.service.AddTaskService(form).subscribe(res => {
      console.log('sucssess')
    })
    err => {
      console.log(err)
    }

  }


}
