import React, {Suspense, useContext, useEffect, useState} from "react"
import { AgChartsReact } from 'ag-charts-react';
function DataCard({ icon, title, sub, average, chartOptions, metric, subData }) {
  return(
      color={average < 50 ? "red" : "green"}
        <FontAwesomeIcon icon={icon} />
          color={average < 50 ? "red" : "green"}>{title}</Heading>
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
          <Badge highContrast variant="soft" size="2" color={average < 50 ? "red" : "green"}>
      <FlexAlignCenter justify="space-between">
        <JobsAppliedTo>
          {sub}
          {subData}
      </FlexAlignCenter>
    </MainContentOverView>
  )
}

export default DataCard