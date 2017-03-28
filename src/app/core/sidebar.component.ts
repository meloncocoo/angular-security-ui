import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html'
})

export class SidebarComponent /*implements OnInit*/ {
  // constructor() { }

  private _menus = [
    { id: 1, title: 'Dashboard' },
    { id: 2, title: 'Asset Mgmt' },
    { id: 2, title: 'Vulnerability Mgmt' },
    {
      id: 2, title: 'Threat Intel Mgmt',
      menus: [
        { id: 201, title: 'My Threat Intel List' },
        { id: 202, title: 'Search' }
      ]
    },
    {
      id: 5, title: 'Risk Assessment',
      menus: [
        { id: 501, title: 'Risk Model' }
      ]
    },
    {
      id: 6, title: 'Suspicious Transaction',
      menus: [
        { id: 601, title: 'Alerts' },
        { id: 602, title: 'Reports' },
        { id: 603, title: 'Model' }
      ]
    },
    {
      id: 7, title: 'IOC inputs',
      menus: [
        { id: 701, title: 'Network IOC' },
        { id: 702, title: 'Endpoint IOC' }
      ]
    },
    { id: 8, title: 'Query' },
    {
      id: 9, title: 'Reports',
      menus: [
        { id: 901, title: 'Audit Reports' },
        { id: 902, title: 'Risk Reports' }
      ]
    },
    {
      id: 10, title: 'User Admin',
      menus: [
        { id: 1001, title: 'User Activities' }
      ]
    },
    {
      id: 11, title: 'Settings',
      menus: [
        { id: 1101, title: 'Health Check' },
        { id: 1102, title: 'Backup' }
      ]
    }
  ];

  private _expand: boolean = true;

  public get menus() {
    return this._menus;
  }

  public get expand() {
    return this._expand;
  }

  // public ngOnInit() { }

  public onExpand(): void {
    this._expand = !this._expand;
  }

  public onSelect(item, items): void {
    if (items) {
      items.forEach((i) => {
        i.active = false;
      });
    }
    item.active = !item.active;
  }
}
