import { Component } from '@angular/core';
import { PRIMENG_IMPORTS } from '../../primeng.imports';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [...PRIMENG_IMPORTS],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {}