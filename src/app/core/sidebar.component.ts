import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html'
})

export class SidebarComponent /*implements OnInit*/ {
  @Output() public expandChange = new EventEmitter<boolean>();

  // constructor() { }

  private _menus = [
    { id: 1, title: 'DASHBOARD', href: '/dashboard', icon: 'fa fa-dashboard' },
    { id: 2, title: 'ASSET MGMT', icon: 'fa fa-delicious' },
    { id: 3, title: 'VULNERABILITY MGMT', icon: 'fa fa-cube' },
    {
      id: 4, title: 'THREAT INTEL MGMT',
      menus: [
        { id: 401, title: 'MY THREAT INTEL LIST', icon: 'glyphicon glyphicon-list' },
        { id: 402, title: 'SEARCH', icon: 'glyphicon glyphicon-search' }
      ]
    },
    {
      id: 5, title: 'RISK ASSESSMENT',
      menus: [
        { id: 501, title: 'RISK MODEL', icon: 'glyphicon glyphicon-warning-sign' }
      ]
    },
    {
      id: 6, title: 'SUSPICIOUS TRANSACTION',
      menus: [
        { id: 601, title: 'ALERTS', icon: 'glyphicon glyphicon-alert' },
        { id: 602, title: 'REPORTS', icon: 'glyphicon glyphicon-duplicate' },
        { id: 603, title: 'MODEL', icon: 'glyphicon glyphicon-tower' }
      ]
    },
    {
      id: 7, title: 'IOC INPUTS',
      menus: [
        { id: 701, title: 'NETWORK IOC', icon: 'fa fa-superpowers' },
        { id: 702, title: 'ENDPOINT IOC', icon: 'fa fa-diamond' }
      ]
    },
    { id: 8, title: 'QUERY', icon: 'glyphicon glyphicon-search' },
    {
      id: 9, title: 'REPORTS',
      menus: [
        { id: 901, title: 'AUDIT REPORTS', href: '/report/audit', icon: 'fa fa-line-chart' },
        { id: 902, title: 'RISK REPORTS', icon: 'fa fa-laptop' }
      ]
    },
    {
      id: 10, title: 'USER ADMIN',
      menus: [
        { id: 1001, title: 'USER ACTIVITIES', icon: 'fa fa-user' }
      ]
    },
    {
      id: 11, title: 'SETTINGS',
      menus: [
        { id: 1101, title: 'HEALTH CHECK', icon: 'fa fa-check' },
        { id: 1102, title: 'BACKUP', icon: 'fa fa-database' }
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
    this.expandChange.emit(this._expand);
  }

  public onSelect(item, items): void {
    if (items) {
      items.forEach((i) => {
        if (i.id !== item.id) {
          i.active = false;
        }
      });
    }
    item.active = !item.active;
  }
}
