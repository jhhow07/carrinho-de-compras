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
    { id: 1, nome: "Chuteira", valor: 150, img: "chuteira.png" },
    { id: 2, nome: "Bola", valor: 100, img: "bola-adidas.png" },
    { id: 3, nome: "Camisa", valor: 150, img: "camisa.png" }
  ];
  selectedProducts: SelectedProducts[] = [];
  quantity: number = 1;
  totalProducts: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addProducts(id:number, name: string, valor: number) {
    let div = (<HTMLInputElement>document.getElementById('cartBall'));
    let product;
     if (!this.selectedProducts.some((x) => x.nome == name)) {
      this.selectedProducts.push({
        id: id,
        nome: name,
        valor: valor,
        qtd: this.quantity
      });
      } else {
        this.selectedProducts.find(x => {
          if(x.id == id) {
            x.qtd++;
          }
        });
      };
    // if (this.selectedProducts.length > 0) {
    //   div.style.display = 'flex';
    // };
    this.totalProducts = this.totalVal(this.selectedProducts);
  }

  removeItem(name: string) {
    this.selectedProducts = this.selectedProducts.filter(x => x.nome != name);
  }

  totalVal(obj: any): number {
    let total = 0;
    for(let i = 0; i < obj.length; i++) {
      total += obj[i].valor * obj[i].qtd
    }
    return total
  }

}
