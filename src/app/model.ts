export class Courses {
    id: number;
    children: Children[] = [];
    parent: boolean;
    parentName: string;
    name: string;
    content: string;
    mainParentName: string
  }
  
  export class Children{
   lesson: string;
   id: number;
  }