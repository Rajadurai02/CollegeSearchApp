import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesearchComponent } from './collegesearch.component';

describe('CollegesearchComponent', () => {
  let component: CollegesearchComponent;
  let fixture: ComponentFixture<CollegesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
