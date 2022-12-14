import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    server: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  token: string = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.token = this.storageService.getUser().username;
    }
  }

  onSubmit(): void {
    const { username, password, server } = this.form;

    this.authService.login(username, password, server).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.reload();
      },
      error: (err) => {
        this.errorMessage = err.error.name;
        this.isLoginFailed = true;
      },
    });
  }
}
