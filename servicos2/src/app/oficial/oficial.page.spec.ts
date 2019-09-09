import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficialPage } from './oficial.page';

describe('OficialPage', () => {
  let component: OficialPage;
  let fixture: ComponentFixture<OficialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
