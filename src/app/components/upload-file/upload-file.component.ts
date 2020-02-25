import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addFile(fileList: FileList) {
    for (const index in fileList) {
      if (fileList.hasOwnProperty(index)) {
        this.files.push(fileList[index].name);
      }
    }
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }
}
