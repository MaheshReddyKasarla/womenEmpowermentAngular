import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoVolunteerPgInfoComponent } from './ngo-volunteer-pg-info.component';

describe('NgoVolunteerPgInfoComponent', () => {
  let component: NgoVolunteerPgInfoComponent;
  let fixture: ComponentFixture<NgoVolunteerPgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoVolunteerPgInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoVolunteerPgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
