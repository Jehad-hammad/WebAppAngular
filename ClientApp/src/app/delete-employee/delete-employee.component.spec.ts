/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DeleteEmployeeComponent } from './delete-employee.component';

let component: DeleteEmployeeComponent;
let fixture: ComponentFixture<DeleteEmployeeComponent>;

describe('delete-employee component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeleteEmployeeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DeleteEmployeeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});