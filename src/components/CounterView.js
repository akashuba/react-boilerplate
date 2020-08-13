import React from 'react'

import { configure, toJS } from 'mobx';
import { useObserver } from 'mobx-react';

import { useStore } from './App';

configure({ enforceActions: 'observed' });

export const CounterView = () => {
	const store = useStore()

	console.log('listOfData', toJS(store.listOfData));

	return useObserver(() => (
		<div>
			<div>Counter value: {store.counter}</div>
			<button onClick={() => { store.increment() }}>+1</button>
			<button onClick={() => { store.decrement() }}>-1</button>
			<button onClick={() => { store.getApiData() }}>fetch API</button>
			<h3>Fetched Data</h3>
			<ul>{
				store.listOfData.map((item, index) =>
					<li key={index}>{item && item.name}</li>
				)
			}
			</ul>
		</div>
	))
}