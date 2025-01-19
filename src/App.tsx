import { useEffect, useState } from 'react'
import { Button } from './components';
import { useFetch } from './hooks';

const url = 'https://jsonplaceholder.typicode.com/posts'

interface Data {
  userId: number,
  id: number,
  title: string,
  body: string
}

function App() {
  /* const [count, setCount] = useState(0)
  const countMore = () => {
    setCount(() => count  + 1)
  } */

  /* ------------------- */
  // CUSTOM HOOKS 
  const { data, error, loading } = useFetch<Data>(url)

  /* ------------------- */

  /* const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fecthData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')

      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      
      const data = await response.json()
      setData(data)
    }catch (error) {
      setError(error as string)
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthData()
   }, [])

    // ------------------- //
    
    const consoleLoader = useCallback((loadingValue: boolean) => {
      setLoading(loadingValue)
      console.info(loading)
    }, [loading])
  
    const fecthData = useCallback(
      async () => {
        consoleLoader(true)
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  
          if (!response.ok) {
            throw new Error('Error al obtener los datos')
          }
  
          const data = await response.json()
          setData(data)
        }catch (error) {
          setError(error as string)
        }finally {
          setLoading(false)
        } 
      }, [consoleLoader]
    )
    useEffect(() => {
      fecthData()
     }, [fecthData]) */
    
   if(loading) {
      return <p>Loading...</p>
   }

   if(error) {
     return <p>{error.message}</p>
   }

  return (
    <>
      {/* <Button label={`Count is ${count}`} parentMethod={countMore}></Button> */}
      {JSON.stringify(data)}
    </>
  )
}

export default App
