import React, { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import {
  JobsTracked,
  JobsAppliedTo
} from "./Overview.styles"
function Overview() {
  const { state } = useContext(DataContext)

  const appliedData = state.filter((el) => {
    if (el.stage.applied) return el
  })
  const remoteLocationData = state.filter((el) => {
    if (el.location.toLowerCase() === 'remote') return el
  })
  const onsiteLocationData = state.filter((el) => {
    if (el.location.toLowerCase() !== 'remote') return el
  })

  const takeHomeAssignmentsData = state.filter((el) => {
    if (el.stage.takeHomeAssignment.received) return el
  })
  return (
    <>
      <JobsTracked>Jobs tracked: <span>{state.length}</span></JobsTracked>
      <JobsAppliedTo>Jobs applied to: {appliedData.length}</JobsAppliedTo>
      <div>
        <p>Take home assignments: {takeHomeAssignmentsData.length}</p>
        {
          !takeHomeAssignmentsData.length ? '' : takeHomeAssignmentsData.map((el) => {
            return (
              <ul>
                <li>{el.company}</li>
              </ul>
            )
          })
        }
      </div>
      <p>Remote Jobs: {remoteLocationData.length}</p>
      <p>On-site Jobs: {onsiteLocationData.length}</p>
    </>
  )
}

export default Overview