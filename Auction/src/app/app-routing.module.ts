import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuideListComponent} from "./component/guide/guide-list/guide-list.component";
import {AuctionProductDetailComponent} from "./component/auction/auction-product-detail/auction-product-detail.component";
<<<<<<< HEAD
import {GuideAddComponent} from "./component/guide/guide-add/guide-add.component";
import {GuideEditComponent} from "./component/guide/guide-edit/guide-edit.component";
=======
import {ProductAddComponent} from "./component/product/product-add/product-add.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";
import {TransactionComponent} from "./component/transaction/transaction.component";
import {HomeComponent} from "./component/home/home.component";
import {UserListComponent} from "./component/user/user-list/user-list.component";
import {UserEditComponent} from "./component/user/user-edit/user-edit.component";
>>>>>>> 065895db232f2f4d6433ce4bb4678cfc6bef0af7

const routes: Routes = [
  {
    path: "product/create",
    component: ProductAddComponent
  },
  {
    path: "product/edit",
    component: ProductEditComponent
  },

  {path:"aa", component: TransactionComponent},

  {
    path:"home",
    component: HomeComponent

  },
  {
    path: "user/list",
    component: UserListComponent
  },
  {
    path: "user/edit",
    component: UserEditComponent
  },
{
  path: 'product/add',
  component: ProductAddComponent
},
  {
  path: 'guide',
  component: GuideListComponent
},
<<<<<<< HEAD
  {
    path: 'guide/edit/:id',
    component: GuideEditComponent
  },
  {
    path:'guide/add',
    component:GuideAddComponent
  },
=======
>>>>>>> 065895db232f2f4d6433ce4bb4678cfc6bef0af7
  {
    path: "auction/:productId", component: AuctionProductDetailComponent,

  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
