import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorFelinosComponent } from './buscador-felinos.component';

describe('BuscadorFelinosComponent', () => {
  let component: BuscadorFelinosComponent;
  let fixture: ComponentFixture<BuscadorFelinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorFelinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorFelinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
