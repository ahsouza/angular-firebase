import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  color: string = 'accent'
  message: string = 'Pagamento do Headphone Corsair em 2x'
  is_bestFriend: boolean = true
  subtitle: string = 'Atividades recentes'
  payment = {
    name: '',
    description: ''
  }
  inputs = {
    friend: { label: 'Cliente', placeholder: 'Adicionar Cliente...' },
    description: { label: 'Adicionar descrição', placeholder: 'Digite a descrição'} 
  }
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
