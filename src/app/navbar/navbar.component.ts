import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  credit: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    const numero = Number(localStorage.getItem("token"))
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
    }

    localStorage.setItem("token", JSON.stringify(this.credit));
  }

}
