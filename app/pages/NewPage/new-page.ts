
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/new-page/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }
  text: String ="This starter project is our way of helping you get a functional app running in record time.";

  goToPage() {
  	console.log("Go To Page clicked")
    this.nav.push(NewPage)
  }
}
