import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  howItWorks: boolean = true;
  workWithQuickBite: boolean = true;

  toggleHowItWorks() {
    this.howItWorks = !this.howItWorks;
    console.log('HomeComponent: toggleHowItWorks', this.howItWorks);
  }

  toggleWorkWithQuickBite() {
    this.workWithQuickBite = !this.workWithQuickBite;
    console.log('HomeComponent: toggleWorkWithQuickBbite', this.workWithQuickBite);
  }
}
