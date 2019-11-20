import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-sauces',
  templateUrl: './sauces.component.html',
  styleUrls: ['./sauces.component.css']
})
export class SaucesComponent implements OnInit {

  datos: any[] = [];

  constructor(private servicio:PizzasServicesService) {this.Sauces() }

  ngOnInit() {
  }

  Sauces(){
    this.servicio.getSauce().subscribe( (data:any)=>{
      this.datos = data;
      console.log(this.datos[0].id);
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

  eliminarSalsa(index:number){
    this.servicio.deleteSauce(this.datos[index].id).subscribe((data:any)=>{
      this.Sauces();
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
