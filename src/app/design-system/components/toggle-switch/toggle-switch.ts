import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  imports: [],
  templateUrl: './toggle-switch.html',
  styleUrl: './toggle-switch.scss',
})
export class ToggleSwitch {
  initialValue = input<boolean>(false);
  toggleChange = output<void>();
  protected readonly isEnable = signal<boolean>(false);

  constructor() {
    effect(() => {
      const value = this.initialValue();
      this.isEnable.set(value);
    });
  }

  toggle() {
    this.isEnable.set(!this.isEnable());
    this.toggleChange.emit();
  }
}
