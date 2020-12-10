import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationExtras, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Courses } from '../model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  courses: Courses[] = [];
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  lessonName: any;
  content: string;
  contentImg: string;
  contentTitle: string;
  isClicked: boolean= true;
  mainTitle: string;
  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStdCourse()
  }

  d(){
    console.log("hi")
  }
  getStdCourse() {
    this.courseService.getCourses().subscribe( courses => this.courses = courses); 
    console.log('df', this.courses)
  }
  getMain(){
    this.isClicked =  true;
    this.router.navigateByUrl('');
    
  }
  getContent(lesson){
    this.isClicked = false;
    this.mainTitle = 'Introduction';
    sessionStorage.setItem("lessonName", lesson.lesson);
    this.lessonName = lesson.lesson;
    if(this.lessonName == 'Computers'){
      this.contentTitle = 'Computers'
      sessionStorage.setItem("lessonTitle", this.contentTitle);
      this.content = 'A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming. Modern computers have the ability to follow generalized sets of operations, called programs. These programs enable computers to perform an extremely wide range of tasks.';
      sessionStorage.setItem("lessonContent", this.content);
      this.contentImg = 'assets/images/desk.png';
      sessionStorage.setItem("lessonUrl", this.contentImg);
      this.router.navigate(['computer'])
    } else if(this.lessonName == 'Programs') {
      this.contentTitle = 'Programs'
      sessionStorage.setItem("lessonTitle", this.contentTitle);
      this.content = 'A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.';
      sessionStorage.setItem("lessonContent", this.content);
      this.contentImg = 'assets/images/pl.png';
      sessionStorage.setItem("lessonUrl", this.contentImg);
      this.router.navigate(['program'])
    } else {
      this.contentTitle = 'Why learn Computer Programming?'
      sessionStorage.setItem("lessonTitle", this.contentTitle);
      this.content = "You Learn To Combine Technical Skills and Creativity  It focuses on identifying issues and resolving them. However, there won't always be the same problems to solve, that's why you'll get to solve them while also finding new solutions each time. This makes programming a very challenging and exciting career.";
      sessionStorage.setItem("lessonContent", this.content);
      this.contentImg = ''
      sessionStorage.setItem("lessonUrl", this.contentImg);
      this.router.navigate(['why'])
    }
}
  
}
