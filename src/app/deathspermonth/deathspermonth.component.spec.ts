import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathspermonthComponent } from './deathspermonth.component';

describe('DeathspermonthComponent', () => {
  let component: DeathspermonthComponent;
  let fixture: ComponentFixture<DeathspermonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathspermonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathspermonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
