import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent {

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
}
