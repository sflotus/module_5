import {Fragment, useEffect, useState} from "react";
import axios from "axios";

function Demo() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search?query=redux',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
                console.log(data)
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);
    const deleteHandel = id =>{
        setData(prevData => ({
            ...prevData,
            hits: prevData.hits.filter((_, index) => index !== id)
        }))
    }
    return (
        <Fragment>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button
                type="button"
                onClick={() =>
                    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
                }
            >
                Search
            </button>

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data.hits.map((item,index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                            <button onClick={() => deleteHandel(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
}
export default Demo;
