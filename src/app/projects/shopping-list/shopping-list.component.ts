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
  editIndex: number | null = null;

  constructor() {
  }

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
  }

  addItem() {
    if (this.editIndex !== null) {
      this.items[this.editIndex] = {
        name: this.newItemName,
        quantity: this.newItemQuantity,
      };
      this.editIndex = null;
    } else {
      this.items.push({
        name: this.newItemName,
        quantity: this.newItemQuantity,
      });
    }
    this.newItemName = '';
    this.newItemQuantity = null;
    this.saveItems();
    this.editMode = false;
  }

  editItem(index: number) {
    if (this.editMode && index === this.editIndex) {
      this.newItemName = '';
      this.newItemQuantity = null;
      this.editMode = false;
      this.editIndex = null;
    } else {
      const item = this.items[index];
      this.newItemName = item.name;
      this.newItemQuantity = item.quantity;
      this.editMode = true;
      this.editIndex = index;
    }
  }

  deleteItem(index: number) {
    if (index === this.editIndex) {
      this.newItemName = '';
      this.newItemQuantity = null;
      this.editMode = false;
      this.editIndex = null;
    }
    this.items.splice(index, 1);
    this.saveItems();
  }

  clearShoppingList() {
    this.newItemName = '';
    this.newItemQuantity = null;
    this.editMode = false;
    this.editIndex = null;

    this.items = [];
    this.saveItems();
  }

  openModal() {

  }
}
