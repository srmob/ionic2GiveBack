
import {Page, NavController, NavParams} from 'ionic-angular';
// import {Camera} from 'ionic-native';
// ,cam: Camera

@Page({
  templateUrl: 'build/pages/AllDonationPage/AllDonations.html'
})
export class AllDonationPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }
  text: String ="All Donations entered";
}
