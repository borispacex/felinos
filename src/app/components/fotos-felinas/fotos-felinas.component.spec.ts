import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosFelinasComponent } from './fotos-felinas.component';

describe('FotosFelinasComponent', () => {
  let component: FotosFelinasComponent;
  let fixture: ComponentFixture<FotosFelinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosFelinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosFelinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
