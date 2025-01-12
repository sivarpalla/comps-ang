import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  //declaration missing
  imports: [
    CommonModule,
    ElementsRoutingModule,
    ElementsHomeComponent,
    SharedModule 
  ],
  exports: [
   ElementsHomeComponent
  ]
})
export class ElementsModule { }
