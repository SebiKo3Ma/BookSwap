import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component'; 
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, 
  { path: 'about-us', component: AboutUsComponent },
  { path: 'help', component: HelpComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule {}
