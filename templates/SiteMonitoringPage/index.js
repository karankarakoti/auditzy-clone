import { Box } from 'atoms'
import React from 'react'
import { SiteMonitoringBenefit, SiteMonitoringFeatures, SiteMonitoringHero } from './molecules'

export const SiteMonitoringPage = () => {
    return (
        <>
            <Box overflowX='hidden'>
               <SiteMonitoringHero/>      
               <SiteMonitoringBenefit/>  
               <SiteMonitoringFeatures/>         
            </Box>
        </>
    )
}
