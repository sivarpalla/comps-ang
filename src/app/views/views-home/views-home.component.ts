import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from "../../shared/divider/divider.component";
import { ItemListComponent } from "../item-list/item-list.component";

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent, DividerComponent, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats = [
    {
      label: 'Total Number of Users',
      value: 100,
      icon: 'person'
    },
    {
      label: 'Total Number of Posts',
      value: 10,
      icon: 'forum'
    },
    {
      label: 'Total Number of Comments',
      value: 50,
      icon: 'comment'
    }
  ];

  items = [
    {
      image: '/assets/IMAGES/couch.jpeg',
      title: 'Couch',
      description: 'This is a description of the couch'
    },
    {
      image: '/assets/IMAGES/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a description of the dresser'
    }
  ];
}
