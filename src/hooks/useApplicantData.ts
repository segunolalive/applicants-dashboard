import * as React from 'react'

import { REQUEST_STATUSES } from 'utils'

export function useApplicantData(searchText = '') {
  const [status, setStatus] = React.useState(REQUEST_STATUSES.IDLE)
  const [data, setData] = React.useState([])
  const abortRef: React.MutableRefObject<any> = React.useRef(null)

  const URL = searchText ? `/applicants?search=${searchText}` : `/applicants`

  const fetchApplicants = React.useCallback(
    async function (signal: any) {
      setStatus(REQUEST_STATUSES.LOADING)
      try {
        const response = await fetch(URL, { signal })
        if (!response.ok) {
          throw new Error('Server Error')
        }
        const jsonData = await response.json()
        setStatus(REQUEST_STATUSES.SUCCESS)
        setData(jsonData)
      } catch (error) {
        setStatus(REQUEST_STATUSES.ERROR)
      }
    },
    [URL]
  )

  React.useEffect(() => {
    if (abortRef.current) {
      abortRef.current.abort()
    }
    const controller = new AbortController()
    abortRef.current = controller

    fetchApplicants(controller.signal)
    return () => {
      controller.abort()
    }
  }, [searchText, fetchApplicants])

  return { status, data }
}
