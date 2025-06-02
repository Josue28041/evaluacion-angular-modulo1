import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class DexieService extends Dexie {
  items!: Table<Item, number>;

  constructor() {
    super('MyDatabase');
    this.version(1).stores({ items: '++id, name' });
  }
}