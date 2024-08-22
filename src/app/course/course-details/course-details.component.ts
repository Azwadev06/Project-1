import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(){
    // this.courseId = this.activeRoute.snapshot.params['id'];
    //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.course.find(course => course.id === this.courseId);
    // })

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.course.find(course => course.id === this.courseId);
    })
    
  }

  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }

}
