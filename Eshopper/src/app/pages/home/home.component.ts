import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';
import { ProductsService } from 'src/app/services/products.service';
import { SliderService } from 'src/app/services/slider.service';
import { SortbyService } from 'src/app/services/Sortby.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = []
  brands: any = []
  getProductBrand: any 
  productsByBrand: any
  sliders: any = []
  count: string = '1++'

  constructor(
    private productService: ProductsService, 
    private brandService: BrandsService, 
    private sortByBrandService: SortbyService,
    private sliderService: SliderService) { }

  ngOnInit(): void {
    this.getProducts();
    this.brandsData();
    this.getSlider();
  }


  //GetProducts
  getProducts(){
    this.productService.getAllData().subscribe(cs => {
      this.products = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {},
          
        }
      })
    })
  }
  

  //getBrands
  brandsData(){
    this.brandService.getBrands().subscribe(cs => {
      this.brands = cs.map(x => {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }

  //get slider
  getSlider(){
    this.sliderService.sliderData().subscribe(cs => {
      this.sliders = cs.map(x => {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }
  
}
