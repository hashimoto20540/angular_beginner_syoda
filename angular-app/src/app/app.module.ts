import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';

import { MycheckService } from './mycheck.service';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';

import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatInputModule} from '@angular/material/input';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FireComponent } from './fire/fire.component';

var config = {
  apiKey: "AIzaSyCyImupnO3FOKaLuRrqJ90qPdg_IEDc35Q",
  authDomain: "book-review-app-1.firebaseapp.com",
  projectId: "book-review-app-1",
  storageBucket: "book-review-app-1.appspot.com",
  messagingSenderId: "67053868730",
  appId: "1:67053868730:web:e9f6582adc28a3548d5483",
  measurementId: "G-NPNB6N3K5V"
}

const routes:Routes = [
  { path: 'fire', component: FireComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'msg', component: MessageComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective,
    MaterialComponent,
    FireComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, // この文を追加
    MatIconModule, // この文を追加
    HttpClientModule, // ★
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
  constructor() { } 

}