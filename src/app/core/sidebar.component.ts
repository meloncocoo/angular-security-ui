import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html'
})

export class SidebarComponent /*implements OnInit*/ {
  // constructor() { }

  private _menus = [
    { id: 1, title: '工作台' },
    {
      id: 2, title: '黑名单',
      menus: [
        { id: 201, title: '子菜单1' },
        { id: 202, title: '子菜单2' },
        { id: 203, title: '子菜单3' },
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
