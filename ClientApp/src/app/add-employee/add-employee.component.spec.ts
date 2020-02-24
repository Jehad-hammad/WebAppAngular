/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddEmployeeComponent } from './add-employee.component';

let component: AddEmployeeComponent;
let fixture: ComponentFixture<AddEmployeeComponent>;

describe('add-employee component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddEmployeeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddEmployeeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});