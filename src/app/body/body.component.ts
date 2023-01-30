import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SelectedProducts } from '../interfaces/selected-products';
import {MatButtonModule} from '@angular/material/button';


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
  showImage: boolean = false;
  userCredit: number = 0;
  constructor() { }

  ngOnInit(): void {
    const credit = Number(localStorage.getItem("token"));
    this.userCredit = credit;
  }

  addProducts(id:number, name: string, valor: number, img: string) {
    let div = (<HTMLInputElement>document.getElementById('cartBall'));
     if (!this.selectedProducts.some((x) => x.nome == name)) {
      this.selectedProducts.push({
        id: id,
        nome: name,
        valor: valor,
        qtd: this.quantity,
        img: img
      });
      } else {
        this.selectedProducts.find(x => {
          if(x.id == id) {
            x.qtd++;
          }
        });
      };
    this.totalProducts = this.totalVal(this.selectedProducts);
  }

  removeItem(id: number) {
    this.selectedProducts.find(x => {
      if(x.id == id){
        x.qtd--
      };
      this.selectedProducts.forEach(element => {
        if(element.qtd < 1) {
          this.selectedProducts = this.selectedProducts.filter(x => x.id != id);
        } 
      });
    });
    this.totalProducts = this.totalVal(this.selectedProducts)
  }

  totalVal(obj: any): number {
    let total = 0;
    for(let i = 0; i < obj.length; i++) {
      total += obj[i].valor * obj[i].qtd
    }
    return total
  }

  purchase(totalVal: number) {
    if(totalVal <= this.userCredit) {
      localStorage.setItem("token", JSON.stringify(this.userCredit -= totalVal));
      alert('Compra finalizada com sucesso!');
      return location.reload();
    }
    else {
      return alert('Você não tem crédito suficiente!');
    }
  }
}
