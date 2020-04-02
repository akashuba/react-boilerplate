import { useState, useEffect } from 'react';
import { longListFetch } from '../api/longList';

export function useAppData() {
	const [list, setList] = useState();

	useEffect(() => {
		longListFetch().then(async response => {
			if (response.status === 200) {
				const data = await response.json();
				setList(data)

				console.log(data);
			} else {
				console.log('Error: ', response.status);
			}
		});
	}, []);

	return list;
}