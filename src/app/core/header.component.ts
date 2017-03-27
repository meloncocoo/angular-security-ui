import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Input() public showSearchBox: boolean = false;
  @Input() public hideMenu: boolean = false;

  public isCollapsed: boolean = false;

  @Output() private search = new EventEmitter();

  constructor(private translate: TranslateService) {
    let lang = Cookie.get('language') || 'zh';
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }

  public setLanguage(lang: string) {
    Cookie.set('language', lang);
    this.translate.use(lang);
  }

  public onSubmit(input: any) {
    let text = input.value;
    this.search.emit(text);
    input.value = null;
  }
}
