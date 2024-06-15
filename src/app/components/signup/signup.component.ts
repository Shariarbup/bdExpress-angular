import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  topics = ['Java', 'Angular', 'Full Stack']
  signUp(data: Object): void {
      console.log("🚀 ~ SignupComponent ~ signUp ~ data:", data)
      
  }
}
