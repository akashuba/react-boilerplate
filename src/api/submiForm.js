export const submiForm = async (url) => {
    return fetch(url, {
        method: 'POST'
    })
 }