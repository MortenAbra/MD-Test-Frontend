import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCreatorComponent } from './rocket-creator.component';

describe('RocketCreatorComponent', () => {
  let component: RocketCreatorComponent;
  let fixture: ComponentFixture<RocketCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RocketCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
