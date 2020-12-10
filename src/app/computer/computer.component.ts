import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
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
