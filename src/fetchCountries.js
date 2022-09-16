/** Напиши функцію fetchCountries(name), яка робить HTTP-запит на ресурс name і
 * повертає проміс з масивом країн - результатом запиту. 
 */

export function fetchCountries(name) {
  
  const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });
  
  const url = `https://restcountries.com/v3.1/name/${name}?${searchParams}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error));
}
