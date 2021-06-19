import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoryService } from 'src/app/services/category.service';
import { CommonService } from 'src/app/services/common.service';
import { ProductsService } from 'src/app/services/products.service';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {

  changeMode = 'select'

  categories: any = []
  subCategories: any = []
  brands: any = []
  cattext: any;
  subcattext: any;
  brandtext: any;
  successMsg: string = ''
  images: any = []
  getFeatureSingleImgPath: string = ''
  singleImg: string = ''
  products: any = []
  multipleImagesArray: any = []
  imagesAll: any = []
  jsonMenus: any = []
  

  //Add Product
  form = this.fb.group({
    productName: ['', Validators.required],
    categoryName: ['', Validators.required],
    subcategoryName: ['', Validators.required],
    price: ['', Validators.required],
    brandName: ['', Validators.required],
    discountPrice: [''],
    dialog: [''],
    image:[null]
  })

  imageForm: FormGroup
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private catService: CategoryService,
    private brandService: BrandsService,
    private productService: ProductsService,
    private uploadService: UploadsService,
    private commonService: CommonService) {

      this.imageForm = this.fb.group({
        checkboxImage: this.fb.array([])
      })

     }
  

  //imgForm = this.fb

  ngOnInit(): void {
    this.getCategory()
    this.getBrand()
    this.selectImages()
    this.getProducts()
    this.getJsonMenu()
  }

  //jsonMenu
  getJsonMenu(){
    this.commonService.getMenus().subscribe(data => this.jsonMenus = data)
  }

  addProduct(form: any){
    this.productService.addNewProduct(
      form.value.productName,
      this.cattext,
      form.value.categoryName,
      this.subcattext,
      form.value.subcategoryName,
      this.brandtext,
      form.value.brandName,
      form.value.price,
      form.value.discountPrice,
      form.value.dialog,
      form.value.image
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
  onSubCategory(event: any){
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;

    this.subcattext = selectedOptions[selectedIndex].text;
  }
  onBrands(event: any){
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;

    this.brandtext = selectedOptions[selectedIndex].text;
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

  //GetProducts
  getProducts(){
    this.productService.getAllData().subscribe(cs => {
      this.products = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }

  imageVal(event: any){
    this.getFeatureSingleImgPath = event.target.value
  }
  
  singleImage(){
    this.singleImg = this.getFeatureSingleImgPath

    this.form.controls.image.setValue(this.singleImg);
  }

  onCheckboxChange(e: any){
    if(e.target.checked){
      //console.log(e.target.checked)
      this.productService.getMultipleImages(e.target.value, e.target.checked)
    }else{
      console.log(e.target.checked)
    }
  }
  
  getProductId(id:any){
    this.productService.productId = id;
    
    this.productService.getImages().subscribe(cs =>{
      this.imagesAll = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }

  multipleImages(f: any){
    console.log(f.value.checkboxImage)
    //this.productService.getMultipleImages(f.value.checkboxImage)
  }

  
}
