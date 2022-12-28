import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SelectedProducts } from '../interfaces/selected-products';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  products = [
    { nome: "Chuteira", valor: 150, img: "chuteira.png" },
    { nome: "Bola", valor: 100, img: "bola-adidas.png" },
    { nome: "Camisa", valor: 150, img: "camisa.png" }
  ];
  selectedProducts: SelectedProducts[] = [];
  totalProducts: number = 0;
  quantity = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addProducts(name: string, valor: number) {
    let div = (<HTMLInputElement>document.getElementById('cartBall'));
    let product;
    // if (!this.selectedProducts.some((x) => x.nome == name)) {
    //  };
    //  this.selectedProducts.push({
    //   nome: name,
    //   valor: valor,
    //   qtd: this.quantity
    // });
    if (this.selectedProducts.length != 0) {
      div.style.display = 'flex';
    };
      console.log(this.selectedProducts);
  }

  removeItem(name: string) {
    this.selectedProducts = this.selectedProducts.filter(x => x.nome != name);
    // console.log(this.selectedProducts);
  }

  count(obj: SelectedProducts) {
    
  }

}
