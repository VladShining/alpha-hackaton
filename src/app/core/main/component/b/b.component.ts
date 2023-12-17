// component-b.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './b.component.html',
})
export class ComponentBComponent {
  @Output() saveEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  id!: string;
  inputValue: string = '';

  onSave() {
    // Emit the input value to Component A
    this.saveEvent.emit(this.inputValue);
  }

  onDelete() {
    this.deleteEvent.emit(this.id);
  }
  triggerSave() {
    this.onSave();
  }
}
