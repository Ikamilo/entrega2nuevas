import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { UsersComponent } from './users/users.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { ShapesComponent } from './shapes/shapes.component';
import { SaucesComponent } from './sauces/sauces.component';
import { SizesComponent } from './sizes/sizes.component';
import { HomeComponent } from './home/home.component';
import { AddPizzasComponent } from './add-pizzas/add-pizzas.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AddFlavorsComponent } from './add-flavors/add-flavors.component';
import { AddShapesComponent } from './add-shapes/add-shapes.component';
import { AddSaucesComponent } from './add-sauces/add-sauces.component';
import { AddSizesComponent } from './add-sizes/add-sizes.component';

const routes: Routes = [
  {path: 'pizzas', component: PizzasComponent},
  {path: 'users', component: UsersComponent},
  {path: 'flavors', component: FlavorsComponent},
  {path: 'shapes', component: ShapesComponent},
  {path: 'sauces', component:SaucesComponent},
  {path: 'sizes', component: SizesComponent},
  {path: 'addpizzas', component: AddPizzasComponent},
  {path: 'addusers', component: AddUsersComponent},
  {path: 'addflavors', component: AddFlavorsComponent},
  {path: 'addshapes', component: AddShapesComponent},
  {path: 'addsauces', component:AddSaucesComponent},
  {path: 'addsizes', component: AddSizesComponent},
  {path: '**', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
 
