import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.css']
})
export class ModelContentComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close('Close click');
  }

  dismiss() {
    this.activeModal.dismiss('Cross click');
  }

}
