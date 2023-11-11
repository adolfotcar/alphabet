import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalComponent } from './animal/animal.component';

const routes: Routes = [
  { path: '', component: AnimalComponent, title: 'Letter A'},
    { path: 'a', component: AnimalComponent, title: 'Letter A'},
    { path: 'antelope', component: AnimalComponent, title: 'Letter A'},
    { path: 'b', component: AnimalComponent, title: 'Letter B'},
    { path: 'bear', component: AnimalComponent, title: 'Letter B'},
    { path: 'c', component: AnimalComponent, title: 'Letter C'},
    { path: 'cow', component: AnimalComponent, title: 'Letter C'},
    { path: 'd', component: AnimalComponent, title: 'Letter D'},
    { path: 'dog', component: AnimalComponent, title: 'Letter D'},
    { path: 'e', component: AnimalComponent, title: 'Letter E'},
    { path: 'elephant', component: AnimalComponent, title: 'Letter E'},
    { path: 'f', component: AnimalComponent, title: 'Letter F'},
    { path: 'frog', component: AnimalComponent, title: 'Letter F'},
    { path: 'g', component: AnimalComponent, title: 'Letter G'},
    { path: 'giraffe', component: AnimalComponent, title: 'Letter G'},
    { path: 'h', component: AnimalComponent, title: 'Letter H'},
    { path: 'hipo', component: AnimalComponent, title: 'Letter H'},
    { path: 'i', component: AnimalComponent, title: 'Letter I'},
    { path: 'iguana', component: AnimalComponent, title: 'Letter I'},
    { path: 'j', component: AnimalComponent, title: 'Letter J'},
    { path: 'jaguar', component: AnimalComponent, title: 'Letter J'},
    { path: 'k', component: AnimalComponent, title: 'Letter K'},
    { path: 'koala', component: AnimalComponent, title: 'Letter K'},
    { path: 'l', component: AnimalComponent, title: 'Letter L'},
    { path: 'lion', component: AnimalComponent, title: 'Letter L'},
    { path: 'm', component: AnimalComponent, title: 'Letter M'},
    { path: 'monkey', component: AnimalComponent, title: 'Letter M'},
    { path: 'n', component: AnimalComponent, title: 'Letter N'},
    { path: 'narwhal', component: AnimalComponent, title: 'Letter N'},
    { path: 'o', component: AnimalComponent, title: 'Letter O'},
    { path: 'ostrich', component: AnimalComponent, title: 'Letter O'},
    { path: 'p', component: AnimalComponent, title: 'Letter P'},
    { path: 'penguin', component: AnimalComponent, title: 'Letter P'},
    { path: 'q', component: AnimalComponent, title: 'Letter Q'},
    { path: 'quail', component: AnimalComponent, title: 'Letter Q'},
    { path: 'r', component: AnimalComponent, title: 'Letter R'},
    { path: 'rat', component: AnimalComponent, title: 'Letter R'},
    { path: 's', component: AnimalComponent, title: 'Letter S'},
    { path: 'shark', component: AnimalComponent, title: 'Letter S'},
    { path: 't', component: AnimalComponent, title: 'Letter T'},
    { path: 'turtle', component: AnimalComponent, title: 'Letter T'},
    { path: 'u', component: AnimalComponent, title: 'Letter U'},
    { path: 'urchin', component: AnimalComponent, title: 'Letter U'},
    { path: 'v', component: AnimalComponent, title: 'Letter V'},
    { path: 'viper', component: AnimalComponent, title: 'Letter V'},
    { path: 'w', component: AnimalComponent, title: 'Letter W'},
    { path: 'whale', component: AnimalComponent, title: 'Letter W'},
    { path: 'x', component: AnimalComponent, title: 'Letter X'},
    { path: 'xantus', component: AnimalComponent, title: 'Letter X'},
    { path: 'y', component: AnimalComponent, title: 'Letter Y'},
    { path: 'yak', component: AnimalComponent, title: 'Letter Y'},
    { path: 'z', component: AnimalComponent, title: 'Letter Z'},
    { path: 'zebra', component: AnimalComponent, title: 'Letter Z'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
