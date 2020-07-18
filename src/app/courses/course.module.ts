import { NgModule } from '@angular/core'
import { CourseListComponent } from './courseList.component'
import { CourseInfoComponent } from './courseInfo.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { StarModule } from '../shared/components/star/star.module'
import { AppPipeModule } from '../shared/pipe/app-pipe.module'

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfoComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule { }