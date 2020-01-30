export const submiForm = (url, formData) => {
    return fetch(url, {
		method: 'POST',
		body: formData
    })
 }