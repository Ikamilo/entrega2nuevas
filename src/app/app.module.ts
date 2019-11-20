import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzasServicesService } from './pizzas-services.service';
import { UsersComponent } from './users/users.component';
import { SizesComponent } from './sizes/sizes.component';
import { ShapesComponent } from './shapes/shapes.component';
import { SaucesComponent } from './sauces/sauces.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AddPizzasComponent } from './add-pizzas/add-pizzas.component';
import { AddShapesComponent } from './add-shapes/add-shapes.component';
import { AddSaucesComponent } from './add-sauces/add-sauces.component';
import { AddFlavorsComponent } from './add-flavors/add-flavors.component';
import { AddSizesComponent } from './add-sizes/add-sizes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    SizesComponent,
    ShapesComponent,
    SaucesComponent,
    PizzasComponent,
    FlavorsComponent,
    AddUsersComponent,
    AddPizzasComponent,
    AddShapesComponent,
    AddSaucesComponent,
    AddFlavorsComponent,
    AddSizesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PizzasServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
