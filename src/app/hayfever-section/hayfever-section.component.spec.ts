import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayfeverSectionComponent } from './hayfever-section.component';

describe('HayfeverSectionComponent', () => {
  let component: HayfeverSectionComponent;
  let fixture: ComponentFixture<HayfeverSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HayfeverSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HayfeverSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
