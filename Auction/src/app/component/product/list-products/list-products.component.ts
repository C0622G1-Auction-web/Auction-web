import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product/product.service';
import {NotificationService} from '../../../service/notification/notification.service';
import {PageProduct} from '../../../model/product/page-product';
import {SearchProductDtoRoleAdmin} from '../../../model/product/search-product-dto-role-admin';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  p = 1;
  count = 5;

  pageProducts: PageProduct;
  searchProduct: SearchProductDtoRoleAdmin;

  constructor(private _productService: ProductService,
              private _notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this.searchProduct = {
      productName: '',
      categoryName: '',
      sellerName: '',
      minPrice: 0,
      maxPrice: 40000000,
      auctionStatusName: ''
    };
    this._productService.getAll(this.searchProduct).subscribe(data => {
      this.pageProducts = data;
      console.log(this.pageProducts);
    }, error => {
      this._notificationService.showErrorNotification('Không thể kết nối đến Server');
    });
  }

}