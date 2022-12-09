import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from './shared/services/countries.service';
import { CustomRegex } from './validation-regax';

export enum  genders {MALE = "male", FEMALE = "female", OTHERS = "others"};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'reactiveForm';
  signUpForm !: FormGroup;
  gendersArray: string[] = [genders.FEMALE, genders.MALE, genders.OTHERS]
  countryNames: string[] = []
  constructor(private countryService: CountriesService) {

  }
  ngOnInit(): void {
    this.countryNames = this.countryService.getAllConuntryNames();
    this.onSkillAdd();
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      gender: new FormControl(null),
      address: new FormGroup({
        country: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        zipcode: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      password : new FormControl(null, [Validators.required]),
      confirmPassword : new FormControl(null, [Validators.required]),
    })
  }

  onSignUp() {
    console.log(this.signUpForm);
  }
  onSkillAdd(){
    let control = new FormControl(null, [Validators.required])
    this.skillsArray?.push(control);
  }
  onSkillRemove(index:number){
    this.skillsArray.removeAt(index)
  }
  get f() {
    return this.signUpForm.controls;
  }
  get userNameControl() {
    return this.signUpForm?.get('username');
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
  get skillsArray(){
    return this.signUpForm?.get('skills') as FormArray
  }
}
