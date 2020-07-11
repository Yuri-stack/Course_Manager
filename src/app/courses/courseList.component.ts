import { Component, OnInit } from '@angular/core';
import { Course } from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './courseList.component.html'
})

export class CourseListComponent implements OnInit{

    courses: Course[] = []

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'XYZ-123',
                duration: 120,
                rating: 4.5,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: './assets/images/http.png',
                price: 45.99,
                code: 'ABC-123',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 4, 2019'
            }
        ]
    }

}