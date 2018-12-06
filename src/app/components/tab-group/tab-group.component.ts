import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
  spaceScreens: Array<any>;

  // constructor(private http: Http) {
  //   this.http.get('./data.json')
  //     .map(response => response.json().screenshots)
  //     .subscribe(res => this.spaceScreens = res);
  // }
  constructor() {
    this.spaceScreens = [
        {
          img: 'assets/images/space1.jpeg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euyse',
          liked: 0
        },
        {
            img: 'assets/images/space2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euyse',
            liked: 0
        },
        {
            img: 'assets/images/space3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euyse',
            liked: 0
        }
      ];
  }

  ngOnInit() {
  }

  likeMe(i) {
    this.spaceScreens[i].liked
    = (this.spaceScreens[i].liked === 0) ? 1 : 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
  }
}
