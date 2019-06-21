import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiLessionPage } from './kanji-lession.page';

describe('KanjiLessionPage', () => {
  let component: KanjiLessionPage;
  let fixture: ComponentFixture<KanjiLessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiLessionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiLessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
