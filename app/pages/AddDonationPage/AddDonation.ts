
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/AddDonationPage/AddDonation.html'
})
export class AddDonationPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }
  text: String ="New page entered";
  
}
