import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from 'src/components/container.component';
import { ExamplePage } from './pages/example.page';

const routes: Routes = [
  {path: '', component: ContainerComponent, children: [
    {path: 'page1', component: ExamplePage},
    {path: '', redirectTo: '/page1', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
