import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculosComponent } from './musculos.component';

describe('MusculosComponent', () => {
  let component: MusculosComponent;
  let fixture: ComponentFixture<MusculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
