const API_KEY = "44491142-aecbd5d4985006473364cc93b";

export function fetchImages(query) {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(URL).then(res => {
        
        console.log(res);

        if (!res.ok) {
            throw new Error(res.status)
        }

        return res.json();
    })
}