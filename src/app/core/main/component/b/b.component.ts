import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-b',
  styleUrls: ['./b.component.scss'],
  templateUrl: './b.component.html',
})
export class ComponentBComponent {
  @Output() saveEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  id!: string;
  inputValue: string = '';
  labelValue: string = '';

  onSave() {
    this.saveEvent.emit(this.inputValue);
  }

  onDelete() {
    this.deleteEvent.emit(this.id);
  }
  triggerSave() {
    this.onSave();
  }
}
