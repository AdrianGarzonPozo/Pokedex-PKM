/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindPkmComponent } from './findPkm.component';

describe('FindPkmComponent', () => {
  let component: FindPkmComponent;
  let fixture: ComponentFixture<FindPkmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPkmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
