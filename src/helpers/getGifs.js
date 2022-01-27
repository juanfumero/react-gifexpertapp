
    export const getGifs = async ( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=kV4046iYIP9cyIk2n4MSqmlWh239uOgX&limit=10`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

    }