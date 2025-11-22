import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsperdrinkingComponent } from './deathsperdrinking.component';

describe('DeathsperdrinkingComponent', () => {
  let component: DeathsperdrinkingComponent;
  let fixture: ComponentFixture<DeathsperdrinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathsperdrinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsperdrinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
