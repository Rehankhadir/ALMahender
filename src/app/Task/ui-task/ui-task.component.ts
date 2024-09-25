import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-task',
  templateUrl: './ui-task.component.html',
  styleUrls: ['./ui-task.component.css']
})
export class UiTaskComponent {
  progress = 0;
  showOffcanvas = false;
  progressInterval: any;
  constructor() { }
  ngOnInit() {

  }
  start() {
    this.showOffcanvas = true;
    this.progress = 0;
    this.progressInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      }
      else {
        clearInterval(this.progressInterval);
        this.completeMigration();
      }
    }, 100);
  }

  completeMigration() {
    this.showOffcanvas = false;
    alert('process completed!');
  }

  toggleOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas;
  }
}
