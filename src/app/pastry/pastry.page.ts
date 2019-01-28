/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.page.html',
  styleUrls: ['./pastry.page.scss'],
})
export class PastryPage implements OnInit {
  segmentTab: any;
  chatData: ({ "name": string; "image": string; "description": string; "count": string; "time": string; } | { "name": string; "image": string; "description": string; "time": string; "count"?: undefined; })[];

  constructor(public route: Router) {
    this.chatData = [{
      "name": 'Jovenica Alba',
      "image": '../../assets/chat/chat1.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": '12:17'
    }, {
      "name": 'Oliver',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '12:17'
    }, {
      "name": 'George',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": 'Yesterday'
    }, {
      "name": 'Harry',
      "image": ' ../../assets/chat/chat4.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Sunday'
    }, {
      "name": 'Jack',
      "image": ' ../../assets/chat/chat5.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      "time": '11:15'
    }, {
      "name": 'Jacob',
      "image": ' ../../assets/chat/chat6.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '1',
      "time": 'Yesterday'
    }, {
      "name": 'Noah',
      "image": ' ../../assets/chat/chat7.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Monday'
    }, {
      "name": 'Charlie',
      "image": ' ../../assets/chat/chat8.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '6',
      "time": '07:00'
    }, {
      "name": 'Logan',
      "image": ' ../../assets/chat/chat1.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Yesterday'
    }, {
      "name": 'Harrison',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      "time": 'Yesterday'
    }, {
      "name": 'Sebastian',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      "time": 'Yesterday'
    }, {
      "name": 'Zachary',
      "image": ' ../../assets/chat/chat4.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Today'
    }, {
      "name": 'Elijah',
      "image": ' ../../assets/chat/chat5.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '18:25'
    }
    ]
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
    this.route.navigate(['bubble', chat]);
  }

}
