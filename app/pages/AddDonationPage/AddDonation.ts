
import {Page, NavController, NavParams} from 'ionic-angular';
// import {Camera} from 'ionic-native';
// ,cam: Camera

@Page({
  templateUrl: 'build/pages/AddDonationPage/AddDonation.html'
})
export class AddDonationPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }
  text: String ="New page entered";
 /* addDonation(){
    
    
  }*/
  /*captureImage(options) { 
    Camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
    });
  }*/
}
