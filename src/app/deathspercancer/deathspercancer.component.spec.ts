import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathspercancerComponent } from './deathspercancer.component';

describe('DeathspercancerComponent', () => {
  let component: DeathspercancerComponent;
  let fixture: ComponentFixture<DeathspercancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathspercancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathspercancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
