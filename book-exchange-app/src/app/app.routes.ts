import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component'; // Asigură-te că calea este corectă

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Ruta principală
  // alte rute pot fi adăugate aici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importă rutele
  exports: [RouterModule] // Exportă RouterModule pentru a fi folosit în aplicație
})
export class AppRoutingModule {}
