import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  items: Item[] = [];
  newItemName = '';
  newItemQuantity: any;

  editMode = false;

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.items.push({
      name: this.newItemName,
      quantity: this.newItemQuantity,
    });
    this.newItemName = '';
    this.newItemQuantity = null;
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
