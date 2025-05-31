import { Injectable } from '@angular/core';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM_DEFINED: 'system-defined',
} as const;

export type ThemeKey = keyof typeof THEME;
export type ThemeValue = (typeof THEME)[ThemeKey];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {}
