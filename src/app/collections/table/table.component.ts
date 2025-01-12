import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  // @Input() data: { [key: string]: unknown }[] = [];
  // @Input() headers: { key: string, label: string }[] = [];  
  @Input() data:any = [];
  @Input() headers:any[] = [];

  @Input() classNames = '';
}
