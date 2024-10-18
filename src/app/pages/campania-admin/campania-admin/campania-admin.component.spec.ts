import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniaAdminComponent } from './campania-admin.component';

describe('CampaniaAdminComponent', () => {
  let component: CampaniaAdminComponent;
  let fixture: ComponentFixture<CampaniaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaniaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaniaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
