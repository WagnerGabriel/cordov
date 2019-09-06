import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoPage } from './ingresso.page';

describe('IngressoPage', () => {
  let component: IngressoPage;
  let fixture: ComponentFixture<IngressoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
