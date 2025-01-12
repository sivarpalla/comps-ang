import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet, RouterLink  } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [RouterOutlet,  RouterModule, RouterLink, TableComponent, DividerComponent, TabsComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'James',
      age: '24',
      job: 'Designer',
      employed: true
    },
    {
      name: 'Kate',
      age: '22',
      job: 'Developer',
      employed: false
    },
    {
      name: 'Tom',
      age: '20',
      job: 'Marketing',
      employed: true
    }
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];
}
