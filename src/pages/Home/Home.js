import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TvShow from "../../components/TvShow/TvShow";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
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
                setIsError(true);
            })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>There was an error retrieving the TV Shows. Please try again later.</p>
    }

    const showId = id || shows[0].id;
    
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {shows.map((show) => {
                    return <li key={show.id}><Link to={`/tv-shows/${show.id}`}>{show.title}</Link></li>
                })}
            </ul>
            {/* {!isLoading && <TvShow show={activeShow} />} */}
            <TvShow id={showId} />
        </>
    );
}

export default Home;