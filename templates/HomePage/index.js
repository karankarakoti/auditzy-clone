import React from 'react'
import { Box } from "atoms";
import { HomeHero, HomeBrand, HomeService, HomeFeature, HomeOffer, HomeCompetition, HomeCompare, HomeVital, HomeWorkflow } from './molecules';

export const HomePage = () => {
  return (
    <>
        <Box overflowX='hidden'>
            <HomeHero/>  
            <HomeBrand/>  
            <HomeService/> 
            <HomeFeature/>    
            <HomeOffer/>   
            <HomeCompetition/>
            <HomeCompare />
            <HomeVital/>
            <HomeWorkflow/>
        </Box>
    </>
  )
}
