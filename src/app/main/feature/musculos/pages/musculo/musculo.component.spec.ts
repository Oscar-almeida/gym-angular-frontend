import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculoComponent } from './musculo.component';

describe('MusculoComponent', () => {
  let component: MusculoComponent;
  let fixture: ComponentFixture<MusculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
