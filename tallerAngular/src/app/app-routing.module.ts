import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { VideoFrontComponent } from './componente/video-front/video-front.component';
import { BackendComponent } from './componente/backend/backend.component';
import { FullStackComponent } from './componente/full-stack/full-stack.component';


const routes: Routes = [
  {path:'Inicio', component:InicioComponent},
  {path:'',component:InicioComponent},
  {path:'VideoFront', component:VideoFrontComponent},
    {path:'Backend',component:BackendComponent},
    {path:'FullStack',component:FullStackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
