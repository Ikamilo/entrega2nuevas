import { Injectable } from '@angular/core';
import { Pizzas } from './pizzas';
import { Shapes } from './shapes';
import { Sauces } from './sauces';
import { Flavors } from './flavors';
import { Sizes } from './sizes';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzasServicesService {

  pizza:Pizzas
  shape:Shapes
  sauce:Sauces
  flavor:Flavors
  size:Sizes
  user:Users

  constructor(private http:HttpClient) { }

  getQuery( query:string ){
    const url = `https://calm-mountain-38787.herokuapp.com/${ query }`;
    return this.http.get(url);
  }

  postPizza(shape_id:number,sauce_id:number,flavor_id:number,size_id:number,user_id:number,total_price:number){
    this.pizza = {shape_id:shape_id,sauce_id:sauce_id,flavor_id:flavor_id,size_id:size_id,user_id:user_id,total_price:total_price};
    const url = `https://calm-mountain-38787.herokuapp.com/pizzas`;
    return this.http.post(url,this.pizza);
  }

  postShape(name:string,price:number){
    this.shape = {name:name,price:price};
    const url = `https://calm-mountain-38787.herokuapp.com/shapes`;
    return this.http.post(url,this.shape);
  }

  postSauce(name:string,price:number){
    this.sauce = {name:name,price:price};
    const url = `https://calm-mountain-38787.herokuapp.com/sauces`;
    return this.http.post(url,this.sauce);
  }
  
  postFlavor(name:string,price:number){
    this.flavor = {name:name,price:price};
    const url = `https://calm-mountain-38787.herokuapp.com/flavors`;
    return this.http.post(url,this.flavor);
  }

  postSize(name:string,price:number){
    this.size = {name:name,price:price};
    const url = `https://calm-mountain-38787.herokuapp.com/sizes`;
    return this.http.post(url,this.size);
  }
  
  postUser(name:string,email:string,password:string){
    this.user = {"name":name,"email":email,"password":password};
    const url = `https://calm-mountain-38787.herokuapp.com/users`;
    return this.http.post(url,this.user);
  }


  deletePizza(index:number){
    const url = `https://calm-mountain-38787.herokuapp.com/pizzas/${index}`;
    return this.http.delete(url);
  }

  deleteShape(index:number){
    const url = `https://calm-mountain-38787.herokuapp.com/shapes/${index}`;
    return this.http.delete(url);
  }


  deleteSauce(index:number){
    const url = `https://calm-mountain-38787.herokuapp.com/sauces/${index}`;
    return this.http.delete(url);
  }

  deleteFlavor(index:number){
    const url = `https://calm-mountain-38787.herokuapp.com/flavor/${index}`;
    return this.http.delete(url);
  }

  deleteSize(index:number){
    const url = `https://calm-mountain-38787.herokuapp.com/sizes/${index}`;
    return this.http.delete(url);
  }


  deleteUser(index:number){
    const url = `https://calm-mountain-38787.herokuapp.com/users/${index}`;
    return this.http.delete(url);
  }


  getPizza(){
    return this.getQuery('pizzas');
  }

  getShape(){
    return this.getQuery('shapes');
  }

  getSauce(){
    return this.getQuery('sauces');
  }

  getFlavor(){
    return this.getQuery('flavors');
  }
  
  getSize(){
    return this.getQuery('sizes');
  }

  getUser(){
    return this.getQuery('users');
  }
}
