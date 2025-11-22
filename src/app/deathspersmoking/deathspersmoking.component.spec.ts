import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathspersmokingComponent } from './deathspersmoking.component';

describe('DeathspersmokingComponent', () => {
  let component: DeathspersmokingComponent;
  let fixture: ComponentFixture<DeathspersmokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathspersmokingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathspersmokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
