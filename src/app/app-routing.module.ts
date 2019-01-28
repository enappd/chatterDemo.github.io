/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fluid',
    pathMatch: 'full'
  },
  { path: 'business', loadChildren: './business/business.module#BusinessPageModule' },
  { path: 'elegance', loadChildren: './elegance/elegance.module#ElegancePageModule' },
  { path: 'fluid', loadChildren: './fluid/fluid.module#FluidPageModule' },
  { path: 'pastry', loadChildren: './pastry/pastry.module#PastryPageModule' },
  { path: 'bubble', loadChildren: './bubble/bubble.module#BubblePageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
