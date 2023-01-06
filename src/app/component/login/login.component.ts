import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor.ts/auth.interceptor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  isLoginFailed = false;
  form: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,

  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      senha: new FormControl('', [Validators.maxLength(8)])
    });
  }

  onLoginOld() {
    console.log(this.form.value);
    const { email, senha } = this.form.value;
    //validar senha
    if (email === 'teste@gmail.com' && senha === 'teste') {
      // redirect
      this.router.navigate(['home']);
      return;
    }
    // redirect
    this.router.navigate(['/', '']);
  }

  onLogin() {
    this.http.post(environment.API + 'api/login', this.form.getRawValue(), { withCredentials: true })
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.token;

        this.router.navigate(['/']);
      }, (error) => {
        // redirect
        this.router.navigate(['/', '']);
        console.log(error);
      });
  }

}
