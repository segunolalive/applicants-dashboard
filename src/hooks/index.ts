import * as React from 'react'

import { REQUEST_STATUSES } from 'utils'

const BASE_API_URL = process.env.REACT_APP_API_URL

export function useApplicantData(searchText = '') {
  const [status, setStatus] = React.useState(REQUEST_STATUSES.IDLE)
  const [data, setData] = React.useState([])
  const [pendingRequest, setPendingRequest] = React.useState(null as any)
  const abortRef: React.MutableRefObject<any> = React.useRef(null)

  const URL = searchText
    ? `${BASE_API_URL}/applicants?search=${searchText}`
    : `${BASE_API_URL}/applicants`

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
      setPendingRequest(null)
    }
  }

  React.useEffect(() => {
    if (abortRef.current) {
      abortRef.current.abort()
    }
    const controller = new AbortController()
    abortRef.current = controller

    setPendingRequest(URL)
    fetchApplicants(controller.signal)
    return () => {
      setPendingRequest(null)
      controller.abort()
    }
  }, [searchText])

  return { status, data }
}
