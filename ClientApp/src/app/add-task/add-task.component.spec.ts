/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddTaskComponent } from './add-task.component';

let component: AddTaskComponent;
let fixture: ComponentFixture<AddTaskComponent>;

describe('add-task component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddTaskComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddTaskComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});