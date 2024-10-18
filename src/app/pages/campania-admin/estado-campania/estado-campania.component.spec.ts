import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCampaniaComponent } from './estado-campania.component';

describe('EstadoCampaniaComponent', () => {
  let component: EstadoCampaniaComponent;
  let fixture: ComponentFixture<EstadoCampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoCampaniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
