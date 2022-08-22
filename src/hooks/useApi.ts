import axios from 'axios'
import { SetStateAction, useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://recruitment-test.flip.id'

const useApi = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState<{} | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchData = () => {
    const _headers = headers != null ? JSON.parse(headers) : null
    const _body = body != null ? JSON.parse(body) : null

    axios[method](url, _headers, _body)
      .then((response: { data: SetStateAction<{} | null> }) => {
        setResponse(response.data)
      })
      .catch((error: SetStateAction<string>) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])

  return { response, error, loading }
}

export default useApi
