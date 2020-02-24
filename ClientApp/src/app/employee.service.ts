import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable()
export class EmployeeService {

  url: string = "https://localhost:44370/api/Employees";
  empModel: EmployeesModel [];
   


  constructor(private http: HttpClient, private router: Router) {
   
  }


  //get All Employees From DataBase

  getAllEmployee() {
    return this.http.get(this.url);

  }

  //Add Employees on DataBase

  AddEmployeeService(form: FormGroup) {
    let body = JSON.stringify(form.value);
   return this.http.post(this.url, body, httpOption);

  }
  DeleteEmployee(id) {
    return this.http.delete(this.url + "/" + id)

  }
}



// emplyee Model
export class EmployeesModel {
  id: number;
  nameEn: string;
  nameAr: string;
  empoNumber: number;
  hiringDate: Date;

}
