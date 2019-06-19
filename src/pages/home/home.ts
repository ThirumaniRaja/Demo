import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ShowDataPage } from '../show-data/show-data';
import { map } from '../../../node_modules/rxjs/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public textUrl="https://www.randomtext.me/api/";
   textData :Observable<any>;
   result = [];
   amount =[];
   format =[];
   number=[];
   number_max=[];
   text_out=[];
   time=[];
   type=[];
   slideOpts = {
    effect: 'flip'
  };

  constructor(public navCtrl: NavController, public api: ApiProvider,public http: HttpClient) {
    console.log("home page");
 
  }

  ionViewDidLoad() {
    this.getText();
  }

  public getText(){
    console.log("home page method");
    this.textData = this.http.get(this.textUrl);
    this.textData.subscribe(data=>
      {
      this.result=new Array<Object>(data);
      let dataList = this.result;
      console.log("result Array",dataList);
        this.amount = this.getVal(data,'amount',[]);
        this.format = this.getVal(data,'format',[]);
        this.number = this.getVal(data,'number',[]);
        this.number_max = this.getVal(data,'number_max',[]);
        this.text_out = this.getVal(data,'text_out',[]);
        this.time = this.getVal(data,'time',[]);
        this.type = this.getVal(data,'type',[]);
        console.log("myData=",this.amount,this.format,this.number,this.number_max,this.time);
      });
}

public onShowData()
{
  this.navCtrl.push(ShowDataPage);
  console.log("clicked");
}

public getVal(o, key, def) {
  if (typeof key == 'undefined' || typeof o == 'undefined') {
    return def;
  }
  else if (typeof def == 'undefined') {
    return '';
  }
  else {
    var temp = o;
    key = String(key).split('.');
    for (var i in key) {
      if (typeof temp[key[i]] == 'undefined') {
        return def;
      }
      else {
        temp = temp[key[i]];
      }
    }
    return temp;
  }
}
}
