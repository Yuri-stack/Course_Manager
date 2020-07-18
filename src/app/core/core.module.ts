import { NgModule } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './notFound/notFound.component'

@NgModule({
    declarations:[
        NavBarComponent,
        NotFoundComponent
    ],
    imports:[
        RouterModule.forChild([
            {
                path: '**', component: NotFoundComponent 
            }
        ])
    ],
    exports:[
        NavBarComponent
    ]
})

export class CoreModule{}