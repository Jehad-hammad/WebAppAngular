import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-manage-employee',
    templateUrl: './manage-employee.component.html',
    styleUrls: ['./manage-employee.component.scss']
})
/** manage-employee component*/
export class ManageEmployeeComponent {
    /** manage-employee ctor */
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    console.log(language)
  }
}
