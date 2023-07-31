import { useEffect, useState } from "react";
import axios from "axios";

function TvShow({ id }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [show, setShow] = useState(null);

    useEffect(() => {
        axios
            .get(`https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/shows/${id}`)
            .then((response) => {
                setShow(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsError(true);
            })
    }, [id]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>There was an error retrieving the TV Show. Please try again later.</p>
    }

    return (
        <article>
            <h2>{show.title}</h2>
            <img 
                width="250px" 
                src={show.image_src} 
                alt={`${show.title} Cover`}
            />
            <p>Rating: {show.rating}</p>
        </article>
    )
}

export default TvShow;