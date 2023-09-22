import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  menuItems: MenuItem[] = [
    { label: 'Dispatch', route: '/dispatch' },
    { label: 'Ride Closeout', route: '/ride-closeout' },
    { label: 'Invoice', route: '/invoice' },
    { label: 'Manifest', route: '/.manifest' },
    { label: 'Incident', route: '/.incident' }
  ];
}

interface MenuItem {
  label: string;
  route: string;
}

