
import {Page, NavController, NavParams} from 'ionic-angular';
import { DonationPage } from '../new-page/new-page';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }
  text: String ="This starter project is our way of helping you get a functional app running in record time.";

  goToPage() {
  	console.log("Go To Page clicked")
    this.nav.push(DonationPage)
  }
}
