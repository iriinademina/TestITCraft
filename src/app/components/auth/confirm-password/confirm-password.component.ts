import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-confirm-password",
  templateUrl: "./confirm-password.component.html",
  styleUrls: ["./confirm-password.component.css"]
})
export class ConfirmPasswordComponent implements OnInit {
  public frmPasswordReset: FormGroup;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.frmPasswordReset = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  sendPasswordResetRequest() {
    const email = this.frmPasswordReset.controls["email"].value;
    this.afAuth.auth.sendPasswordResetEmail(email).then(
      () => {
        console.log(" Email succsess");
      },
      err => {
        console.log("Error");
      }
    );
  }
}
