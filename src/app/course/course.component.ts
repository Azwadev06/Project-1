import { Component, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseService = inject(CourseService);
  AllCourses: Course[];
  searchString: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
        // this.courseService.getAllcourse().subscribe((data: Course[]) => {
        //   this.AllCourses = data;
        // });
        this.AllCourses = this.courseService.course
        // this.AllCourses = this.activeRoute.snapshot.data['courses'];
      }else{
        this.AllCourses = this.courseService.course
          .filter(x => x.title.toLowerCase()
          .includes(this.searchString.toLowerCase()));
      }
    })

    
  }
}