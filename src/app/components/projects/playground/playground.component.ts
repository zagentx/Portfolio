import { Component } from '@angular/core';
interface Item {
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  items: Item[] = [
    { name: 'Äpfel', quantity: 5 },
    { name: 'Bananen', quantity: 3 },
  ];
  newItemName = '';
  newItemQuantity = 1;

  addItem() {
    this.items.push({
      name: this.newItemName,
      quantity: this.newItemQuantity,
    });
    this.newItemName = '';
    this.newItemQuantity = 1;
  }

  editItem(index: number) {
    const item = this.items[index];
    this.newItemName = item.name;
    this.newItemQuantity = item.quantity;
    this.deleteItem(index);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
