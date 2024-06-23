import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { passwordMatchValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent implements OnInit{

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registrationForm2.get('subscribe2')?.valueChanges
    .subscribe(
      checkValue => {
        const email2 = this.registrationForm2.get('email2');
        if(checkValue) {
          email2?.setValidators(Validators.required);
        } else {
          email2?.clearValidators();
        }
        email2?.updateValueAndValidity();
      }
    )
  }

  get userName2() {
    return this.registrationForm2.get('userName2');
  }

  get password2() {
    return this.registrationForm2.get('password2');
  }

  get confirmPassword2() {
    return this.registrationForm2.get('confirmPassword2');
  }

  get email2() {
    return this.registrationForm2.get('email2');
  }

  registrationForm2 = this.fb.group({
    userName2: ['Al Shariar 2', [Validators.required, Validators.minLength(2), forbiddenNameValidator]],
    password2: ['', Validators.required],
    confirmPassword2: [''],
    email2: [''],
    subscribe2: [false],
    address2: this.fb.group({
      city2: [''],
      state2: [''],
      postalCode2: ['']
    })
  }, {validators: passwordMatchValidator})

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
      email2: 'itmasjoy@gmail.com',
      subscribe2: true,
      address2: {
        city2: 'City',
        state2: 'State',
        postalCode2: '123456'
      }
    })
  }
}
