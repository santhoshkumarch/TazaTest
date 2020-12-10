import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Courses } from './model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const course_data = [
      {
          id: 1, parent: true, parentName: 'Introduction', name: 'section1', content: '', mainParentName: 'Intro to Programming',
          children: [
            {
            id: 1,
            lesson: 'Computers'
          },
          {
            id: 2,
            lesson:'Programs'
          },
          {
            id: 3,
            lesson: 'Why learn Computer Programming?'
          }
        ]
      },
     
    ];
    return {course_data};
  }

  getCourses(){
    const content = [
      {
        contentTitle :'Computers',
        contentDesc : 'A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming. Modern computers have the ability to follow generalized sets of operations, called programs. These programs enable computers to perform an extremely wide range of tasks.',
        contentImg : 'assets/images/desk.png'
      },
      {
        contentTitle :'Programs',
        contentDesc : 'A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.',
        contentImg : 'assets/images/pl.png'
      },
      {
        contentTitle :'Why learn Computer Programming?',
        contentDesc : "You Learn To Combine Technical Skills and Creativity  It focuses on identifying issues and resolving them. However, there won't always be the same problems to solve, that's why you'll get to solve them while also finding new solutions each time. This makes programming a very challenging and exciting career.",
        contentImg : ''
      }
    ];
    return {content};
  }

  genId(heroes: Courses[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
}
