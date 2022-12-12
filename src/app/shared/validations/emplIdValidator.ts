import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmplIdValidtors {
    static idValidate(control: AbstractControl): ValidationErrors | null {
        let regexp = /^[a-z]\d{3}$/i
        let val = control.value as string;
        let isValid = regexp.test(val)

        return isValid ? null : { invalidid: true }
    }

     passwordMatchValidator(control: AbstractControl) {
        const password = control?.get('password')?.value;
        const confirmPassword = control?.get('confirmPassword')?.value;

        if(password != confirmPassword){
            control?.get('confirmPassword')?.setErrors({NoPasswordMatch : true})
        }else{
            control?.get('confirmPassword')?.setErrors(null)
        }

    }
}



