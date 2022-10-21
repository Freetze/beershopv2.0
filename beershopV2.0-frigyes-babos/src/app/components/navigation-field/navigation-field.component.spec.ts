import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFieldComponent } from './navigation-field.component';

describe('NavigationFieldComponent', () => {
  let component: NavigationFieldComponent;
  let fixture: ComponentFixture<NavigationFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
