import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';

@Component({
  selector: 'app-reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  get userName2() {
    return this.registrationForm2.get('userName2');
  }

  registrationForm2 = this.fb.group({
    userName2: ['Al Shariar 2', [Validators.required, Validators.minLength(2), forbiddenNameValidator]],
    password2: ['', Validators.required],
    confirmPassword2: [''],
    address2: this.fb.group({
      city2: [''],
      state2: [''],
      postalCode2: ['']
    })
  })

  registrationForm = new FormGroup({
    userName: new FormControl('Shariar'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  })

  // in this set method you have to pass all the formgroup field

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Al Shariar',
      password: 'xyz',
      confirmPassword: 'xyz',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    })
  }

  loadApiData2() {
    this.registrationForm.patchValue({
      userName: 'Al Shariar',
      password: 'xyz',
      confirmPassword: 'xyz'
    })
  }

  loadApiForFormBuilderData() {
    this.registrationForm2.setValue({
      userName2: 'Al Shariar',
      password2: 'xyz',
      confirmPassword2: 'xyz',
      address2: {
        city2: 'City',
        state2: 'State',
        postalCode2: '123456'
      }
    })
  }
}
