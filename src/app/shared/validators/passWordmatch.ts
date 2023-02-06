import { AbstractControl } from "@angular/forms";


export function passWordMatch(password: string, confirmPassword: string) {
    return function (form: AbstractControl) {
        let passwordValue = form?.get(password)?.value;
        let confirmPasswordValue = form?.get(confirmPassword)?.value;
        // if(passwordValue === confirmPasswordValue){
        //     return null
        // }else{
        //     return {passwordMissmatch : 'Password and confirm password should be same'}
        // }
        return passwordValue === confirmPasswordValue ? null : { passwordMissmatch: 'Password and confirm password should be same' }
    }
}