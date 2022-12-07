import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from './shared/services/countries.service';
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
  countryNames  : string[] = []
  constructor(private countryService : CountriesService) {

  }
  ngOnInit(): void {
    this.countryNames = this.countryService.getAllConuntryNames()
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      gender: new FormControl(null),
      address: new FormGroup({
        country: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        zipcode: new FormControl(null, Validators.required)
      })
    })
  }

  onSignUp() {
    console.log(this.signUpForm);
  }
  get f(){
    return this.signUpForm.controls;
  }
  get userNameControl() {
    return this.signUpForm?.get('username') ;
  }
  get emailControl() {
    return this.signUpForm?.get('email') as FormControl;
  }

  get countryControl() {
    return this.signUpForm?.get('address')?.get('country') as FormControl;
  }
  get stateControl() {
    return this.signUpForm?.get('address')?.get('state') as FormControl;
  }
  get cityControl() {
    return this.signUpForm?.get('address')?.get('city') as FormControl;
  }
  get zipcodeControl() {
    return this.signUpForm?.get('address')?.get('zipcode') as FormControl;
  }
}
