/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EmpolyeeRecordsComponent } from './empolyee-records.component';

let component: EmpolyeeRecordsComponent;
let fixture: ComponentFixture<EmpolyeeRecordsComponent>;

describe('empolyee-records component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EmpolyeeRecordsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EmpolyeeRecordsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});