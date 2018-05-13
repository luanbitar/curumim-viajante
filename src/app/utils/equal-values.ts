import { AbstractControl } from '@angular/forms';

export class EqualValues {
    static MatchValues(ac: AbstractControl) {
        const password = ac.get('password').value;
        const confirmPassword = ac.get('passwordConfirm');
        const isEqualValue = password === confirmPassword.value;
        if ( !isEqualValue ) {
            confirmPassword.setErrors({ pwMatch: true});
        } else {
            return null;
        }
    }
}
