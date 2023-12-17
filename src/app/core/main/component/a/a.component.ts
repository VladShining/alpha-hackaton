import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';
import { ComponentBComponent } from '../b/b.component';

@Component({
  selector: 'app-component-a',
  template: `
    <div>
      <button (click)="createComponentB()">Create Component B</button>
      <button (click)="saveValues()">Save Values from Active Components</button>
      <ng-container #componentBContainer></ng-container>
      <div *ngFor="let value of values">
        Value from Component B ({{ value.id }}): {{ value.value }}
      </div>
    </div>
  `,
})
export class ComponentAComponent {
  private componentBCounter = 1;
  private componentBRefs: ComponentRef<ComponentBComponent>[] = [];
  values: { id: string; value: string }[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  createComponentB() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        ComponentBComponent
      );
    const componentRef =
      this.viewContainerRef.createComponent(componentFactory);

    const uniqueId = `component-b-${this.componentBCounter++}`;
    componentRef.instance.id = uniqueId;

    componentRef.instance.saveEvent.subscribe((value: string) =>
      this.onSaveFromComponentB(uniqueId, value)
    );
    componentRef.instance.deleteEvent.subscribe(() =>
      this.deleteComponentB(componentRef)
    );

    this.componentBRefs.push(componentRef);
  }

  private onSaveFromComponentB(id: string, value: string) {
    const existingIndex = this.values.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      // Update the existing value
      this.values[existingIndex].value = value;
    } else {
      // Add a new value
      this.values.push({ id, value });
    }
    console.log(this.values);
  }

  private deleteComponentB(componentRef: ComponentRef<ComponentBComponent>) {
    const componentIndex = this.componentBRefs.indexOf(componentRef);

    if (componentIndex !== -1) {
      this.componentBRefs.splice(componentIndex, 1);
      componentRef.destroy();
    }
  }

  saveValues() {
    this.componentBRefs.forEach((componentRef) => {
      // Trigger save for each active ComponentBComponent
      componentRef.instance.triggerSave();
    });

    // Clear the values array
    this.values = [];

    // Populate the values array with the updated values from active ComponentBComponents
    this.componentBRefs.forEach((componentRef) => {
      const id = componentRef.instance.id;
      const value = componentRef.instance.inputValue;

      // Add a new value
      this.values.push({ id, value });
    });

    console.log('Saved values:', this.values);
  }
}
