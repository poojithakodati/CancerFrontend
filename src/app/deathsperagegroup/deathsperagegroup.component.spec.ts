import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsperagegroupComponent } from './deathsperagegroup.component';

describe('DeathsperagegroupComponent', () => {
  let component: DeathsperagegroupComponent;
  let fixture: ComponentFixture<DeathsperagegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathsperagegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsperagegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
