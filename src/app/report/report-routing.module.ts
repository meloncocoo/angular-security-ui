import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditComponent } from './audit.component';

const routes: Routes = [
  { path: 'report', children: [
    { path: '', redirectTo: 'audit', pathMatch: 'full' },
    { path: 'audit', component: AuditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule { }

export const routedComponents = [AuditComponent];
