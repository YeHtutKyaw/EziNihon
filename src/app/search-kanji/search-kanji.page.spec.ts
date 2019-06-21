import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKanjiPage } from './search-kanji.page';

describe('SearchKanjiPage', () => {
  let component: SearchKanjiPage;
  let fixture: ComponentFixture<SearchKanjiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchKanjiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchKanjiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
