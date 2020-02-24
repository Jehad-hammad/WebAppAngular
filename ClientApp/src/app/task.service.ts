import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


const httpOption={
  headers:new HttpHeaders({
    'Content-Type': 'application/json'})
}

@Injectable()
export class TaskService {
  url = "https://localhost:44370/api/Tasks";
  url2 = "https://localhost:44370/api/EmployeeTasks";


  constructor(private http: HttpClient) {

  }

  // get All Task Data from dataBase
  getAllTask() {
    return this.http.get(this.url)
  }
  //Add Taskes to Data Base
  AddTaskService(form: FormGroup) {
    let body = JSON.stringify(form.value)
    return this.http.post(this.url, body, httpOption)

  }
  // Delete Task from database using id in url
  DeleteTask(id) {
    return this.http.delete(this.url+"/"+id)

  }
  //Edit Data From Database using id in url and boy
  EditTask(Id,form: FormGroup) {
    let body = JSON.stringify(form.value)
    return this.http.put(this.url + "/" +Id , body, httpOption)

  }

  // Assign Task to employee
  AssignTask(form: FormGroup) {
    let body = JSON.stringify(form.value)
    return this.http.post(this.url2, body, httpOption)

  }
  //Task And employee Info
  getTaskEmpoInfo() {
   return this.http.get(this.url2)
  }





}
