import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-products.component.html',
})
export class CreateProductsComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UsersService) { }

  registerForm: any = FormGroup;

  submitted = false;

  get f() { return this.registerForm.controls; }

  /**
  * Recibe los datos enviados del formulario para ser procesados 
  **/
  onSubmit(): void {

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.submitted) {

      const user: User = this.registerForm.value;

      this.userService.createUser(user)
        .subscribe((data: any) => {
          if (data.success === true) {

          }
        });

    }

  }

  /**
  * Valida los datos del formulario enviado usando Validators
  **/
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required], Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    });

  }

}
