import { Component, OnInit } from '@angular/core';
declare var require: any;
const { exec } = require('child_process');

// Rest of your code...

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.scss'],
})
export class SpeakComponent implements OnInit {
  constructor() {}
  pythonScriptPath = 'reconnaissance_vcale.py';
  ngOnInit() {}

  onClick() {
    exec(
      `python ${this.pythonScriptPath}`,
      (error: any, stdout: string, stderr: string) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      }
    );
  }
}
