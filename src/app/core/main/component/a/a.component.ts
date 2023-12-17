import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';
import { ComponentBComponent } from '../b/b.component';

@Component({
  selector: 'app-component-a',
  styleUrls: ['./a.component.scss'],
  template: `
    <div>
      <button (click)="createComponentB()">Ajout Device</button>
      <button (click)="saveValues()">Tous Enregistrer</button>
      <ng-container #componentBContainer></ng-container>
      <div *ngFor="let value of values">
        Id de {{ value.id }} : {{ value.value }}
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

    componentRef.instance.saveEvent.subscribe((id: string, label: string) =>
      this.onSaveFromComponentB(uniqueId, id, label)
    );
    componentRef.instance.deleteEvent.subscribe(() =>
      this.deleteComponentB(componentRef)
    );

    this.componentBRefs.push(componentRef);
  }

  private onSaveFromComponentB(id: string, value: string, label: string) {
    const existingIndex = this.values.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      this.values[existingIndex].value = value;
    } else {
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
      componentRef.instance.triggerSave();
    });
    this.values = [];
    this.componentBRefs.forEach((componentRef) => {
      const id = componentRef.instance.id;
      const value = componentRef.instance.inputValue;
      this.values.push({ id, value });
    });

    console.log('Saved values:', this.values);
  }
}
