import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartranslate';
  constructor(
    public translate:TranslateService
  ){
    translate.addLangs(["en","tr"]);
    translate.setDefaultLang("tr");
    const browserlang=translate.getBrowserLang();
    translate.use(browserlang?.match(/en|tr/)? browserlang:'tr');
  }
}
