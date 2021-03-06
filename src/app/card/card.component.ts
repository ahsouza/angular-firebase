import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  color: string = 'accent'
  friend_name: string = 'Jordan Lima'
  message: string = 'Pagamento do Headphone Corsair em 2x'
  is_bestFriend: boolean = true
  subtitle: string = 'Atividades recentes'
  buttons ={
    left: {title: 'enviar', color: 'success', backgroundColor: 'primary', disable: false },
    right: {title: 'solicitar', color: 'warn', backgroundColor: 'primary', disable: false }
  }
  i = 0
  constructor() { }

  ngOnInit(): void {

  }

  sendPayment() {
    console.log('Efetuar pagamento via PIX/QR-CODE/Link')
  }
  requestPayment() {
    console.log('Solicitar pagamento via PIX/QR-CODE/Link')
  }


}
