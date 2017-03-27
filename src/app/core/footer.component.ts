import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  constructor(private translate: TranslateService) {
  }

  public setLanguage(lang: string) {
    Cookie.set('language', lang);
    this.translate.use(lang);
  }
}
