import { AmountChangeAction } from './actions/amount';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrenciesUpdateAction } from './actions/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public amount$: Observable<number>
  public currencyRates$: Observable<Currency[]>;
  constructor(public store: Store<fromRoot.State>) {
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrnecyRates);
  }

  onAmountChange(amount: string) {
    // tslint:disable-next-line: variable-name
    const number = parseFloat(amount);
    if (!isNaN(number)) { this.store.dispatch(new AmountChangeAction(number)); }
  }

  ngOnInit(): void {
    this.store.dispatch(new CurrenciesUpdateAction());
  }
}
