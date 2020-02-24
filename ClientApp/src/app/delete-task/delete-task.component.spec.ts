/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DeleteTaskComponent } from './delete-task.component';

let component: DeleteTaskComponent;
let fixture: ComponentFixture<DeleteTaskComponent>;

describe('delete-task component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeleteTaskComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DeleteTaskComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});