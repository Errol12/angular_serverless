import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

//>>>npm install rxjs@6 rxjs-compat@6 --save

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  //private _getUrl="https://j9iskx8qlj.execute-api.ap-south-1.amazonaws.com/dev/helloworld/4";
  private _getUrl="https://j9iskx8qlj.execute-api.ap-south-1.amazonaws.com/dev/helloworld/";
  private targetUrl = '';
	constructor(private _http: Http) { }

  setOption(value){      
		this.targetUrl = this._getUrl + value;  
	}


	getVideos(){
		return this._http.get(this.targetUrl)
			.map((response: Response) => response.json());
  }
  
}
