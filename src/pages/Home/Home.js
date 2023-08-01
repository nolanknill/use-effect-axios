import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Show from "../../components/Show/Show";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [shows, setShows] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/shows")
            .then((response) => {
                setShows(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setHasError(true);
            })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>Server error, sorry. It's not you, it's me. Sorry again.</p>
    }
    
    const showId = id || shows[0].id;

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                {shows.map((show) => {
                    return (
                        <li><Link to={`/tv-shows/${show.id}`}>{show.title}</Link></li>
                    )
                })}
            </ul>
            <Show id={showId} />
        </>
    );
}

export default Home;