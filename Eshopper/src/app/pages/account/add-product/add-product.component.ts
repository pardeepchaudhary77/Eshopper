import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {

  categories: any = []
  subCategories: any = []
  brands: any = []
  cattext: any
  successMsg: string = ''
  images: any = []
  getFeatureSingleImgPath: string = ''

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private catService: CategoryService,
    private brandService: BrandsService,
    private productService: ProductsService,
    private uploadService: UploadsService) { }

  //Add Product
  form = this.fb.group({
    productName: ['', Validators.required],
    categoryName: ['', Validators.required],
    subcategoryName: ['', Validators.required],
    price: ['', Validators.required],
    brandName: ['', Validators.required],
    discountPrice: ['', Validators.required],
    dialog: ['', Validators.required],
    singleImg:['']
  })

  //imgForm = this.fb

  ngOnInit(): void {
    this.getCategory()
    this.getBrand()
    this.selectImages()
  }

  addProduct(form: any){
    this.productService.addNewProduct(
      form.value.productName,
      this.cattext,
      form.value.subcategoryName,
      form.value.brandName,
      form.value.price,
      form.value.discountPrice,
      form.value.dialog,
      form.value.singleImg
      ).then(data => {
        this.successMsg = 'Record has been saved successfully'
      }).catch(err => console.log(err))
  }


  //Get Category
  getCategory(){
    this.catService.categoryGet().subscribe(cs => {
      this.categories = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }
  getCategorySub(){
    this.catService.getSubCategories().subscribe(cs => {
      this.subCategories = cs.map(x => {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }
  // Get Brands
  getBrand(){
    this.brandService.getBrands().subscribe(cs => {
      this.brands = cs.map(x => {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }
  onCategory(event: any){
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;

    this.cattext = selectedOptions[selectedIndex].text;
    this.catService.categoryId = selectedOptions[selectedIndex].value;


    //this.catService.categoryId = id
    this.getCategorySub()
  }

  //get images
  selectImages(){
    this.uploadService.getPath().subscribe(cs =>{
      this.images = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }

  imageVal(event: any){
    this.getFeatureSingleImgPath = event.target.value
    //console.log(event.target.value)
  }
  singleImg: string = ''
  singleImage(){
    this.singleImg = this.getFeatureSingleImgPath
  }
}
