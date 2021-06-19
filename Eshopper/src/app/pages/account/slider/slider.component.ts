import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { CommonService } from 'src/app/services/common.service';
import { SliderService } from 'src/app/services/slider.service';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {

  jsonMenus: any = []
  successMsg: string = ''
  categories: any = []
  images: any = []
  singleImg: string = ''
  getFeatureSingleImgPath: string = ''
  cattext: string = ''
  sliders: any = []

  constructor(private fb: FormBuilder,
              private commonService: CommonService,
              private categoryService: CategoryService,
              private uploadService: UploadsService,
              private sliderService: SliderService) { }

  ngOnInit(): void {
    this.getJsonMenu();
    this.getCategory();
    this.selectImages();
    this.getSlider();
  }

  slider = this.fb.group({
    sliderName: ['', Validators.required],
    categoryName: ['', Validators.required],
    desc: ['', Validators.required],
    image:[null]
  })

  //jsonMenu
  getJsonMenu(){
    this.commonService.getMenus().subscribe(data => this.jsonMenus = data)
  }
  //Get Category
  getCategory(){
    this.categoryService.categoryGet().subscribe(cs => {
      this.categories = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
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

  getCatValue(event: any){
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;

    this.cattext = selectedOptions[selectedIndex].text;
  }

  addSlider(slider: any){
    this.sliderService.slider(
      slider.value.sliderName,
      this.cattext,
      slider.value.categoryName,
      slider.value.desc,
      slider.value.image,
    ).then(data => this.successMsg = 'Record has been saved successfully').catch(err => console.log(err))
  }
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

  //
  imageVal(event: any){
    this.getFeatureSingleImgPath = event.target.value
    //console.log(event.target.value)
  }
  singleImage(){
    this.singleImg = this.getFeatureSingleImgPath
    this.slider.controls.image.setValue(this.singleImg)
  }

}
