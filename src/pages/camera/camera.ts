import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';

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
    let cameraRect: CameraPreviewRect = {
      x: 100,
      y: 100,
      width: 200,
      height: 200
    };

    let tapEnabled: any = false;
    let dragEnabled: any = false;
    let toBack: any = true;
    let alpha = 1;

    CameraPreview.startCamera(
      cameraRect,
      'rear',
      tapEnabled,
      dragEnabled,
      toBack,
      alpha
    );


  }

}
