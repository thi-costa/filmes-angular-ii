import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword = false;

  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LoginService,
    private _toast: ToastrService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.loginForm = this._formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login(){
    const { login, password } = this.loginForm.value;

    this._service
      .login(login, password)
      .pipe(take(1))
      .subscribe({
        next: (value) => {
          localStorage.setItem('auth', String(value.auth));
          this._router.navigate(['/movies']);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status == 401) {
            this._toast.error('Erro!', 'Usuário ou senha inválidos!');
          } else {
            this._toast.error('Erro!', 'Ocorreu um erro, teste novamente!');
          }
        },
      });
  }
}
