import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortbyService } from 'src/app/services/Sortby.service';

@Component({
  selector: 'app-sort-by-category',
  templateUrl: './sort-by-category.component.html'
})
export class SortByCategoryComponent implements OnInit {

  catId: any;
  category: any;
  getProductCategory: any;

  constructor(private sortByService: SortbyService, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.catId = this.actRouter.snapshot.params['id']
    
    this.sortByService.getCategoryById(this.catId).subscribe(data => {
      this.category = data 
    })

    this.sortByService.categoryNameId = this.catId
    this.sortByService.getProductByCategory().subscribe(cs => {
      this.getProductCategory = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
    
  }
}
