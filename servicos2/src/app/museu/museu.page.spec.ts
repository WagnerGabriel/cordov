import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseuPage } from './museu.page';

describe('MuseuPage', () => {
  let component: MuseuPage;
  let fixture: ComponentFixture<MuseuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
