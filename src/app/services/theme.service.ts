import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM_DEFINED: 'system-defined',
} as const;

export type ThemeKey = keyof typeof THEME;
export type ThemeValue = (typeof THEME)[ThemeKey];

const LOCAL_STORAGE_KEY = 'USER_THEME';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly currentTheme = signal<ThemeValue>(THEME.LIGHT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBrowser) {
      const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY) ?? THEME.LIGHT;
      this.currentTheme.set(currentTheme as ThemeValue);
    }
    effect(() => {
      if (this.isBrowser) {
        localStorage.setItem(LOCAL_STORAGE_KEY, this.currentTheme() as string);
        this.applyTheme(this.currentTheme());
      }
    });
  }

  toggleTheme() {
    this.currentTheme.update(currentTheme => (currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  }

  setTheme(value: ThemeKey) {
    this.currentTheme.set(THEME[value]);
  }

  getCurrentTheme(): ThemeValue {
    return this.currentTheme();
  }

  private applyTheme(theme: ThemeValue) {
    document.body.setAttribute('data-theme', theme);
  }
}
