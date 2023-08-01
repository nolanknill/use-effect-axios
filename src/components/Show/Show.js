import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Show({ id }) {
    const [show, setShow] = useState(null); // data comes from API
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/shows/${id}`)
            .then((response) => {
                setShow(response.data);
            }).catch((error) => {
                // send them to the home page?
                navigate("/");
            })
    }, [id, navigate]);

    if (!show) {
        return <p>Loading...</p>
    }

    return (
        <article>
            <h2>{show.title}</h2>
            <img src={show.image_src} alt={`${show.title} Cover`} width="120px" />
            <p>⭐️ {show.rating}</p>
        </article>
    );
}

export default Show;