import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app';
  products: any[] = [];
  quotation: any = {}

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      }
    )
  }

  sendQuotation() {
    this.productService.sendQuotation(this.quotation).subscribe(
      (products) => {
        this.quotation={};
      }
    )
  }
}
