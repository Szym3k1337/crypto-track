import { useState, useEffect, useCallback } from "react";


export default function useFetch(URL) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const request = await fetch(URL);

            if (!request.ok) {
                if (request.status === 429) {
                    throw new Error("Przekroczono limit zapytań (Błąd 429). Zwolnij i spróbuj za minutę.");
                }
                if (request.status === 404) {
                    throw new Error("Nie znaleziono zasobu na serwerze (Błąd 404). Check URL.");
                }
                if (request.status >= 500) {
                    throw new Error("Serwer dostawcy ma awarię (Błąd 500+). Spróbuj później.");
                }
                throw new Error(`Wystąpił błąd serwera (Status: ${request.status})`);
            }

            const json = await request.json();
            setData(json);

        } catch (err) {
            console.error("Złapany błąd:", err.message);
            if (err.message === "Failed to fetch") {
                setError("Brak połączenia z internetem. Sprawdź swoje Wi-Fi.");
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        handleFetchData();
    }, [handleFetchData]);

    return { data,loading, error, handleFetchData };
}
