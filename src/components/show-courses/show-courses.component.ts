import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course/course.service';

// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Math',
//     children: [{ name: 'Analize' }, { name: 'Graph' }, { name: 'X/Y' }],
//   },
//   {
//     name: 'Hi-Tec',
//     children: [
//       {
//         name: 'C#',
//         children: [{ name: 'C#-mahat' }, { name: 'C#' }],
//       },
//     ],
//   },
// ];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}



@Component({
  selector: 'app-show-courses',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './show-courses.component.html',
  styleUrl: './show-courses.component.css'
})

export class ShowCoursesComponent {
  courses: Course[] = [];
  active = false;

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
    this.dataSource.data = this.createTree();

  }

  createTree() {
    const t: FoodNode[] = [];
    for (const i in this.courses) {
      if (this.courses[i].long > 2) {
        this.active = true;
        console.log("if" + this.courses[i].NameCourse);
      }
      else {
        console.log("else" + this.courses[i].NameCourse);
        this.active = false;
      }
      let child = [];
      for (const j in this.courses[i].clabus) {
        child.push({ name: this.courses[i].clabus[j] })
      }
      let a = { name: this.courses[i].NameCourse, children: child }
      t.push(a)
    };

    return t;
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

