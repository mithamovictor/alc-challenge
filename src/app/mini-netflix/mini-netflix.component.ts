import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-netflix',
  templateUrl: './mini-netflix.component.html',
  styleUrls: ['./mini-netflix.component.css']
})
export class MiniNetflixComponent implements OnInit {

  contentObject = {
    title: 'Netflix',
    price: '1.99'
  };

  constructor() { }

  ngOnInit() {
  }

}
