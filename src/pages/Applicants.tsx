import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'query-string'

import {
  ApplicantGroup,
  ApplicantFilters,
  ApplicantHeader,
} from 'components/Applicant'
import Layout from 'components/Layout'
import { useApplicantData, useDebouncedValue } from 'hooks'

import { applicantProps, applicantStatus } from 'models/types'
import { groupByStatus, REQUEST_STATUSES } from 'utils'

export default function ApplicantsPage({
  history,
  location,
}: RouteComponentProps) {
  const { search } = qs.parse(location.search)
  const defaultText = typeof search === 'string' ? search : ''
  const [searchText, setSearchText] = React.useState(defaultText)

  const deboundedText = useDebouncedValue(searchText, 500)

  const { status, data: applicants } = useApplicantData(deboundedText)

  React.useEffect(() => {
    const queryParams = qs.parse(location.search)
    queryParams.search = searchText
    const newQueryString = qs.stringify(queryParams)
    history.replace(`?${newQueryString}`)
  }, [deboundedText])


  const applicantsByStatus: Record<
    applicantStatus,
    applicantProps[]
  > = groupByStatus(applicants as applicantProps[])

  return (
    <Layout>
      <ApplicantHeader total={applicants.length} groups={applicantsByStatus} />
      <ApplicantFilters initialValue={searchText} searchFn={setSearchText} />
      {status === REQUEST_STATUSES.LOADING ? <div>... Loading ...</div> : null}
      {status === REQUEST_STATUSES.ERROR ? (
        <div>Oops! There was an Error.</div>
      ) : null}

      {status !== REQUEST_STATUSES.LOADING && applicants.length === 0 ? (
        <div>No Applicants Found</div>
      ) : null}

      {![REQUEST_STATUSES.ERROR, REQUEST_STATUSES.LOADING].includes(status)
        ? Object.entries(
            applicantsByStatus
          ).map(([group, applicants]: any[]) => (
            <ApplicantGroup group={group} applicants={applicants} key={group} />
          ))
        : null}
    </Layout>
  )
}
