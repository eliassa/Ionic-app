import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    let options: CameraOptions = {
      quality: 100

    }


    Camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
// let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});




  }

}
