import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UsersService) { }

  registerForm: any = FormGroup;

  submitted = false;

  get f() {
    return this.registerForm.controls;
  }

  /**
  * Recibe los datos enviados por el usuario para ser procesados 
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

        });
    }

  }

  /**
  * Valida los campos enviados por el usuario 
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
