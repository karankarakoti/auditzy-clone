import React from 'react'
import { Box, Flex, Grid, Text } from "atoms";
import Image from 'next/image';
import { LandingServiceCard } from 'molecules';

export const HomeService = () => {
    return (
        <Box
            pt='5rem'
        >
            <Box
                position='absolute'
                left='-6rem'
                height='17rem'
                width='16rem'
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'
            />
            <Box
                maxWidth='107rem'                
                left='16rem'
            >
                <Text
                    as='h3'
                    fontSize='2rem'
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                >
                    Our Services 
                </Text>
                <Text
                    mt='1rem'
                    as='h2'
                    fontSize='4rem'
                    color='rgb(73, 80, 87)'
                    fontWeight='600'
                >
                    Auditzy is made just for you
                </Text>
                <Text
                    maxWidth='54rem'                    
                    as='p'
                    fontSize='1.6rem'
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

            <Box
                width='112rem'
                height='47rem'
                borderRadius='1.5rem'
                backgroundImage='url(/images/landing-service-bg.png)'
                mx='auto'
                mt='12rem'
            >
                <Box
                    ml='8rem'
                >
                    <Text
                        as='h2'
                        fontSize='4.2rem'
                        pt='7.6rem'
                        color='rgb(255, 255, 255)'
                        fontWeight='bold'
                        lineHeight='6.3rem'
                        mb='0'
                        maxWidth='79rem'
                        zIndex='2'
                    >Only a few clicks to understand your website’s performance.</Text>
                    <Flex
                        alignItems='start'                        
                    >
                        <Flex
                            flexDirection='column'
                        >
                            <Box>
                                <Text
                                    as='p'
                                    fontSize='1.6rem'
                                    maxWidth='53rem'
                                    color='rgb(255, 255, 255, 0.5)'                                
                                    lineHeight='2.2rem'
                                    mt='1.4rem'                                    
                                >If your website is the primary point of your business then with Auditzy, you can easiliy understand your website’s performance.</Text>
                            </Box>
                            <Box
                                background='rgba(51, 207, 150, 1)'
                                width='19rem'
                                height='4.2rem'
                                borderRadius='0.4rem'
                                boxShadow='rgba(0, 0, 0, 0.2)'
                                textAlign='center'
                                mt='4rem'
                            >
                                <Flex                               
                                    maxWidth='13.2rem'
                                    height='3.8rem'
                                    fontSize='1.3rem'
                                    alignItems='center'
                                    justifyContent='center'
                                    mx='auto'
                                    color='#fff'                                
                                >
                                    Start Auditing
                                </Flex>
                            </Box>
                            <Flex
                                flexDirection='column'
                                alignItems='start'
                                mt='1.7rem'
                            >
                                <Flex
                                    flexDirection='row'
                                    alignItems='center'
                                >
                                    <Image
                                        src='/images/check-mark.svg'                                    
                                        width={8.4}
                                        height={6.4}
                                    />
                                    <Text
                                        as='span'
                                        ml='1rem'
                                        fontSize='1.3rem'
                                        color='rgb(255, 255, 255)'
                                        fontWeight='500'
                                    >Its FREE</Text>
                                </Flex>
                                <Flex
                                    flexDirection='row'
                                    alignItems='center'
                                    mt='1.1rem'
                                >
                                    <Image
                                        src='/images/check-mark.svg'                                    
                                        width={8.4}
                                        height={6.4}
                                    />
                                    <Text
                                        as='span'
                                        ml='1rem'
                                        fontSize='1.3rem'
                                        color='rgb(255, 255, 255)'
                                        fontWeight='500'                                    
                                    >no credit card required</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex>
                            <Box
                                ml='15rem'
                                width='29rem'
                                height='29rem'
                                top='-8rem'
                                left='-3rem'                                
                            >   
                                <Image
                                    src='/images/landing-service-img.png'
                                    width={290}
                                    height={290}   
                                    zIndex='0'
                                />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>                
            </Box>
        </Box>
    )
}
