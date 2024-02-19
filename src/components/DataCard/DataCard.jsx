/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { jsx } from '@emotion/react';
import { Suspense } from 'react'
import { AgChartsReact } from 'ag-charts-react';
import { FlexAlignCenter } from '../../styles/utils/flexAlignCenter.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataCardStyles } from './DataCard.styles'
import { Heading, Box, Badge, Text, Card } from '@radix-ui/themes'
import { InterviewDataLogic } from '../../data/interviewDataLogic';
import { PhoneScreensDataLogic } from '../../data/phoneScreensDataLogic'
import { AppliedDataLogic } from '../../data/appliedDataLogic'
import { InterViewChartOptions } from '../../chartOptions/InterviewChartOptions';
import { AppliedChartOptions } from '../../chartOptions/AppliedChartOptions';
import { PhoneScrensChartOptions } from '../../chartOptions/PhoneScreensChartOptions';
import { faBriefcase, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

function DataCard({ icon, title, sub, average, chartOptions, metric, subData }) {
  const [options, setOptions] = useState(chartOptions);
  useEffect(() => {
    setOptions(chartOptions)
    },[chartOptions])
  return(
    <Card
      variant="surface"
      size="3"
      color={average < 50 ? "red" : "green"}
      css={DataCardStyles.container}
      mt="3"
      >
      <FlexAlignCenter 
        justify="space-between" 
        >
        <FontAwesomeIcon icon={icon} />
        <Heading 
          highContrast={true}
          as="h1" 
          size="5" 
          weight="bold"
          // trim="both"
          css={DataCardStyles.heading}
          color={average < 50 ? "red" : "green"}>{title}</Heading>
      </FlexAlignCenter>
      
      <FlexAlignCenter 
        justify="stretch"
        >
        <Box 
          style={{
            width:300, 
            height:"100%", 
            paddingTop:"2em"
            }}>
          
          <Suspense fallback={<Box>...loading</Box>}>
            <AgChartsReact options={options} />
          </Suspense>
        </Box>
      </FlexAlignCenter>
      
      <Box pt="9" pb="2">
        <FlexAlignCenter justify="space-between">
          <Text
            weight="light"
          >
              Total: 
          </Text>
          <Badge highContrast variant="soft" size="2" color={average < 50 ? "red" : "green"}>
            {metric}
          </Badge>
          <Text
            weight="light"
          >
              Average: 
          </Text>
          <Badge highContrast variant="soft" size="2" color={average < 50 ? "red" : "green"}>
            {average}%
          </Badge>
        </FlexAlignCenter>
      </Box>
      
      <FlexAlignCenter justify="space-between">
        <Text 
          as="span"
          size="1"
          css={DataCardStyles.subTitle}>
          {sub}
        </Text>
        <Text>
          {subData}
        </Text>
      </FlexAlignCenter>
    </Card>
  )
}

export function Interviews() {
  const {state, setData} = useContext(DataContext)
  const interviewData = InterviewDataLogic(state)
  return (
    <>
      <DataCard
        metric={interviewData.interviewDates.length}
        chartOptions={InterViewChartOptions(interviewData.interviewDates)}
        average={((100 * interviewData.interviewDates.length) / state.length).toFixed(0)}
        title="Interviews"
        icon={faUser}
        sub="Next interview"
        subData={interviewData.mostRecentInterviewDate}
      />
    </>
  )
}
export function PhoneScreens() {
  const {state, setData} = useContext(DataContext)
  const phoneData = PhoneScreensDataLogic(state)
  return (
    <>
      <DataCard
        metric={phoneData.phoneScreenDates.length}
        chartOptions={PhoneScrensChartOptions(phoneData.phoneScreenDates)}
        average={((100 * phoneData.phoneScreenDates.length) / state.length).toFixed(0)}
        title="Phone screens"
        icon={faPhone}
        sub="Next phone screen"
        subData={phoneData.mostRecentDate}
      />
    </>
  )
}

export function Applied() {
  const {state, setData} = useContext(DataContext)
  const appliedData = AppliedDataLogic(state)
  return (
    <>
      <DataCard
        metric={appliedData.appliedLocations.length}
        chartOptions={AppliedChartOptions(appliedData.appliedLocations)}
        average={((100 * appliedData.appliedLocations.length) / state.length).toFixed(0)}
        title="Applied"
        icon={faBriefcase}
        sub="Location most applied to:"
        subData={appliedData.mostFrequent}
      />
    </>
  )
}
