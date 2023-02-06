import { AbstractControl, ValidationErrors } from "@angular/forms";



export class EmplIdValidator {
    static isIdInvalid(control : AbstractControl) : ValidationErrors | null{
        let regexp = /^[a-z]\d{3}$/i; // E123
        let val = control.value as string;

        let isValid = regexp.test(val) // returns boolean
        if(isValid){
            return null
        }else {
           return {invalidEmplId : "EMP id Should start 1 Char and ends with 3 numbers"} 
        }
    }
}