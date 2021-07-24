import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/components/alerts/alert/alert.component';
import { Person } from 'src/app/shared/models/Person';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  persons: Person[] = [];
  form: FormGroup = this._formBuilder.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    phone: ['',[Validators.required]],
  })

  constructor(
    private _service: RegisterService,
    private _formBuilder: FormBuilder,
    private _alert: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit() {
  }


  save() {
    let person = {
      name: this.form.controls.name.value.toLowerCase(),
      email: this.form.controls.email.value,
      phone: this.form.controls.phone.value
    }

    this._service.savePerson(person).subscribe(
      (resp) => {
        this.alert("SUCCESS");
      },
      (resp) => {
        this.alert(resp.error);
      }
    );
  }

  alert(message: string) {

    this._alert.openFromComponent(AlertComponent, {
      duration: 3500,
      data: message
    });
  }

  navigateToList() {
    this._router.navigate(['list/'])
  }

}
