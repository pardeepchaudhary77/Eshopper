import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  @Output() dropped = new EventEmitter<FileList>()
  @Output() hovered = new EventEmitter<boolean>()

  constructor() { }

}
