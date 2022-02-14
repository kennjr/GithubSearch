import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
// import { HeaderComponent } from './components/header/header.component';
import { ResultsComponent } from './components/results/results.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:"", component:ResultsComponent},
  {path:"about", component:AboutComponent},
  {path:"users/:api_url", component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
