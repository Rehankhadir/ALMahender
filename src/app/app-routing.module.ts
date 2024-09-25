import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiTaskComponent } from './Task/ui-task/ui-task.component';

const routes: Routes = [
  {path:"ui",component:UiTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
