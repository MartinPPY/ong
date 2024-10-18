import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCampaniaComponent } from './crear-campania.component';

describe('CrearCampaniaComponent', () => {
  let component: CrearCampaniaComponent;
  let fixture: ComponentFixture<CrearCampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCampaniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
