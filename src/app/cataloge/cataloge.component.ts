import { Component, OnInit } from '@angular/core';
import { DataViewLayoutOptions } from 'primeng/dataview';
import Swal from 'sweetalert2';


class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public inventoryStatus: string,
    public liked: boolean = false
  ) {}
}

@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html',
  styleUrls: ['./cataloge.component.css']  
})
export class CatalogeComponent implements OnInit {
  layout: 'list' | 'grid'= 'grid'; 
  layoutt:string[]=['list','grid'];
  products: Product[] = [];  
  liked: boolean = false; 
  layoutOptions: { name: string, value: 'list' | 'grid' }[] = [
    { name: 'List', value: 'list' },
    { name: 'Grid', value: 'grid' }
  ];

  
  ngOnInit() {
    this.products = [
      new Product('1000', 'Bamboo Watch', 'Elegant bamboo wrist watch.', 65, 'assets/i1.jfif', 'INSTOCK',false),
      new Product('1001', 'Black Watch', 'Stylish black wrist watch.', 75, 'assets/i2.jfif', 'LOWSTOCK',false),
      new Product('1002', 'Blue Watch', 'Sporty blue wrist watch.', 85, 'assets/i3.jpg', 'OUTOFSTOCK',false),
      new Product('1003', 'Silver Necklace', 'Sterling silver necklace with a minimalist design.', 120, 'assets/i5.jfif', 'INSTOCK',false),
      new Product('1004', 'Gold Earrings', '24K gold stud earrings.', 200, 'assets/i17.jpeg', 'LOWSTOCK',false),
      new Product('1005', 'Leather Wallet', 'Genuine leather wallet with multiple compartments.', 45, 'assets/i6.jpg', 'INSTOCK',false),
      new Product('1006', 'Sunglasses', 'Polarized sunglasses for sunny days.', 50, 'assets/i7.jfif', 'INSTOCK',false),
      new Product('1007', 'Smartphone Stand', 'Adjustable smartphone stand for hands-free use.', 20, 'assets/i8.jfif', 'OUTOFSTOCK',false),
      new Product('1008', 'Wireless Charger', 'Fast wireless charger for compatible devices.', 35, 'assets/i9.jfif', 'INSTOCK',false),
      new Product('1009', 'Headphones', 'Noise-cancelling over-ear headphones.', 150, 'assets/i10.jfif', 'LOWSTOCK',false),
      new Product('1010', 'Laptop Bag', 'Waterproof laptop bag with extra storage.', 90, 'assets/i11.jfif', 'INSTOCK',false),
      new Product('1011', 'Fitness Tracker', 'Smart fitness tracker with heart rate monitor.', 65, 'assets/i12.jfif', 'INSTOCK',false),
      new Product('1012', 'Bluetooth Speaker', 'Portable Bluetooth speaker with high-quality sound.', 55, 'assets/i13.jfif', 'OUTOFSTOCK',false),
      new Product('1013', 'Coffee Mug', 'Ceramic coffee mug with heat-resistant handle.', 15, 'assets/i14.jfif', 'INSTOCK',false),
      new Product('1014', 'Wireless Earbuds', 'Compact wireless earbuds with charging case.', 85, 'assets/i15.jfif', 'LOWSTOCK',false)
    ];
  }

  getSeverity(product: Product): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'danger';
    }
  }

  changeLayout(event: { layout: 'list' | 'grid' }): void {
    this.layout = event.layout; // Set the layout to the selected one
  }

  toggleLike(element:Product): void {
    element.liked = !element.liked; // Inversez l'état du cœur lors du clic
  }

  handleBuyNow(product: Product): void {
    if (product.inventoryStatus === 'OUTOFSTOCK') {
      Swal.fire({
        icon: 'error',
        title: 'Service indisponible',
        text: "Le service n'est pas en cours de disponibilité.",
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Achat effectué',
        text: `Vous avez acheté ${product.name}!`,
        confirmButtonText: 'Cool'
      });
    }
  }
}
