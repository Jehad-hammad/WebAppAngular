/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TaskRecordsComponent } from './task-records.component';

let component: TaskRecordsComponent;
let fixture: ComponentFixture<TaskRecordsComponent>;

describe('task-records component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TaskRecordsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TaskRecordsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});