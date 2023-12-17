import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor() {}

  numberOfInstancesDevice: number = 3;
  instances: any[] = [];

  ngOnInit() {
    for (let i = 0; i < this.numberOfInstancesDevice; i++) {
      this.instances.push({});
    }
  }
  refresh() {
    window.location.reload();
  }
}
