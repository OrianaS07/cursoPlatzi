import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form !: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { this.buildForm(); }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    console.log(this.form.value);
  }

  private buildForm(){
    this.form = this.formBuild. group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
