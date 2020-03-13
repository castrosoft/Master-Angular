import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { ZapatillaComponent} from './zapatilla/zapatilla.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { HomeComponent } from './home/home.component';

// Array de rutas
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'zapatilla', component: ZapatillaComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: '**', component: HomeComponent}
];


//exportar el modulo de l router (ya estaba hecho)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ZapatillaComponent, VideojuegoComponent];
