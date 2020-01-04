import { observable, decorate, action, runInAction } from 'mobx';

import { longListFetch } from '../api/longList'

class State {
	counter = 0;
	listOfData = [];

	increment() {
		this.counter++;
	}

	decrement() {
		this.counter--;
	}

	getApiData() {
		longListFetch()
			.then(response => response.json())
			.then(data => {
				runInAction(() => {
					this.listOfData.push(...data);
				})
			})
	}
}

decorate(State, {
	counter: observable,
	listOfData: observable,
	increment: action,
	decrement: action,
	getApiData: action.bound,
})

export const appStore = new State()