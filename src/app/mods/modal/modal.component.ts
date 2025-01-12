import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
      document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
      //document.body.removeChild(this.el.nativeElement);
      this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }
}
