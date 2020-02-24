/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AssignTaskComponent } from './assign-task.component';

let component: AssignTaskComponent;
let fixture: ComponentFixture<AssignTaskComponent>;

describe('assign-task component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AssignTaskComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AssignTaskComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});