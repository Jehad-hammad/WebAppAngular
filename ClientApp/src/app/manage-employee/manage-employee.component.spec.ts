/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ManageEmployeeComponent } from './manage-employee.component';

let component: ManageEmployeeComponent;
let fixture: ComponentFixture<ManageEmployeeComponent>;

describe('manage-employee component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManageEmployeeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ManageEmployeeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});