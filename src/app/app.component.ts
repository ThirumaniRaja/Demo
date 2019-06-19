import { Component ,ViewChild} from '@angular/core';
import { Platform ,Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ImageViewPage } from '../pages/image-view/image-view';
import { ShowDataPage } from '../pages/show-data/show-data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any =  HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  gotoHome() {
    this.nav.setRoot(HomePage);
    
  }
  gotoImage(){
    this.nav.setRoot(ImageViewPage);
  }

}

