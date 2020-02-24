/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ManageTaskComponent } from './manage-task.component';

let component: ManageTaskComponent;
let fixture: ComponentFixture<ManageTaskComponent>;

describe('manage-task component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManageTaskComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ManageTaskComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});