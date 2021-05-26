import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin-dash', title: 'admin-dash',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/drivers-list', title: 'drivers-list',  icon:'content_paste', class: '' },
    { path: '/cars-list', title: 'cars-list',  icon:'content_paste', class: '' }
    
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
export const ROUTES1: RouteInfo[] = [
    { path: '/driver-dash', title: 'driver_dash', icon: 'dashboard', class: ''},
    { path: '/trips-list', title: 'trips_list', icon: 'content_paste', class: ''},
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    localStorage.getItem
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
