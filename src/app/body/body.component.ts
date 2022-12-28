import { Component, OnInit } from '@angular/core';

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

  totalProducts:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  count(name: string) {
    let div = (<HTMLInputElement>document.getElementById('cartBall'));
    this.totalProducts++;
    if (this.totalProducts > 0) {
      div.style.display = 'flex';
    }
    console.log(name);
}

}
