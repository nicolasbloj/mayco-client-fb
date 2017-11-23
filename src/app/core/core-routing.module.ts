
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './../home/home.module#HomeModule'
    },
    {
        path: 'company',
        loadChildren: '../company/company.module#CompanyModule'
    },
    {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
    },
    {
        path: 'projects',
        loadChildren: '../projects/projects.module#ProjectsModule'
    },
    {
        path: 'admin',
        loadChildren: '../admin/admin.module#AdminModule'
    },
    {
        path: '**', pathMatch: 'full', redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule { }
