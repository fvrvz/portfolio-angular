import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-shell',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
