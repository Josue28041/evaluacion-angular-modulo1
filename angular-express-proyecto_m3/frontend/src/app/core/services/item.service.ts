import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { API_URL } from '../tokens/api-url.token';
import { addItem } from '../../store/item.actions';
import { Item } from '../models/item.model';
import { DexieService } from './local-db.service';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private apiUrl = inject(API_URL);
  constructor(
    private http: HttpClient,
    private store: Store,
    private db: DexieService
  ) {}

  addItem(item: Item) {
    this.http.post(`${this.apiUrl}/items`, item).subscribe(() => {
      this.store.dispatch(addItem({ item }));
      this.db.items.add(item);
    });
  }

  getItems() {
    return this.http.get<Item[]>(`${this.apiUrl}/items`);
  }
}