import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  produtos: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }
}
