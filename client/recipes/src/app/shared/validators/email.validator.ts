import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    
    if (!value) {
      return null;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]{4,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    if (!emailRegex.test(value)) {
      return { invalidEmail: true };
    }

    return null;
  };
}