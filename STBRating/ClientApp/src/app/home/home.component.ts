import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  max: number = 5;
  rate: number = 0;
  isShowOtherReason = false;
  isSuccess = false;

  rating() {
    setTimeout(() => {
      console.log(this.rate);
    }, 200)
  }

  showOtherReason() {
    this.isShowOtherReason = !this.isShowOtherReason;
  }

  submit() {
    this.isSuccess = true;
  }
}
