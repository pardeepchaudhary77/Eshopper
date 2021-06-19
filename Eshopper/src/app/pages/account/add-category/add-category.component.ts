import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent implements OnInit {

  errorMsg: string = ''
  successMsg: string =''
  categories: any = []
  subCategories: any = []
  cattext: any
  jsonMenus: any = []

  constructor(private fb: FormBuilder, 
              private addService: CategoryService, 
              private router: Router,
              private commonService: CommonService) { }

  category1 = this.fb.group({
    categoryName: ['', Validators.required]
  })
  category = this.fb.group({
    categoryName: ['', Validators.required],
    subcategoryName:['', Validators.required],
    desc:['']
  })

  ngOnInit(): void {
    this.getCategory()
    this.getJsonMenu()
  }

  //jsonMenu
  getJsonMenu(){
    this.commonService.getMenus().subscribe(data => this.jsonMenus = data)
  }

  addMainCategory(category1: any){
    this.addService.categoryAdd(category1.value.categoryName)
      .then(data => {
        this.successMsg = 'Record has been saved successfully'
      }).catch(err => this.errorMsg = 'Error')
  }
  //Add Category
  addCategory(category: any){
    this.addService.categorySubAdd(this.cattext, category.value.subcategoryName, category.value.desc)
      .then(data => {
        this.successMsg = 'Record has been saved successfully'
      }).catch(err => this.errorMsg = 'Error')
  }

  //Get Category
  getCategory(){
    this.addService.categoryGet().subscribe(cs => {
      this.categories = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }
  getCategorySub(){
    this.addService.getSubCategories().subscribe(cs => {
      this.subCategories = cs.map(x => {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }

  getCatValue(event: any){
    //this.addService.categoryId = event

    //console.log(this.addService.categoryId = event)
    //this.catDDValue = event
    //this.text = event.target.options[event.target.options.selectedIndex].text;
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;

    this.cattext = selectedOptions[selectedIndex].text;
    this.addService.categoryId = selectedOptions[selectedIndex].value;
    
  }

  subCat: boolean = false
  getSubCats(event: any){
    this.addService.categoryId = event
    this.subCat = true
    this.getCategorySub()
  }
}
