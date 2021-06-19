import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any
  productId2: any
  imagesAll: any = []
  changeImageResult: any

  constructor(private productService: ProductsService, private routerAct: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId2 = this.routerAct.snapshot.params['id']
    this.productService.productId = this.routerAct.snapshot.params['id']
    
    this.productService.singleProduct(this.productId2).subscribe(data => this.product = data)

    this.productService.getImages().subscribe(cs =>{
      this.imagesAll = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
      this.changeImageResult = this.imagesAll[0].imgPath
    })
    
    
  }

  changeImage(e: any){
    this.changeImageResult = e.target.value
  }

}
