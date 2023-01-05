import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      senha: new FormControl('', [Validators.maxLength(8)])
    });
  }

  onLogin() {
    console.log(this.form.value);
    const { email, senha } = this.form.value;
    //validar senha
    if (email === 'teste' && senha === 'teste123') {
      // redirect
      this.router.navigate(['home']);
      return;
    }
    // 
    // redirect
    this.router.navigate(['/', '']);
  }
}
