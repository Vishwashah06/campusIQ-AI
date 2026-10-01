import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBatchesComponent } from './courses-batches.component';

describe('CoursesBatchesComponent', () => {
  let component: CoursesBatchesComponent;
  let fixture: ComponentFixture<CoursesBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesBatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
