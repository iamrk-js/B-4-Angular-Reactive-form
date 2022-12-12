import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";


export class AsyncIsEmailExist {
    static forbiddenEmail(control: AbstractControl): Promise<any> | Observable<any> {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) === 'admin@gmail.com') {
                    resolve({ emailExist: "Email is already Exist" })
                } else {
                    resolve(null)
                }
            }, 2000);
        })
        return p;
    }
}