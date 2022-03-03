import { Component } from '@angular/core';
import {
  LangChangeEvent,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { CustomLoader } from './custom-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TranslateDemo';
  param = { value: 'World' };
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    translate.getTranslation('fr');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event + 'lang changed');
    });
  }
}
