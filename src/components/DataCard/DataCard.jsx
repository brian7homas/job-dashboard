/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx } from "@emotion/react";
import { Suspense } from 'react'
import { AgChartsReact } from 'ag-charts-react';
import { FlexAlignCenter } from '../../styles/utils/flexAlignCenter.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataCardStyles } from './DataCard.styles'
import { Heading, Box, Badge, Text, Card } from '@radix-ui/themes'

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

export default DataCard