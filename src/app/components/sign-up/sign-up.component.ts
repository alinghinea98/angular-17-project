import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MyErrorStateMatcher } from '../generate-program/generate-program.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    MatSlideToggleModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private _formbuilder = inject(FormBuilder);

  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor() {
    this.signUpForm = this._formbuilder.group(
      {
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        age: [null, Validators.required],
        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
        phone: [null, Validators.required],
        trainer: [null, Validators.required],
        password: [null, Validators.required],
        passwordConfirmation: [null, Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('passwordConfirmation');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordsNotMatch: true });
      return { passwordsNotMatch: true };
    }
    confirmPassword.setErrors(null);
    return null;
  }
}
