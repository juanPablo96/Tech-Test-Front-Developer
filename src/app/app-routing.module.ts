import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
     // El componente que refiere al path indicado
    path:'',
    component: LoginComponent,
  },
 /*  {
    path:'home',
  },
  {
    path:"about",
  }, */


// para re direccionar rutas
// {
//   path:'',
//   redirectTo:"/home",
//   pathMatch:"full"
// }

  {
    path:"**",
    component:PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // sistema de rutas principal
  exports: [RouterModule]
})
export class AppRoutingModule { }
