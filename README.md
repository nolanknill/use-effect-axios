axios

promises  -> but why?

    async operations


3 states of promises?
    - pending (promise is created)
    - rejected (promise failed)
        - error: 4xx - 5xx response status codes
    - fulfilled (promise was successful)
        - 2xx response status code, includes data!

- How could we handle pending, rejected, fulfilled?
    - states of an axios request:
        - loading
        - error
        - successful state -> when the data loads correctly! put data in state




General strategy for axios in React:

- Pick a component that we want to use the axios data in
- Initialize the state for that data as empty
- Trigger the axios request
    - inside useEffect(), so we can set state and only re-render the component once!





function Videos() {
    const [videos, setVideos] = useState([]);
    axios
        .get()
        .then((response) => {
            setVideos(response.data);
        })
    
    return ( // map the videos and render each video here );

}





