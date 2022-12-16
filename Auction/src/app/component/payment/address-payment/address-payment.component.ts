<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {PaymentDto} from '../../../dto/payment-dto';
import {PaymentService} from '../../../service/payment/payment.service';
=======
import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../../service/payment/payment.service';
import {Payment} from "../../../model/payment/payment";
import {PaymentDto} from "../../../dto/payment-dto";
>>>>>>> 2b1b85a211f1209881fdd66cbe7c53bcef2e37a8

@Component({
  selector: 'app-address-payment',
  templateUrl: './address-payment.component.html',
  styleUrls: ['./address-payment.component.css']
})
export class AddressPaymentComponent implements OnInit {

  paymentDtoList: PaymentDto[];

  total: number;

  constructor(private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.getListPayment();
    this.getTotalBill();
  }

  getListPayment() {
    this.paymentService.getListPayment().subscribe(value => {
      if (value != null) {
        this.paymentDtoList = value;
        console.log(value);
      }
    });
  }

  getTotalBill() {
    this.paymentService.getTotalBill().subscribe(value => {
      this.total = value.totalBill;
    });
  }

  redirectPayment() {
    this.paymentService.getPaymentList(this.paymentDtoList);
    this.paymentService.getToTal(this.total);
  }
}
