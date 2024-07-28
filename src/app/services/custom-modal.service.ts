import { ComponentFactoryResolver, Injectable, TemplateRef } from '@angular/core';
import { SignupComponent } from '../components/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  constructor(private resolver: ComponentFactoryResolver) { }

  open(content: TemplateRef<any>, options: {size?: string, title?: string}) {
    const modalComponentFacotry = this.resolver.resolveComponentFactory(SignupComponent);
  }
}
