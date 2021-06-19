import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html'
})
export class UploadImagesComponent implements OnInit {

  selectFile: any = []
  images: any = []
  jsonMenus: any = []

  constructor(private fb: FormBuilder, private uploadService: UploadsService, private commonService: CommonService) { }

  form = this.fb.group({
    image:['', Validators.required]
  }) 

  ngOnInit(): void {
    this.uploadService.getPath().subscribe(cs =>{
      this.images = cs.map(x => {
        return {
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

  uploadFile(event: any){
    //this.selectFile = event.target.files
    for(var i=0; i < event.target.files.length; i++ ){
      this.selectFile = event.target.files[i]
      this.uploadService.addNewImages(this.selectFile)
    }
    
  }

}
