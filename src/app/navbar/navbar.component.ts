import { Component, OnInit } from '@angular/core';
import * as $AB from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  credit: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    const numero = Number(localStorage.getItem("token"));
    this.credit = numero;
  }

  updateUserCredit() {
    let value = (<HTMLInputElement>document.getElementById('creditqtd')).value;
    let number = parseFloat(value);
    if (Number.isNaN(number) || number <= 0) {
      alert("Digite um número válido!");
    }
     else {
      this.credit += number;
      $('#myModal').modal('hide');
      alert('Crédito recarregado com sucesso');
      location.reload();
    }

    localStorage.setItem("token", JSON.stringify(this.credit));
  }

}
