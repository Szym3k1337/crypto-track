import { useState, useEffect, useCallback } from "react";


export default function useFetch<T>(URL: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
            const errorMessage = err instanceof Error ? err.message : "Wystąpil niezidentyfikowany błąd"
            console.error("Złapany błąd:", errorMessage);
            if (errorMessage === "Failed to fetch") {
                setError("Brak połączenia z internetem. Sprawdź swoje Wi-Fi.");
            } else {
                setError(errorMessage);
            }
        } finally {
            setLoading(false);
        }
    }, [URL]);


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        handleFetchData();
    }, [handleFetchData]);

    return { data,loading, error, handleFetchData };
}
