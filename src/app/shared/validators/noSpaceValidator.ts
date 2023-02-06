import { AbstractControl, ValidationErrors } from "@angular/forms";


export class NoSpaceValidtor {
    static noSpace (control :AbstractControl) : ValidationErrors | null {
        let val = control.value as string;
        if(val?.includes(" ")){
            return {
                noSpaceError : 'Space is not allowed'
            }
        }else{
            return null
        }
    }
}