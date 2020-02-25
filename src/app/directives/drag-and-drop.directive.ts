import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

  @Output() fileDropped = new EventEmitter<any>();
  @Output() backgroundColor = '';
  @Output() heightcontainer = '50px';

  @HostBinding('style.background-color') background = this.backgroundColor;
  @HostBinding('style.opacity') opacity = '1';
  @HostBinding('style.height') height = this.heightcontainer;

  @HostListener('dragover', ['$event'])
  onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.backgroundColor;
    this.opacity = '0.8';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.backgroundColor;
    this.opacity = '1';
  }

  @HostListener('drop', ['$event'])
  ondrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.backgroundColor;
    this.opacity = '1';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
