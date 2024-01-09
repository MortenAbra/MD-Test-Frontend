import { Routes } from '@angular/router';
import { RocketViewComponent } from './components/rocket-view/rocket-view.component';

export const routes: Routes = [
    {path: 'rocket/:id', component: RocketViewComponent}
];
