import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.css']
})
export class ModelContentComponent {
  @Input() data: any; 
  valueToPassBack: string = '';
  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close('Close click');
  }

  dismiss() {
    this.activeModal.dismiss('Cross click');
  }

  passBackValue() {
    // Pass back data to the parent component
    console.log("🚀 ~ ModelContentComponent ~ passBackValue ~ this.valueToPassBack:", this.valueToPassBack)
    this.activeModal.close(this.valueToPassBack);
  }

  onValueChange(value: any) {
    this.passBackValue = value;
  }

}
