import * as React from 'react'

import { REQUEST_STATUSES } from 'utils'

export function useApplicantData(searchText = '') {
  const [status, setStatus] = React.useState(REQUEST_STATUSES.IDLE)
  const [data, setData] = React.useState([])
  const abortRef: React.MutableRefObject<any> = React.useRef(null)

  const URL = searchText
    ? `/applicants?search=${searchText}`
    : `/applicants`

  async function fetchApplicants(signal: any) {
    setStatus(REQUEST_STATUSES.LOADING)
    try {
      const response = await fetch(URL, { signal })
      const jsonData = await response.json()
      setStatus(REQUEST_STATUSES.SUCCESS)
      setData(jsonData)
    } catch (error) {
      setStatus(REQUEST_STATUSES.ERROR)
    } finally {
      setStatus(REQUEST_STATUSES.IDLE)
    }
  }

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
  }, [searchText])

  return { status, data }
}
