import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brands.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-brands',
  templateUrl: './add-brands.component.html'
})
export class AddBrandsComponent implements OnInit {

  successMsg: string = ''
  brands: any = []
  jsonMenus: any = []

  constructor(private fb: FormBuilder, private brandService: BrandsService, private commonService: CommonService) { }

  // Add Brands
  form = this.fb.group({
    brandName:['', Validators.required]
  })

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(cs => {
      this.brands = cs.map(x => {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })

    this.getJsonMenu()
  }
  
  //jsonMenu
  getJsonMenu(){
    this.commonService.getMenus().subscribe(data => this.jsonMenus = data)
  }

  addBrands(form: any){
    this.brandService.addNewBrands(form.value.brandName)
    .then(data => {
      this.successMsg = 'Record has been saved successfully'
    }).catch(err => console.log(err))
  }

}
