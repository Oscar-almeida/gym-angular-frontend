import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizFormComponent } from './aprendiz-form.component';

describe('AprendizFormComponent', () => {
  let component: AprendizFormComponent;
  let fixture: ComponentFixture<AprendizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendizFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
