import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaingComponent } from './add-campaing.component';

describe('AddCampaingComponent', () => {
  let component: AddCampaingComponent;
  let fixture: ComponentFixture<AddCampaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCampaingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
