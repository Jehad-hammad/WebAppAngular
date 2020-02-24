/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AssignEmployeeTaskComponent } from './assign-employee-task.component';

let component: AssignEmployeeTaskComponent;
let fixture: ComponentFixture<AssignEmployeeTaskComponent>;

describe('assign-employee-task component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AssignEmployeeTaskComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AssignEmployeeTaskComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});