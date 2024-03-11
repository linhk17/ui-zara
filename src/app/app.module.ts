import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, EndpointService } from '@services/index';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '@interceptors/jwt-interceptor';
import { ErrorInterceptor } from '@interceptors/error-interceptor';
import { ThemeModule } from './@theme/theme.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { environment } from '@env/environment';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeModule,
    HotToastModule,
    NgScrollbarModule,
    HttpClientModule,
    NgxGpAutocompleteModule.forRoot({
      loaderOptions: {
        apiKey: environment.GOOGLE_API_KEY,
        libraries: ['places']
      }
    }),
  ],
  providers: [CookieService, AuthService, EndpointService, ErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
