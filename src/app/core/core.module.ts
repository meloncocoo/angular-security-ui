import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {
  DropdownModule,
  CollapseModule,
  TabsModule,
  TooltipModule
} from 'ng2-bootstrap';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SidebarComponent } from './sidebar.component';

let COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SharedModule,
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ].concat(COMPONENTS),
  declarations: COMPONENTS
})
export class CoreModule { }
