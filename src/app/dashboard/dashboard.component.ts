import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Courses } from '../model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
courses: Courses[] = [];
  lessonName: string;
  content: string;
  contentImg: string;
  contentTitle: string;
  data: any;
  constructor(
    private route : ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.contentTitle = sessionStorage.getItem('lessonTitle')
    this.content = sessionStorage.getItem('lessonContent')
    this.contentImg = sessionStorage.getItem('lessonUrl')
    // this.data = this.route.queryParams.subscribe(params => {
    //   this.lessonName = params['lessonName'];
    // })
    console.log("l", this.content, this.contentImg, this.contentTitle)

    this.courseService.getContent().subscribe(data => {
      console.log(data);
    })
    
  }

  getLesson() {
   
  }
}
