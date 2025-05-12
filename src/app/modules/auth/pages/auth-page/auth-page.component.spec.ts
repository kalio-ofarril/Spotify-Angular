import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

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

  // Patrón AAA:
  // Arrange, Act, Assert
  it('Should return invalid form', () => {
    // Arrange
    const mockCredentials = {
      email: '',
      password: '1111111111111111111'
    }
    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    // Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    // Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('Should return valid form', () => {
    // Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }
    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    // Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    // Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('Button should say "Iniciar Sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');

  })
});
