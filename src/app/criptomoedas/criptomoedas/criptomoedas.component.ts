import { Component, OnInit } from '@angular/core';

import { Criptomoeda } from '../model/criptomoeda';

@Component({
  selector: 'app-criptomoedas',
  templateUrl: './criptomoedas.component.html',
  styleUrls: ['./criptomoedas.component.css']
})
export class CriptomoedasComponent implements OnInit {

  quantity: number = 2
  price: number = 250000
  purchasePrice: number = 33 * this.quantity
  balance: number = (this.price * this.quantity) - (this.purchasePrice * this.quantity)

  criptomoedas: Criptomoeda[] = [
    { _id: '1', name: 'Bitcoin - BTC', quantity: this.quantity, price: this.price, purchasePrice: this.purchasePrice, balance: this.balance },
    { _id: '1', name: 'Bitcoin - BTC', quantity: this.quantity, price: this.price, purchasePrice: this.purchasePrice, balance: this.balance }
  ];
  displayedColumns = ['_id', 'name', 'quantity', 'price', 'purchasePrice', 'balance'];

  constructor() {
    // this.criptomoedas = []
  }

  ngOnInit(): void {
  }

}
