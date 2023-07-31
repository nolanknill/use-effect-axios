import { Link, useParams } from "react-router-dom";

function Home() {
    const params = useParams();

    console.log("This function is running!");
    console.log("Params: ", params);

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tv-shows/1">TV Show 1</Link></li>
                <li><Link to="/tv-shows/2">TV Show 2</Link></li>
            </ul>
            <h2>TV Show #: {params.id}</h2>
        </>
    );
}

export default Home;