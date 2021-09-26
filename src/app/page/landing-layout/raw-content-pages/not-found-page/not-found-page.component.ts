import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonClass } from '../../../../component/button/button.component';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: [ './not-found-page.component.scss' ]
} )
export class NotFoundPageComponent {
  redButtonClass = ButtonClass.red

  brand = {
    brandLogoBroken: '',
  };

  constructor(
      public router: Router,
      private themeService: ThemeService ) {
    this.brand = this.themeService.brand;
  }
}
