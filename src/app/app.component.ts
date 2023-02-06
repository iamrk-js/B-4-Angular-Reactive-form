import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Genders } from './shared/constants/genders';
import { CountryService } from './shared/services/country.service';
import { AsyncIsEmailExist } from './shared/validators/asyncEmailvalidators';
import { EmplIdValidator } from './shared/validators/emplIdvalidator';
import { NoSpaceValidtor } from './shared/validators/noSpaceValidator';
import { passWordMatch } from './shared/validators/passWordmatch';
import { CustomRegex } from './validation-regax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'reactiveForm';
  signUpForm !: FormGroup;  // formBuilder
  // gendersArray: string[] = ["Female", "Male", "Others"];
  gendersArray: string[] = [Genders.FEMALE, Genders.MALE, Genders.OTHERS];
  countryArray: string[] = []
  constructor(private countryService: CountryService) {

  }
  ngOnInit(): void {
    this.createSignUpForm();
    this.countryArray = this.countryService.getCountryNames();
    // console.log(this.countryArray);
    this.f['password'].valueChanges
      .subscribe(res => {
        if(this.f['password']?.valid){
          this.f['confirmpassword']?.enable();
        }else{
          this.f['confirmpassword']?.disable();
        }
      })
  }

  createSignUpForm() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required, NoSpaceValidtor.noSpace]),
      empId : new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), EmplIdValidator.isIdInvalid]) ,
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)], 
      [AsyncIsEmailExist.forbiddenEmail]),
      gender: new FormControl(null),
      permanentAddress: new FormGroup({
        country: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        zipcode: new FormControl(null),
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyText), Validators.minLength(8)]),
      confirmpassword: new FormControl({value : null, disabled : true}, [Validators.required]),
    },[passWordMatch('password', 'confirmpassword')])
  }

  onAddSkills() {
    if (this.skillsArray.length < 5) {
      let skillControl = new FormControl(null, Validators.required);
      this.skillsArray.push(skillControl)
    } else {
      return
    }
  }
  onSkillRemove(i: number) {
    this.skillsArray.removeAt(i)
  }
  onSignUp() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm);
  }
  get f() {
    return this.signUpForm.controls;
  }
  get userNameControl() {
    return this.signUpForm?.get('username') as FormControl;
  }

  get emailControl() {
    return this.signUpForm?.get('email') as FormControl;
  }

  get skillsArray() {
    return this.signUpForm?.get('skills') as FormArray
  }

}

// {
//   username : "",
//   email : "",
//   gender : '',
//   address : {
//     country : '',
//     state : "",
//     city : "",
//     zipcode : ''
//   }
// }
// Validators.compose