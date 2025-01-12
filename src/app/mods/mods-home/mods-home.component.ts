import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SharedModule } from "../../shared/shared.module";
import { DividerComponent } from "../../shared/divider/divider.component";
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ModalComponent, DividerComponent, CommonModule, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky bllue',
      content: 'The sky is blue because of air'
    },
    {
      title: 'what does the orange taste',
      content: 'Orange taste like sweet lemon'
    },
    {
      title: 'how do you make an orange',
      content: 'Oranges are made by oranges'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    console.log('Hello Mods Home');
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
