import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercurialPage } from './mercurial.page';

describe('MercurialPage', () => {
  let component: MercurialPage;
  let fixture: ComponentFixture<MercurialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercurialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercurialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
