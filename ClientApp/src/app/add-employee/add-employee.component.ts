import { Component, OnInit } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss']
})
/** add-employee component*/
export class AddEmployeeComponent implements OnInit {
/** add-employee ctor */

  // Form Contols
  form = new FormGroup({
    NameEn: new FormControl('', Validators.required),

    NameAr: new FormControl('', Validators.required),

    EmpNo: new FormControl('', [
      Validators.required,
      
    ]),

    HiringDate: new FormControl('', Validators.required),

  });





  constructor(private serivce: EmployeeService) {
    

  }
  ngOnInit() {
    this.serivce.getAllEmployee().subscribe(res => {
      console.log(res)
    })
  }


  //Form Get validors

  get NameEn() {
    return this.form.get("NameEn");
  }

  get NameAr() {
    return this.form.get("NameAr");
  }

  get EmployeeNumber() {
    return this.form.get("EmployeeNumber");

  }
  get HiringDate() {
    return this.form.get("HiringDate");
  }


// submiting data
  OnClick(form) {
    this.serivce.AddEmployeeService(form).subscribe(res => {
      console.log('Sucsess')
      err => {
        console.log(err)

      }

    })
    //console.log(form.value)

    

  }

}
