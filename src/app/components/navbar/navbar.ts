import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleSwitch } from '../../design-system/components/toggle-switch/toggle-switch';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ToggleSwitch],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly themeService = inject(ThemeService);
  protected themeInitial = false;

  constructor() {
    this.themeInitial = this.getCurrentTheme() !== 'light';
  }

  protected toggleTheme() {
    this.themeService.toggleTheme();
  }

  protected getCurrentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
