import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendicesComponent } from './aprendices.component';

describe('AprendicesComponent', () => {
  let component: AprendicesComponent;
  let fixture: ComponentFixture<AprendicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
