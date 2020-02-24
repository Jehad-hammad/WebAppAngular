import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';



//import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';







import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmpolyeeRecordsComponent } from './empolyee-records/empolyee-records.component';
import { TaskRecordsComponent } from './task-records/task-records.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { EmployeeService } from './employee.service';
import { TaskService } from './task.service';
import { AssignEmployeeTaskComponent } from './assign-employee-task/assign-employee-task.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageTaskComponent } from './manage-task/manage-task.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { HttpModule ,Http} from '@angular/http';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EmpolyeeRecordsComponent,
    TaskRecordsComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    EditTaskComponent,
    AssignTaskComponent,
    AssignEmployeeTaskComponent,
    ManageEmployeeComponent,
    ManageTaskComponent,
    TaskInfoComponent,

    
    
  ],
  imports: [
    BrowserAnimationsModule,
    CdkTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    HttpModule,
    
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ,
    

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'ManageEmployee', component: ManageEmployeeComponent,
        children: [
          { path: 'AddEmployee', component: AddEmployeeComponent },
          { path: 'DeleteEmployee', component: DeleteEmployeeComponent },
          { path: 'EmployeeRecords', component: EmpolyeeRecordsComponent },
        ]
      },
      {
        path: 'ManageTask', component: ManageTaskComponent,
        children: [

          { path: 'AddTask', component: AddTaskComponent },
          { path: 'DeleteTask', component: DeleteTaskComponent },
          { path: 'TaskRecords', component: TaskRecordsComponent },
          { path: 'AssinTask', component: AssignTaskComponent },
          { path: 'TaskInfo', component: TaskInfoComponent },
        ]
      },
      
      
    ]),
    BrowserAnimationsModule
  ],

  entryComponents: [EditTaskComponent, AssignEmployeeTaskComponent],
  providers: [EmployeeService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
