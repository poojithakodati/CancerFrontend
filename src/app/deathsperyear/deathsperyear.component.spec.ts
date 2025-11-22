import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsperyearComponent } from './deathsperyear.component';

describe('DeathsperyearComponent', () => {
  let component: DeathsperyearComponent;
  let fixture: ComponentFixture<DeathsperyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathsperyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsperyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
