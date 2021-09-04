import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { environmentCommon } from '../../../environments/environment-common';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './raw-landing-layout.component.html',
  styleUrls: [ './raw-landing-layout.component.scss' ]
} )
export class RawLandingLayoutComponent {

  environment = environment;
  environmentCommon = environmentCommon;
}
