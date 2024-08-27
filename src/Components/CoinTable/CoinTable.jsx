import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCoinData } from "../../Services/fetchCoinData";

function CoinTable() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error, isFetching } = useQuery(
        ['coins', page],
        () => fetchCoinData(page, 'usd'),
        {
            retry: 2,
            retryDelay: 1000,
            cacheTime: 1000 * 60 * 2, // 2 minutes
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        // Check the structure of error and provide meaningful feedback
        return <div>Error: {error?.message || 'An error occurred'}</div>;
    }

    return (
        <>
            <div>
                <h1>Coin Data</h1>
                {/* Check if data exists and then map it */}
                {data && data.map((coin) => (
                    <div key={coin.id}>
                        <p>{coin.name} - {coin.current_price} USD</p>
                    </div>
                ))}
            </div>
            <div>
                {/* Pagination controls */}
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={() => setPage((prev) => prev + 1)}>
                    Next
                </button>
            </div>
            {/* Show if there's any ongoing fetch */}
            {isFetching && <div>Updating data...</div>}
        </>
    );
}

export default CoinTable;
