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

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    const items = localStorage.getItem('shoppingList');
    if (items) {
      this.items = JSON.parse(items);
    }
  }

  saveItems() {
    localStorage.setItem('shoppingList', JSON.stringify(this.items));
    console.log(localStorage);
  }

  addItem() {
    this.items.push({
      name: this.newItemName,
      quantity: this.newItemQuantity,
    });
    this.newItemName = '';
    this.newItemQuantity = null;
    this.saveItems();
  }

  editItem(index: number) {
    const item = this.items[index];
    this.newItemName = item.name;
    this.newItemQuantity = item.quantity;
    this.deleteItem(index);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.saveItems();
  }

  clearShoppingList() {
    this.items = [];
    this.saveItems();
  }
}
