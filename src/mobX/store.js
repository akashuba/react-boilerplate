import { observable, decorate, action, runInAction } from 'mobx';

import { longListFetch } from '../api/longList'

class State {
	counter = 0;
	listOfData = null;

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
					this.listOfData = JSON.stringify(data);
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