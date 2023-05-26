import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	formSubmitted = false;
	loginForm = this.fb.group(
		{
		email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
		// password: ['', Validators.required ]
		// email: [ 'adm@gmail.com' , [ Validators.required ] ],
		password: ['', Validators.required ],
		remember: false,
	  });

    constructor(
      private fb: FormBuilder,
      private router: Router) {

    }

	login () {}

	register() {}
}
