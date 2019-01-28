/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */



import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showListToggle = false;
  public showScreenToggle = false;

  public ChatLists = [
    {
      title: 'Elegance',
      url: 'elegance',
      icon: 'list',
      type:'free'
    },
    {
      title: 'Pastry',
      url: 'pastry',
      icon: 'list',
      type:'free'
    },
    {
      title: 'Artboard',
      icon: 'list',
      type:'paid'
    },
    {
      title: 'Crisp',
      url: 'elegance',
      icon: 'list',
      type:'paid'
    },
    {
      title: 'Dazed',
      icon: 'list',
      type:'paid'
    },
    
    {
      title: 'Purple',
      icon: 'list',
      type:'paid'
    },
    {
      title: 'Regular',
      url: 'elegance',
      icon: 'list',
      type:'paid'
    },
    {
      title: 'Rose',
      icon: 'list',
      type:'paid'
    },
    {
      title: 'Utility',
      url: 'elegance',
      icon: 'list',
      type:'paid'
    },
    {
      title: 'Variety',
      icon: 'list',
      type:'paid'
    }
  ]
  public ChatScreens = [
    
    {
      title: 'Fluid',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'free'
    },
    {
      title: 'Business',
      url: 'business',
      icon: 'chatboxes',
      type:'free'
    },
    {
      title: 'Bubble',
      url: 'bubble',
      icon: 'chatboxes',
      type: 'free'
    },
    {
      title: 'Alien',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Blocks',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Breeze',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Classic',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Delicate',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Morning Dew',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Dusk',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Elegance',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Flame',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Flower',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Galaxy',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Hearty',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Icecream',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Intelligent',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Marine',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Minimal',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Modern',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Professional',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Starbucks',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    },
    {
      title: 'Sunrise',
      url: 'fluid',
      icon: 'chatboxes',
      type: 'paid'
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route:Router,
    public alertCtrl:AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showList(){
    this.showScreenToggle = false
    this.showListToggle = !this.showListToggle;
  }
  showScreens(){
    this.showListToggle = false;
    this.showScreenToggle = ! this.showScreenToggle
  }

  pageRedirect(page){
    console.log(page)
    if(page.type == 'free'){
      console.log('free')
      this.route.navigate([page.url])
    }
    else{
     this.presentAlert() 
    }
    
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Paid Template',
      message: 'This is only Available in Paid Version.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
