import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  form!: FormGroup;

  private _http = inject(HttpClient);

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  onSubmit() {
    this._http
      .post('http://httpbin.org/post', JSON.stringify(this.form.value))
      .subscribe(dados => console.log(dados));
  }
}
