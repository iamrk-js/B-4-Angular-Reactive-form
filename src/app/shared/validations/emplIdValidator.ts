import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmplIdValidtors {
    static idValidate(control : AbstractControl) : ValidationErrors | null{
        let regexp = /^[a-z]\d{3}$/i
        let val = control.value as string;
        let isValid = regexp.test(val)

        return isValid ? null : {invalidid : true}
    }
}