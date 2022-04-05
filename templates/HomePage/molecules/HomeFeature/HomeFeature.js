import { Box, Text, Grid } from 'atoms'
import React from 'react'
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
            mt={{xs: '11.3rem', md:'10rem', lg: '13.8rem'}}
            mb='6rem'
        >
            <Box
                position='absolute'                
                height={{md: '19.4rem', lg: '34rem'}}
                width={{md: '19.4rem', lg: '34rem'}}  
                backgroundImage='url(/images/landing-pill.svg)' 
                backgroundRepeat='no-repeat'
                left='0rem'
                top='3rem'    
                display={{xs: 'none', lg: 'block'}}                                         
            /> 

            <Box
                position='absolute'                
                height={{xs: '15.6rem', md: '19.4rem'}}
                width={{xs: '15.6rem', md: '19.4rem' }} 
                backgroundImage='url(/images/pill-sm.png)' 
                backgroundRepeat='no-repeat'
                left='0rem'
                top={{xs: '-6.5rem', md: '1.5rem'}}    
                display={{xs: 'block', lg: 'none'}}                                         
            />                

            <Box
                maxWidth={{xs: '34rem', md: '64rem', lg: '107rem'}}                                                
                mx='auto'
            >
                <Text
                    as='h3'
                    fontSize={{xs: '1.5rem', md: '1.8rem', lg: '2rem'}}
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                >
                    Our Features
                </Text>
                <Text
                    mt={{xs: '0.8rem', md: '0.8rem', lg: '1rem'}}
                    as='h2'
                    fontSize={{xs: '2rem', md: '2.8rem', lg: '4rem'}}
                    color='rgb(73, 80, 87)'
                    fontWeight='600'
                >
                    How will this benefit you?
                </Text>
                <Text
                    mt={{xs: '1.2rem', md: 0}}
                    maxWidth={{xs: '34rem', md: '38.1rem', lg: '54rem'}}                    
                    as='p'
                    fontSize={{ xs: '1.3rem', md: '1.3rem', lg: '1.6rem'}}
                    color='rgb(128, 128, 128)'
                    fontWeight='400'
                >
                    Try it now and get insights and data that can be used to create a better user experience for website visitors.
                </Text>   
                <Box      
                    top='2.9rem'              
                    left={{xs: '23.3rem', md: '33rem', lg: '47rem'}}
                    height={{xs: '2.9rem', md: '4.4rem', lg: '6.3rem'}}
                    width={{xs: '2.9rem', md: '4.4rem', lg: '6.3rem'}}
                    zIndex='-1'
                    position='absolute'
                    borderRadius='50%'
                    background='rgba(241, 180, 76, 1)'
                />
                <Grid
                    gridTemplateColumns={{ xs: 'repeat(3, 10.3rem)', md: 'repeat(5, 10.7rem)', lg: 'repeat(5, 19rem)'}}
                    gridColumnGap={{xs: '1.7rem', lg: '3rem'}}
                    gridRowGap={{ xs: '2.4rem', md: '2.7rem', lg: '5rem'}}
                    mt={{xs: '2.6rem', md: '7.5rem', lg: '6rem'}}                    
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
