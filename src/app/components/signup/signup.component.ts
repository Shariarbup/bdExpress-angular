import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ModelContentComponent } from '../model-content/model-content.component';

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
    private userService: UserserviceService,
    private modalService: NgbModal
  ) {}
  
  signUp(data: any): void {
      console.log("🚀 ~ SignupComponent ~ signUp ~ data:", data.value)
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


  openModal() {
    console.log("Hello")
    const modelDiv = document.getElementById('myModal');
    if (modelDiv !== null) {
      modelDiv.style.display = 'block';
      modelDiv.style.paddingRight= '17px';
    }
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv !== null) {
      modelDiv.style.display = 'none';
    }
  }

  openModalNgBootstrapModal() {
    const modalRef = this.modalService.open(ModelContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
