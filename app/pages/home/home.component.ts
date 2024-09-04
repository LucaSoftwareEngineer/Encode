import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  pwd_text = '';

  getPwd(): void {
    this.pwd_text = btoa(this.pwd_text);
    this.pwd_text = btoa(this.pwd_text);
    this.pwd_text = btoa(this.pwd_text);
    this.pwd_text = "$%&" + btoa(this.pwd_text) + "$%&";
  }

}
