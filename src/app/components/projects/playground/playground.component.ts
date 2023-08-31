import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  title = 'Shopping List';
  items = [{ name: '', quantity: null }];
  newItemName = '';
  newItemQuantity = null;

  addItem() {
    this.items.push({
      name: this.newItemName,
      quantity: this.newItemQuantity,
    });
    this.newItemName = '';
    this.newItemQuantity = null;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  editItem(index: number) {
    const item = this.items[index];
    if (this.items.some((i) => i.name === item.name)) {
      throw new Error(
        `Item with name ${item.name} already exists in the list.`,
      );
    }
    this.newItemName = item.name;
    this.newItemQuantity = item.quantity;
    this.deleteItem(index);
  }
}
