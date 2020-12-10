import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  content: string;
  contentImg: string;
  contentTitle: string;
  constructor() { }

  ngOnInit() {
    this.contentTitle = sessionStorage.getItem('lessonTitle')
    this.content = sessionStorage.getItem('lessonContent')
    this.contentImg = sessionStorage.getItem('lessonUrl')
  }

}
