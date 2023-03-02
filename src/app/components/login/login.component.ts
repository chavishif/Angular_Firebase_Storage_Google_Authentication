import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UploadFormComponent } from '../upload-form/upload-form.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private uplser :FileUploadService
  ) { }
  // like def_init in python to initialize the properties of an object
  ngOnInit(): void { }


  loginWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(googleResponse => {
        // Successfully logged in
        console.log(googleResponse);
        // access to googleResponce properties like photoURL of the user
        console.log(googleResponse.user?.photoURL);
        // to enable access of userimage from that component that brings this data to the userImage 
        // in FileUploadService and then pass it to the component that is want ro display it
        googleResponse.user?.photoURL? this.uplser.userImage = googleResponse.user?.photoURL:""
        // Store the user ID in localStorage
        const userId = googleResponse.user?.uid;
        if (userId) {
          localStorage.setItem('userId', userId);
        }

      }).catch(err => {
        // Login error
        console.log(err);
      });
  }

}