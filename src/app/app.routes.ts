import { Routes } from '@angular/router';
import { RocketViewComponent } from './components/rocket-view/rocket-view.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RocketCreatorComponent } from './components/rocket-creator/rocket-creator.component';

export const routes: Routes = [
    { path: '', redirectTo: '/rockets', pathMatch: 'full' },
    { path: 'rockets', component: RocketsComponent },
    { path: 'rockets/:id', component: RocketViewComponent },
    { path: 'create-rocket', component: RocketCreatorComponent}
];
