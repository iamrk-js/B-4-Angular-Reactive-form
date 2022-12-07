import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './validation-regax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'reactiveForm';
  signUpForm !: FormGroup;
  gendersArray: string[] = ["Female", "Male", "Others"]
  constructor() {

  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      gender: new FormControl(null)
    })
  }

  onSignUp() {
    console.log(this.signUpForm);
  }

  get userNameControl() {
    return this.signUpForm?.get('username') as FormControl;
  }
}
