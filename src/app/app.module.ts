import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginActivate } from './_helpers/Login.activate';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReleaseComponent } from './release/release.component';
import { ModalComponent } from './modal/modal.component';
import { TaskComponent } from './task/task.component';
import { FocusDirective } from './_directive/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ReleaseComponent,
    ModalComponent,
    TaskComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    ToastrModule.forRoot(),
  ],
  providers: [httpInterceptorProviders, LoginActivate],
  bootstrap: [AppComponent],
})
export class AppModule {}
