import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  topics = ['Java', 'Angular', 'Full Stack'];
  userModel : User = new User("Al Shariar", "itmasjoy@gmail.com", 1968385155, new Date(), "123", "123", "" , "morning", false) ;
  topicHasError: boolean = true;
  errorMsg = '';
  

  constructor(
    private userService: UserserviceService
  ) {}
  
  signUp(data: User): void {
      console.log("🚀 ~ SignupComponent ~ signUp ~ data:", data)
      this.userService.enroll(data)
      .subscribe(
        data => console.log(data),
        error => this.errorMsg = error.statusText
      );
  }

  validateTopic(topicValue: string) {
    if (topicValue === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  // The control has been visited - ng-touched ng-untouched
  // The control has been visted - ng-dirty ng-pristine
  // The controls value is ng-valid ng-invalid

  // ngModel Properties:
  // class - properties
  // ng-untouched - untouched
  // ng-touched - touched
  // ng-pristine - pristine
  // ng-dirty - dirty
  // ng-valid - valid
  // ng-invalid - invalid
}
