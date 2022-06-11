import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/items.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  items: Item[] = [new Item('Racao', 50), new Item('Coleira', 20)];

  constructor() {}

  ngOnInit(): void {}
}
