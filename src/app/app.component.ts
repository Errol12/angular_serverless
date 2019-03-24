import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';
import { Component , OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { Words } from '../Words';
import { GetListService } from './get-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Proj1';
  ClickMessage = '';
  value = '';
  list: Array<Words>;

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            let bases = this.document.getElementsByTagName('base');
    
            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }


 constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, private _listService: GetListService) {}

 onKey(event: any) { // without type info
  this.value = event.target.value;
}

clickMe(){
  console.log(this.value);
  this.ClickMessage = this.value;

  this._listService.setOption(this.value);

  this._listService.getVideos()
    .subscribe(resListData => this.list = resListData);
}

}
