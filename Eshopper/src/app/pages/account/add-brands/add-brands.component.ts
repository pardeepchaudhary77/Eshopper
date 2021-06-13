import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-add-brands',
  templateUrl: './add-brands.component.html'
})
export class AddBrandsComponent implements OnInit {

  successMsg: string = ''
  brands: any = []

  constructor(private fb: FormBuilder, private brandService: BrandsService) { }

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
  }
  
  addBrands(form: any){
    this.brandService.addNewBrands(form.value.brandName)
    .then(data => {
      this.successMsg = 'Record has been saved successfully'
    }).catch(err => console.log(err))
  }

}
