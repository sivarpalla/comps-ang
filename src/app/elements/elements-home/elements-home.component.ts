import { Component } from '@angular/core';
import { PlaceholderComponent } from "../placeholder/placeholder.component";
import { TimesDirective } from '../times.directive';
import { SharedModule } from '../../shared/shared.module';
import { SegmentComponent } from '../segment/segment.component';

@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [PlaceholderComponent,TimesDirective,SharedModule, SegmentComponent],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css'
})
export class ElementsHomeComponent {

}
