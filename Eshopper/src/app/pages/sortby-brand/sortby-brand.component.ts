import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SortbyService } from 'src/app/services/Sortby.service';

@Component({
  selector: 'app-sortby-brand',
  templateUrl: './sortby-brand.component.html'
})
export class SortbyBrandComponent implements OnInit {

  brandId: any;
  brand: any
  getProductBrand: any 

  constructor(private sortByBrandService: SortbyService, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.brandId = this.actRouter.snapshot.params['id']

    this.sortByBrandService.getBrandById(this.brandId).subscribe(data => {
      this.brand = data 
    })

    this.sortByBrandService.brandNameId = this.brandId
    this.sortByBrandService.getProductByBrand().subscribe(cs => {
      this.getProductBrand = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
    
  }

 
}
