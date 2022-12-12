import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { genders } from './shared/constants/genders';
import { CountriesService } from './shared/services/countries.service';
import { AsyncIsEmailExist } from './shared/validations/asyncEmailvalidate';
import { EmplIdValidtors } from './shared/validations/emplIdValidator';
import { passwordMatch } from './shared/validations/passwordMatch';
import { SpaceValidator } from './shared/validations/spaceValidator';
import { CustomRegex } from './validation-regax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'reactiveForm';
  signUpForm !: FormGroup;
  gendersArray: string[] = [genders.FEMALE, genders.MALE, genders.OTHERS]
  countryNames: string[] = [];
  passwordValidator = Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$');
  constructor(private countryService: CountriesService) {

  }
  ngOnInit(): void {
    this.countryNames = this.countryService.getAllConuntryNames();
    this.onSkillAdd();
    this.createSignUp();
    this.f['password'].valueChanges
      .subscribe(res => {
        console.log(this.f['password']?.valid);
        if(this.f['password']?.valid){
          this.f['confirmPassword']?.enable()
        }
      })

  }

  createSignUp() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, SpaceValidator.noSpaceValidation]),
      employeeId: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), EmplIdValidtors.idValidate]),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)],[AsyncIsEmailExist.forbiddenEmail]),
      gender: new FormControl(null),
      address: new FormGroup({
        country: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        zipcode: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl({ value: null, disabled: true }, [Validators.required, Validators.minLength(8)]),
    }, [passwordMatch('password', 'confirmPassword')])
  }
  onSignUp() {
    console.log(this.signUpForm);
  }
  onSkillAdd() {
    let control = new FormControl(null, [Validators.required])
    this.skillsArray?.push(control);
  }
  onSkillRemove(index: number) {
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
  get skillsArray() {
    return this.signUpForm?.get('skills') as FormArray
  }
}
