import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketViewComponent } from './rocket-view.component';

describe('RocketViewComponent', () => {
  let component: RocketViewComponent;
  let fixture: ComponentFixture<RocketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RocketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
