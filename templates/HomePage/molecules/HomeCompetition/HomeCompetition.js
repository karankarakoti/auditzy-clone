import { Box, Flex } from 'atoms'
import { CompetitionCard } from 'molecules'
import Image from 'next/image'
import React from 'react'

const points = [
    'Audit your Competitor’s Website',
    'Understand Competitor Performance Score',
    'Competitor Technology Anaylsis',
    'Understand their Core Web Vital Score',
    'Automated Audits to understand competitors Score Metrics by weekly or monthly'
] 

export const HomeCompetition = () => {
    return (
        <Box            
            background= 'linear-gradient(239.42deg, #DCEBFF 0.44%, rgba(212, 226, 245, 0) 71.72%)'
            mt={{xs: '3.9rem', md: '16rem'}}
        >
            <Box
                pt={{xs: '5rem', md:'11.6rem'}}
                pl={{xs: '3.4rem', md: '15.8rem'}}            
            >
                <Flex
                    //justifyContent='space-between'
                    flexDirection={{xs: 'column', md: 'row'}}
                    pb={{xs: '6.8rem', md: '17.4rem'}}
                >
                    <Flex
                        flexDirection='column'
                    >
                        <Box
                            maxWidth={{xs: '31rem', md: '40rem'}}
                            fontSize={{xs: '2rem', md:'3.5rem'}}
                            lineHeight={{xs: '3rem', md: '5.2rem'}}
                            color='rgba(85, 110, 230, 1)'
                            fontWeight='600'
                        >
                            Know your competitors better
                        </Box>
                        <Box
                            maxWidth={{xs: '35.7rem', md: '40rem'}}
                            fontSize={{xs: '1.3rem', md: '1.4rem'}}
                            lineHeight={{xs: '2rem', md: '2.2rem'}}
                            color='#495057'
                            fontWeight='400'
                            mt={{xs: '1.8rem', md: '2.2rem'}}
                        >
                            Try it now and get insights and data that can be used to create a better user experience for website visitors.Try it now and get insights and data that
                        </Box>
                        <Box
                            mt={{xs: '2.9rem', md: '5.2rem'}}
                        >
                            <Flex
                                flexDirection='column'
                            >
                                {
                                    points.map((point, index) => (
                                        <Flex
                                            alignItems='center'
                                            justifyContent='start'
                                            py={'1.2rem'}
                                        >
                                            <Flex
                                                height={{xs: '1.5rem', md: '1.7rem'}}
                                                width={{xs: '1.5rem', md: '1.7rem'}}
                                                borderRadius={{xs: '0.2rem', md: '0.4rem'}}
                                                background='rgba(90, 111, 240, 0.2)'     
                                                justifyContent='center'                                                                                           
                                            >
                                                <Box
                                                    width={{xs: '0.78rem', md: '0.9rem'}}
                                                    height={{xs: '0.6rem', md: '0.7rem'}}
                                                    mt={{xs: '0.1rem', md: '0.3rem'}}                                                     
                                                >
                                                    <Image
                                                        src='/images/check-mark-blue.svg'                                                    
                                                        height={100}
                                                        width={100}                                                        
                                                    />
                                                </Box>
                                            </Flex>
                                            <Box 
                                                ml={{xs: '1.3rem', md: '2rem'}}
                                                maxWidth={{xs: '31.8rem', md: '40rem'}}
                                                fontSize={{xs: '1.2rem', md: '1.3rem'}}
                                                lineHeight={{xs: '1.8rem', md: '1.9rem'}}
                                                fontWeight='500'
                                                color='rgba(73, 80, 87, 1)'
                                            >
                                                {point}
                                            </Box>
                                        </Flex>
                                    ))
                                }                                
                            </Flex>
                        </Box>
                        <Flex
                            height={{xs: '3.6rem', md: '4.2rem'}}
                            maxWidth={{xs: '36rem', md: '19rem'}}                                                        
                            borderRadius='0.4rem'
                            background='#34C38F'
                            boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'
                            fontSize={{xs: '1.2rem', md: '1.3rem'}}                            
                            color='#fff'
                            fontWeight='500'
                            mt={{xs: '4.1rem', md: '5.3rem'}}
                            alignItems='center'
                            justifyContent='center'  
                            mr={{xs: '3.4rem', md: '0'}}                          
                        >
                            Try Now for Free
                        </Flex>
                    </Flex>

                    <CompetitionCard/>
                    
                </Flex>                
            </Box>     
            <Box
                height={{xs: '5.1rem', md: '12rem'}}
                width={{xs: '5.1rem', md: '12rem'}}
                borderRadius='50%'
                position='absolute'
                background='rgba(157, 58, 223, 1)'
                right={{xs:'1.2rem', md: '2.5rem'}}
                top={{xs: '51rem', md:'4.2rem'}}
                zIndex={{xs: '-1', md: '0'}}
            />
            <Box
                height={{xs: '9.9rem', md: '29.5rem'}}
                width={{xs: '9.9rem', md: '29.5rem'}}
                borderRadius='50%'
                position='absolute'
                background='rgba(241, 180, 76, 1)'
                right={{xs: '31.4rem', md: '57.7rem'}}                
                bottom={{xs: '1.5rem', md: '5.2rem'}}
                zIndex={{xs: '-1', md: '-1'}}
            />
        </Box>
    )
}
