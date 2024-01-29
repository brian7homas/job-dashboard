import React, {Suspense, useContext, useEffect, useState} from "react"
import { AgChartsReact } from 'ag-charts-react';
import { DataContext } from "../../context/DataContext"
import { FlexAlignCenter } from "../../styles/utils/flexAlignCenter.styles"
import { DataBackDrop } from "../../styles/utils/dataBackDrop.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fontSize } from "../../styles/utils/fontSize.styles"
import {
  JobsTracked,
  JobsAppliedTo,
  MainContentOverView,
  DataText,
  JobsRatio
} from "./DataCard.styles"
    
function DataCard({ icon, title, sub, subData, chartOptions, metric }) {
  const { state } = useContext(DataContext)
  return(
    <MainContentOverView color={subData < 50 ? "red" : "green"}>
      <FlexAlignCenter justify="space-between" style={{ fontSize: fontSize(.02) }}>
        <FontAwesomeIcon icon={icon} />
        <JobsTracked fontSize=".02">{title}</JobsTracked>
      </FlexAlignCenter>
      <FlexAlignCenter>
        <DataText fontSize=".07">
          {metric}
        </DataText>
        <div style={{maxWidth:'70%', height:'100%', paddingTop:'1.5em'}}>
          <Suspense fallback={<div>...loading</div>}>
            <AgChartsReact options={chartOptions} />
          </Suspense>
        </div>
      </FlexAlignCenter>
      <FlexAlignCenter justify="space-between">
        <JobsAppliedTo>
          {sub}
        </JobsAppliedTo>
        {/* {((100 * xData.length)/state.length).toFixed(0)} */}
        <DataBackDrop color={subData < 50 ? "red" : "green"}>
          <JobsRatio>
            {subData}%
          </JobsRatio>
        </DataBackDrop>
      </FlexAlignCenter>
    </MainContentOverView>
  )
}

export default DataCard