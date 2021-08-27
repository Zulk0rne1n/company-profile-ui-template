import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: [ './reset-password.component.scss', '../landing-layout.component.scss' ]
} )
export class ResetPasswordComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;
  token = '';
  username = '';
  success = false;
  loading = false;

  URLS = URLS;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      public router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private informationService: InformationService,
      private toastService: ToastService
  ) {
    // redirect to home if already logged in
    if ( this.authenticationService.currentUserValue ) {
      this.router.navigate( [ URLS.dashboard.root ] );
    }
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.token = params.token;
      this.username = params.username;
    } );

    this.form = this.formBuilder.group( {
      password: [ '', Validators.compose( [ Validators.required, Validators.minLength( 6 ) ] ) ],
      confirmPassword: [ '', Validators.required ]
    }, {
      validator: this.MustMatch( 'password', 'confirmPassword' )
    } );
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  onSubmit() {
    if ( this.loading ) {
      return;
    }

    this.submitted = true;

    const errorMessages = {
      password: 'Please provide a valid password (min length 6)',
      confirmPassword: 'Please provide the same value for confirm password'
    };

    if ( this.form.invalid ) {
      for ( const control in this.form.controls ) {
        if ( this.form.controls[ control ].invalid ) {
          this.toastService.error( errorMessages[ control ], '', {
            positionClass: this.route.parent.snapshot.data.layout,
          } );
        }
      }
      return;
    }

    this.authenticationService.resetPassword(
        this.username,
        this.token,
        this.form.controls.password.value
    ).pipe( first() )
    .subscribe(
        () => {
          this.success = true;
        },
        () => {
          this.success = false;
        } );
  }

  private MustMatch( controlName: string, matchingControlName: string ) {
    return ( formGroup: FormGroup ) => {
      const control = formGroup.controls[ controlName ];
      const matchingControl = formGroup.controls[ matchingControlName ];

      if ( matchingControl.errors && !matchingControl.errors.mustMatch ) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if ( control.value !== matchingControl.value ) {
        matchingControl.setErrors( { mustMatch: true } );
      } else {
        matchingControl.setErrors( null );
      }
    };
  }
}
