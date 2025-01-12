import { Component } from '@angular/core';
import { RouterOutlet,RouterModule,RouterLink  } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterOutlet,  RouterModule, RouterLink],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
