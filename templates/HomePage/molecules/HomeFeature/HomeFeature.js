import { Box, Text, Grid } from 'atoms'
import React from 'react'
import Image from 'next/image';
import { LandingFeatureCard } from 'molecules';

const features = [
    'AI based Audit Insights',
    'Previous Audit Data Records',
    'Previous Audit Data Records',
    'Easy to use Platform',
    'Faster team Collaboration',
    'Competitor Audit & Analysis',
    'Auto-generated Audit',
    'Google Lighthouse insights',
    'Personalized Dashboards',
    'Integration with Hosting Providers',
    'Pay as you go Pricing',
    'Real-time Emails',
    'Technology Trend Insights',
    'GDPR Compliance',
    'API Integration in your platform'
]

export const HomeFeature = () => {
    return (
        <Box
            mt='13.8rem'
            mb='6rem'
        >
            <Box
                position='absolute'                
                height='34rem'
                width='34rem'  
                backgroundImage='url(/images/landing-pill.svg)' 
                backgroundRepeat='no-repeat'
                left='0rem'
                top='3rem'
                                             
            />                

            <Box
                maxWidth='107rem'                                                
                mx='auto'
            >
                <Text
                    as='h3'
                    fontSize='2rem'
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                >
                    Our Features
                </Text>
                <Text
                    mt='1rem'
                    as='h2'
                    fontSize='4rem'
                    color='rgb(73, 80, 87)'
                    fontWeight='600'
                >
                    How will this benefit you?
                </Text>
                <Text
                    maxWidth='54rem'                    
                    as='p'
                    fontSize='1.6rem'
                    color='rgb(128, 128, 128)'
                    fontWeight='400'
                >
                    Try it now and get insights and data that can be used to create a better user experience for website visitors.
                </Text>   
                <Box      
                    top='2.9rem'              
                    left='47rem'
                    height='6.3rem'
                    width='6.3rem'
                    zIndex='-1'
                    position='absolute'
                    borderRadius='50%'
                    background='rgba(241, 180, 76, 1)'
                />
                <Grid
                    gridTemplateColumns='repeat(5, 19rem)'
                    gridColumnGap='3rem'
                    gridRowGap='5rem'
                    mt='6rem'
                >
                    {
                        features.map((item, index)=>(
                            <LandingFeatureCard
                                key={index}
                                name={item}
                            />
                        ))
                    }                    
                </Grid>
            </Box>            
        </Box>
    )
}
