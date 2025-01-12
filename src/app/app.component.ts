import { Component } from '@angular/core';
//import { ElementsHomeComponent } from "./elements/elements-home/elements-home.component";
//import { ElementsModule } from './elements/elements.module';
//import { CollectionsModule } from './collections/collections.module';
// import { CollectionsHomeComponent } from "./collections/collections-home/collections-home.component";
import { RouterOutlet, RouterLink } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet,  RouterModule, RouterLink, ElementsHomeComponent, CollectionsHomeComponent, HomeComponent, NotFoundComponent],
  imports: [RouterOutlet,  RouterModule, RouterLink, HomeComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
