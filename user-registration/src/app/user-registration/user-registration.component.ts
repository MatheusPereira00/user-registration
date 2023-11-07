import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  form!: FormGroup;

  title = 'Resgister - User';

  private _http = inject(HttpClient);

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });

    if (this.title) {
      console.log('tem title');
    } else {
      console.log('sem title');
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this._http
        .post('http://httpbin.org/post', JSON.stringify(this.form.value))
        .pipe(take(1))
        .subscribe((dados) => console.log(dados));
    } else {
      console.log('error');
    }
  }
}
