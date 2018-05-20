const API = 'a0046b4c46f4f9bf3d5184ce9d74ddd7';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API}`

export const LOCATION_SEARCHED = 'LOCATION_SEARCHED';


export default function(city){
    const url = `${root_url}&q=${city},us`;
    const request = fetch(url)
    .then(response =>  response.json())

    return {
        type:LOCATION_SEARCHED,
        payload: request
    }
}