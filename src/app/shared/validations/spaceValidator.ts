import { AbstractControl, ValidationErrors } from "@angular/forms";


export class SpaceValidator {
    static noSpaceValidation (control : AbstractControl) : ValidationErrors | null{
        if((control.value as string).includes(" ")){
            return {
                noSpaceError : 'Space is not allowed'
            }
        }else{
            return null;
        }
    }
}