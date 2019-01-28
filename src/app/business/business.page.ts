
/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, IonContent, Events } from '@ionic/angular';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  @ViewChild('content') content: IonContent;
  @ViewChild('chat_input') messageInput: ElementRef;
  User: string = "Me";
  toUser: string = "driver";
  inp_text: any;
  editorMsg = '';
  showEmojiPicker = false;
  msgList: Array<{
    userId: any,
    userName: any,
    userAvatar: any,
    time: any,
    message: any,
    upertext: any;
  }>
  public count = 0;
  public arr = [
    {
      "messageId": "1",
      "userId": "140000198202211138",
      "userName": "Luff",
      "userImgUrl": "./assets/user.jpg",
      "toUserId": "210000198410281948",
      "toUserName": "Hancock",
      "userAvatar": "./assets/to-user.jpg",
      "time": 1488349800000,
      "message": "Hey, that\'s an awesome chat UI",
      "status": "success"

    },
    {
      "messageId": "2",
      "userId": "210000198410281948",
      "userName": "Hancock",
      "userImgUrl": "./assets/to-user.jpg",
      "toUserId": "140000198202211138",
      "toUserName": "Luff",
      "userAvatar": "./assets/user.jpg",
      "time": 1491034800000,
      "message": "Right, it totally blew my mind. They have other great apps and designs too !",
      "status": "success"
    },
    {
      "messageId": "3",
      "userId": "140000198202211138",
      "userName": "Luff",
      "userImgUrl": "./assets/user.jpg",
      "toUserId": "210000198410281948",
      "toUserName": "Hancock",
      "userAvatar": "./assets/to-user.jpg",
      "time": 1491034920000,
      "message": "And it is free ?",
      "status": "success"
    },
    {
      "messageId": "4",
      "userId": "210000198410281948",
      "userName": "Hancock",
      "userImgUrl": "./assets/to-user.jpg",
      "toUserId": "140000198202211138",
      "toUserName": "Luff",
      "userAvatar": "./assets/user.jpg",
      "time": 1491036720000,
      "message": "Yes, totally free. Beat that ! ",
      "status": "success"
    },
    {
      "messageId": "5",
      "userId": "210000198410281948",
      "userName": "Hancock",
      "userImgUrl": "./assets/to-user.jpg",
      "toUserId": "140000198202211138",
      "toUserName": "Luff",
      "userAvatar": "./assets/user.jpg",
      "time": 1491108720000,
      "message": "Wow, that\'s so cool. Hats off to the developers. This is gooood stuff",
      "status": "success"
    },
    {
      "messageId": "6",
      "userId": "140000198202211138",
      "userName": "Luff",
      "userImgUrl": "./assets/user.jpg",
      "toUserId": "210000198410281948",
      "toUserName": "Hancock",
      "userAvatar": "./assets/to-user.jpg",
      "time": 1491231120000,
      "message": "Check out their other designs.",
      "status": "success"
    }
  ]



  constructor(private events: Events, ) {
    this.msgList = [
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'Hey, that\'s an awesome chat UI',
        upertext: 'Hello'
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: "Right, it totally blew my mind. They have other great apps and designs too!",
        upertext: "Hii"
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'And it is free ?',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: 'Yes, totally free. Beat that !',
        upertext: 'good'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: 'Check out their other designs.',
        upertext: 'good'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'Have you seen their other apps ? They have a collection of ready-made apps for developers. This makes my life so easy. I love it! ',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: 'Well, good things come in small package after all',
        upertext: 'good'
      },
    ];

  }

  ngOnInit() {
  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }

  ionViewWillLeave() {
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    console.log('scrollBottom');
    setTimeout(() => {
      this.scrollToBottom()
    }, 500)
    console.log('scrollBottom2');
  }

  logScrollStart(){
    console.log('logScrollStart');
    document.getElementById('chat-parent');
  
  }

  logScrolling(event){
    console.log('event',event)
  }

  

  sendMsg() {
    let otherUser;
    if (this.count === 0) {
      otherUser = this.arr[0].message
      this.count++
    }
    else if (this.count == this.arr.length) {
      this.count = 0;
      otherUser = this.arr[this.count].message
    }
    else {
      otherUser = this.arr[this.count].message;
      this.count++
    }

    this.msgList.push({
      userId: this.User,
      userName: this.User,
      userAvatar: "assets/user.jpeg",
      time: "12:01 pm",
      message: this.inp_text,
      upertext: this.inp_text
    })
    this.msgList.push({
      userId: this.toUser,
      userName: this.toUser,
      userAvatar: "assets/user.jpeg",
      time: "12:01 pm",
      message: otherUser,
      upertext: otherUser
    });
    this.inp_text = "";
    console.log('scrollBottom');
    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
  }

}
