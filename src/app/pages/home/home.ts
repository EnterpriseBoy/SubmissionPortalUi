import { Component } from '@angular/core';
import { Login } from '../../components/auth/login/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Login],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
