import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)

        const fecthData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, controller)

                if (!response.ok) {
                    throw new Error('Error al obtener los datos')
                }

                const data: T = await response.json()
                setData(data)
                setError(null)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }
        fecthData();

        return () => {
            controller.abort()
        }
    }, [url])

    return { data, loading, error }
}