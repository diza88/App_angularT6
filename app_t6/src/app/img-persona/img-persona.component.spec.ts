import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPersonaComponent } from './img-persona.component';

describe('ImgPersonaComponent', () => {
  let component: ImgPersonaComponent;
  let fixture: ComponentFixture<ImgPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
