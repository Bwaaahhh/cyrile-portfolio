import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {SkillComponent} from './page/skill/skill.component';
import {ContactComponent} from './page/contact/contact.component';
import {ProjetComponent} from './page/projet/projet.component';


// Route Configuration
export const routes: Routes = [
    {
        path: '', // URL cible
        redirectTo: '/index', // redirection: URL d'arrivé
        pathMatch: 'full'
    },
    {
        path: 'index', // URL cible
        component: HomeComponent // Composant demandé
    },
    {
        path: 'skill',
        component: SkillComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'projet',
        component: ProjetComponent
    }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
