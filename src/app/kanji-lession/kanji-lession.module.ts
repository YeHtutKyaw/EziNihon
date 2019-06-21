import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KanjiLessionPage } from './kanji-lession.page';

const routes: Routes = [
  {
    path: '',
    component: KanjiLessionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KanjiLessionPage]
})
export class KanjiLessionPageModule {}
