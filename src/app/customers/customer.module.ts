import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { CustomerGuardService } from './customer-guard.service';
import { CustomerService } from './customer.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'customers', component: CustomerListComponent },
      {
        path: 'customers/:id',
        canActivate: [CustomerGuardService],
        component: CustomerDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    CustomerService,
    CustomerGuardService
  ]
})
export class CustomerModule { }
