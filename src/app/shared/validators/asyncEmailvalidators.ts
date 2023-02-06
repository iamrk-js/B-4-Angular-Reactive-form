import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";


export class AsyncIsEmailExist {
    static forbiddenEmail(control: AbstractControl):
        Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const p = new Promise<ValidationErrors | null>((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) === 'admin@gmail.com') {
                    resolve({ emailExistError: 'Email is already Exit' })
                } else {
                    resolve(null)
                }
            }, 3000);
        })
        return p
    }
}