
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/new-page/new-page.html'
})
export class DonationPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }
  text: String ="New page entered";
  data = [
      { imgSrc: '/img/bedsheets.jpg', desc: "Bedsheets" },
      { imgSrc: '/img/books.jpg', desc: "Books" }
    ];
  
}
