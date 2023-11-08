import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second-component.component';

describe('SecondComponentComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
