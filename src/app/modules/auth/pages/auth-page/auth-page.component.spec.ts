import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPageComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
