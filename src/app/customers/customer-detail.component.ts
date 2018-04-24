import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  pageTitle: string = 'Customer Detail';
  errorMessage: string;
  customer: ICustomer;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _customerService: CustomerService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCustomer(id);
    }
  }

  getCustomer(id: number) {
    this._customerService.getCustomer(id).subscribe(
      customer => this.customer = customer,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/customers']);
  }

}
