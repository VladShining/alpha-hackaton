import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../../service/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  errorMessages!: string;
  showPassword!: boolean;
  input!: boolean;
  showMe!: boolean;
  showRedirection!: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private router: Router
  ) {}
  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      ],
    });
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.signinService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/root']);
        // this.authService.collectDataFromFirebase();
      },
      () => {
        this.errorMessages = 'Login invalid';
        this.showRedirection = true;
      }
    );
  }
}
