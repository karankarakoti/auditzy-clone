import React from 'react'
import { Box, Flex, Grid, Text } from "atoms";
import Image from 'next/image';
import { LandingServiceCard, ServiceCard } from 'molecules';

const mobiledata = [
    {
        title:'Commerce Company',
        mt:'1.3rem'
    },
    {
        title:'Freelancer',
        mt:'2.1rem'
    },
    {
        title:'Start-up',
        mt:'2.1rem'
    },
    {
        title:'Brand Manager',
        mt:'1.3rem'
    },
    {
        title:'Brand Manager',
        mt:'1.3rem'
    },
    {
        title:'Developer',
        mt:'2.1rem'
    },
    {
        title:'B2B/D2C Company',
        mt:'1.3rem'
    },
    {
        title:'Corporate',
        mt:'2.1rem'
    },
    {
        title:'Marketing Agency',
        mt:'1.3rem'
    },
    {
        title:'QA Professional',
        mt:'1.3rem'
    },
]

export const HomeService = () => {
    return (
        <Box
            pt={{ xs:'3.6rem', md: '5rem'}}
        >
            <Box
                position='absolute'
                left={{md: '-6rem'}}
                height={{xs: '10.3rem', md: '17rem'}}
                width={{xs: '10.3rem', md: '16rem'}}
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'                 
                right={{xs: '-5.6rem', md: '0'}}               
            />
            <Box
                maxWidth={{xs: '37.1rem', md: '107rem'}}                
                left={{ xs: '2.6rem', md: '16rem'}}
            >
                <Text
                    as='h3'
                    fontSize={{ xs: '1.5rem', md: '2rem'}}
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                >
                    Our Services 
                </Text>
                <Text
                    mt={{ xs: '0.8rem', md: '1rem'}}
                    as='h2'
                    fontSize={{ xs: '2rem', md: '4rem'}}
                    color='rgb(73, 80, 87)'
                    fontWeight='600'
                >
                    Auditzy is made just for you
                </Text>
                <Text
                    maxWidth={{xs: '37rem', md:'54rem'}}                    
                    as='p'
                    fontSize={{xs: '1.3rem', md: '1.6rem'}}
                    color='rgb(128, 128, 128)'
                    fontWeight='400'
                >
                    Now you don’t need to scratch your head around to understand your website’s performance. 
                </Text>                
            </Box>

            <Box
                maxWidth='90rem'
                mx='auto'
                mt='13rem'
                mb='8rem'
                display={{ xs: 'none', md: 'block'}}
            >
                <Flex
                    width='16.5rem'
                    height='16.5rem'
                    top='-5rem'
                    left='37rem'
                    mx='auto'
                    background='rgb(255, 255, 255)'
                    position='absolute'
                    zIndex='2'
                    alignItems='center'
                    justifyContent='center'
                    boxShadow='rgb(0 0 0 / 20%) 0px 4px 20px'
                    borderRadius='50%'
                >
                    <Box
                        height='8rem'
                        width='8.5rem'
                    >
                        <Image
                            src='/images/landing-service-icon.svg'
                            alt='icon-service-1'
                            width='100%'
                            height='100%'
                        />
                    </Box>
                </Flex>
                <Flex
                    width='90rem'
                    height='52rem'
                    zIndex='1'
                    borderLeft='1px dashed rgb(85, 110, 230)'
                    borderRight='1px dashed rgb(85, 110, 230)'
                    borderTop='1px dashed rgb(85, 110, 230)'
                    justifyContent='center'                        
                >
                    <Flex
                        width='55rem'
                        height='32rem'
                        mt='4.6rem'
                        borderLeft='1px dashed rgb(85, 110, 230)'
                        borderRight='1px dashed rgb(85, 110, 230)'
                        borderTop='1px dashed rgb(85, 110, 230)'                            
                        justifyContent='center'
                    >
                        <Flex
                            width='28rem'
                            height='12rem'
                            mt='4.6rem'
                            borderLeft='1px dashed rgb(85, 110, 230)'
                            borderRight='1px dashed rgb(85, 110, 230)'
                            borderTop='1px dashed rgb(85, 110, 230)'                                
                        >

                        </Flex>
                    </Flex>
                </Flex>
                <Grid
                    gridTemplateColumns='19rem 19rem'
                    gridColumnGap='3rem'
                    left='24rem'
                    top='19rem'
                    position='absolute'
                    zIndex='2'                        
                >
                    <LandingServiceCard
                        name='Start-Up'
                        hasI
                        mt='2.7rem'
                    />
                    <LandingServiceCard
                        name='Corporate'
                        mt='2.9rem'                            
                    />
                </Grid>
                <Grid
                    gridTemplateColumns='19rem 19rem 19rem'
                    gridColumnGap='3rem'
                    left='13.5rem'
                    top='33rem'
                    position='absolute'
                    zIndex='2'                        
                >                        
                    <LandingServiceCard
                        name='B2B / D2C Company' 
                        mt='1.9rem'                           
                    />
                    <LandingServiceCard
                        name='Marketing Agency' 
                        mt='1.9rem'                                                      
                    />
                    <LandingServiceCard
                        name='Developer'
                        mt='2.9rem'                                                       
                    />
                </Grid>
                <Grid
                    gridTemplateColumns='19rem 19rem 19rem 19rem 19rem'
                    gridColumnGap='3rem'
                    left='-8.5rem'
                    top='47rem'
                    position='absolute'
                    zIndex='2'                        
                >                        
                    <LandingServiceCard
                        name='QA Professional' 
                        mt='1.9rem'                                                      
                    />
                    <LandingServiceCard
                        name='Brand Manager'  
                        mt='1.9rem'                                                     
                    />
                    <LandingServiceCard
                        name='Brand Manager'
                        mt='1.9rem'                                                       
                    />
                    <LandingServiceCard
                        name='Freelancer'
                        mt='2.8rem'                           
                    />
                    <LandingServiceCard
                        name='Business Owner'
                        mt='1.9rem'                           
                    />
                </Grid>
            </Box>

            <Box mt='3rem' display={{ md: 'none'}}>
                <Grid
                    gridTemplateColumns='16rem 16rem'
                    gridGap='2.4rem 2rem' 
                    alignItems='center' 
                    justifyContent='center'  
                    alignSelf='center'                                      
                >
                    {
                        mobiledata.map((item, index) => (
                            <Box width='16rem' height='6.4rem' boxShadow='inset -16.1161px -16.1161px 31.1573px rgba(29, 159, 112, 0.15)' borderRadius='0.6rem' key={index}>                                
                                <Grid mt={item.mt} gridTemplateColumns='2.3rem 8.5rem' gridColumnGap='2rem' alignItems='center' justifyContent='center' alignSelf='center' >
                                    <Box width='2.3rem' height='1.9rem'>
                                        <Image
                                            src='/images/landing-service-subicon.svg'
                                            alt='icon-1'
                                            width={100}
                                            height={100}
                                        />
                                    </Box>
                                    <Box
                                        fontSize='1.3rem'
                                        color='rgba(73, 80, 87, 1)'
                                        fontWeight='500'
                                    >
                                        {item.title}
                                    </Box>
                                </Grid>                                
                            </Box>
                        ))
                    }                    
                    
                </Grid>
            </Box>
                
            <ServiceCard/>
        </Box>
    )
}
