import React from 'react'
import { Box } from "atoms";
import { HomeHero, HomeBrand, HomeService, HomeFeature, HomeOffer, HomeCompetition, HomeCompare, HomeVital, HomeWorkflow } from './molecules';

export const HomePage = () => {
  return (
    <>
        <Box maxWidth='100vw' maxHeight='100vh' overflowY='auto' overflowX='hidden'>
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
