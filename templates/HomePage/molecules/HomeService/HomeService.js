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
            pt={{ xs:'3.6rem', md: '1rem', lg: '5rem'}}
        >
            <Box
                position='absolute'
                left={{md: '-5.8rem', lg: '-6rem'}}
                height={{xs: '10.3rem', md: '10.3rem', lg: '17rem'}}
                width={{xs: '10.3rem', md: '10.3rem', lg: '16rem'}}
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'                 
                right={{xs: '-5.6rem', md: '0'}}               
            />
            <Box
                maxWidth={{xs: '37.1rem', md: '67rem', lg: '107rem'}}                
                left={{ xs: '2.6rem', md: '6rem', lg: '16rem'}}
            >
                <Text
                    as='h3'
                    fontSize={{ xs: '1.5rem', md: '1.8rem', lg: '2rem'}}
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                >
                    Our Services 
                </Text>
                <Text
                    mt={{ xs: '0.8rem', md: '1.1rem', lg: '1rem'}}
                    as='h2'
                    fontSize={{ xs: '2rem', md: '2.8rem', lg: '4rem'}}
                    color='rgb(73, 80, 87)'
                    fontWeight='600'
                >
                    Auditzy is made just for you
                </Text>
                <Text
                    maxWidth={{xs: '37rem', md: '39.4rem', lg:'54rem'}}                    
                    as='p'
                    fontSize={{xs: '1.3rem', lg: '1.6rem'}}
                    color='rgb(128, 128, 128)'
                    fontWeight='400'
                >
                    Now you don’t need to scratch your head around to understand your website’s performance. 
                </Text>                
            </Box>

            <Box
                maxWidth={{md:'64rem', lg:'90rem'}}
                mx={{lg: 'auto'}}
                ml={{md: '10.8rem', lg: 'auto'}}
                mt={{md:'6.3rem', lg: '13rem'}}
                mb={{md:'7.4rem', lg: '8rem'}}
                display={{ xs: 'none', md: 'block'}}
            >
                <Flex
                    width={{md:'9.8rem', lg: '16.5rem'}}
                    height={{md:'9.8rem', lg: '16.5rem'}}
                    top={{md: '-3rem', lg:'-5rem'}}
                    left={{md: '23rem', lg:'37rem'}}
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
                        height={{md: '4.2rem', lg: '8rem'}}
                        width={{md: '4.2rem', lg: '8rem'}}
                    >
                        <Image
                            src='/images/landing-service-icon.svg'
                            alt='icon-service-1'
                            width={100}
                            height={100}
                        />
                    </Box>
                </Flex>

                <Flex
                    width={{md:'55.6rem', lg: '90rem'}}
                    height={{md: '31.2rem', lg: '52rem'}}
                    zIndex='1'
                    borderLeft='1px dashed rgb(85, 110, 230)'
                    borderRight='1px dashed rgb(85, 110, 230)'
                    borderTop='1px dashed rgb(85, 110, 230)'
                    justifyContent='center'                        
                >
                    <Flex
                        width={{md:'33.9rem', lg: '55rem'}}
                        height={{md:'19.1rem', lg: '32rem'}}
                        mt={{md:'2.8rem', lg: '4.6rem'}}
                        borderLeft='1px dashed rgb(85, 110, 230)'
                        borderRight='1px dashed rgb(85, 110, 230)'
                        borderTop='1px dashed rgb(85, 110, 230)'                            
                        justifyContent='center'
                    >
                        <Flex
                            width={{md:'16.9rem', lg: '28rem'}}
                            height={{md: '7rem', lg: '12rem'}}
                            mt={{md:'2.8rem', lg: '4.6rem'}}
                            borderLeft='1px dashed rgb(85, 110, 230)'
                            borderRight='1px dashed rgb(85, 110, 230)'
                            borderTop='1px dashed rgb(85, 110, 230)'                                
                        >

                        </Flex>
                    </Flex>
                </Flex>

                <Grid
                    gridTemplateColumns={{md: 'repeat(2, 12.6rem)', lg:'repeat(2, 19rem)'}}
                    gridColumnGap={{md:'1rem', lg:'3rem'}}
                    left={{md: '14.7rem', lg: '24rem'}}
                    top={{md: '11.4rem', lg: '19rem'}}
                    position='absolute'
                    zIndex='2'                        
                >
                    <LandingServiceCard
                        name='Start-Up'
                        hasI
                        mt='2.7rem'
                        mti='1.4rem'
                    />
                    <LandingServiceCard
                        name='Corporate'
                        mt='2.9rem'  
                        mti='1.4rem'                          
                    />
                </Grid>
                <Grid
                    gridTemplateColumns={{md: 'repeat(3, 12.6rem)', lg:'repeat(3, 19rem)'}}
                    gridColumnGap={{md:'0.8rem', lg:'3rem'}}
                    left={{md: '8.1rem', lg: '13.5rem'}}
                    top={{md:'19.2rem', lg: '33rem'}}
                    position='absolute'
                    zIndex='2'                        
                >                        
                    <LandingServiceCard
                        name='B2B / D2C Company' 
                        mt='1.9rem'   
                        mti='0.6rem'                        
                    />
                    <LandingServiceCard
                        name='Marketing Agency' 
                        mt='1.9rem'   
                        mti='0.6rem'                                                   
                    />
                    <LandingServiceCard
                        name='Developer'
                        mt='2.9rem' 
                        mti='1.4rem'                                                      
                    />
                </Grid>
                <Grid
                    gridTemplateColumns={{md: 'repeat(5, 12.6rem)', lg:'repeat(5, 19rem)'}}
                    gridColumnGap={{md:'0.8rem', lg:'3rem'}}
                    left={{md: '-5.6rem', lg: '-8.5rem'}}
                    top={{md:'27.5rem', lg: '47rem'}}
                    position='absolute'
                    zIndex='2'                        
                >                        
                    <LandingServiceCard
                        name='QA Professional' 
                        mt='1.9rem'  
                        mti='0.6rem'                                                    
                    />
                    <LandingServiceCard
                        name='Brand Manager'  
                        mt='1.9rem'       
                        mti='0.6rem'                                              
                    />
                    <LandingServiceCard
                        name='Brand Manager'
                        mt='1.9rem'     
                        mti='0.6rem'                                                  
                    />
                    <LandingServiceCard
                        name='Freelancer'
                        mt='2.8rem' 
                        mti='1.4rem'                          
                    />
                    <LandingServiceCard
                        name='Business Owner'
                        mt='1.9rem'   
                        mti='0.6rem'                        
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
