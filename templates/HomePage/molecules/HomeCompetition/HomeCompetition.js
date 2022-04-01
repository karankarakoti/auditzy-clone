import { Box, Flex, Grid } from 'atoms'
import Image from 'next/image'
import React from 'react'
import Select from 'react-select'

const points = [
    'Audit your Competitor’s Website',
    'Understand Competitor Performance Score',
    'Competitor Technology Anaylsis',
    'Understand their Core Web Vital Score',
    'Automated Audits to understand competitors Score Metrics by weekly or monthly'
]

const points2 = [
    {
        title: 'Performance',
        color:'#8053ED'
    },
    {
        title: 'SEO',
        color:'#2BB857'
    },
    {
        title: 'Accessibility',
        color:'#C72EE8'
    },
    {
        title: 'PWA',
        color:'#39A5E9'
    }
]

const options = [
    { value: 'Jan', label: 'Jan' },
    { value: 'Feb', label: 'Feb' },
    { value: 'Mar', label: 'Mar' }
  ]
  

export const HomeCompetition = () => {
    return (
        <Box            
            background= 'linear-gradient(239.42deg, #DCEBFF 0.44%, rgba(212, 226, 245, 0) 71.72%)'
            mt='16rem'
        >
            <Box
                pt='11.6rem'
                pl='15.8rem'
            >
                <Flex
                    //justifyContent='space-between'
                    pb={'17.4rem'}
                >
                    <Flex
                        flexDirection='column'
                    >
                        <Box
                            maxWidth='40rem'
                            fontSize='3.5rem'
                            lineHeight='5.2rem'
                            color='rgba(85, 110, 230, 1)'
                            fontWeight='600'
                        >
                            Know your competitors better
                        </Box>
                        <Box
                            maxWidth='40rem'
                            fontSize='1.4rem'
                            lineHeight='2.2rem'
                            color='#495057'
                            fontWeight='400'
                            mt='2.2rem'
                        >
                            Try it now and get insights and data that can be used to create a better user experience for website visitors.Try it now and get insights and data that
                        </Box>
                        <Box
                            mt='5.2rem'
                        >
                            <Flex
                                flexDirection='column'
                            >
                                {
                                    points.map((point, index) => (
                                        <Flex
                                            alignItems='center'
                                            py='1.2rem'
                                        >
                                            <Flex
                                                height='1.7rem'
                                                width='1.7rem'
                                                borderRadius='0.4rem'
                                                background='rgba(90, 111, 240, 0.2)'     
                                                justifyContent='center'                                                                                           
                                            >
                                                <Box
                                                    width='0.9rem'
                                                    height='0.7rem'  
                                                    mt='0.3rem'                                                     
                                                >
                                                    <Image
                                                        src='/images/check-mark-blue.svg'                                                    
                                                        height='100%'
                                                        width='100%'                                                        
                                                    />
                                                </Box>
                                            </Flex>
                                            <Box 
                                                ml='2rem'
                                                fontSize='1.3rem'
                                                lineHeight='1.9rem'
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
                            height='4.2rem'
                            width='19rem'                                                        
                            borderRadius='0.4rem'
                            background='#34C38F'
                            boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'
                            fontSize='1.3rem'                            
                            color='#fff'
                            fontWeight='500'
                            mt='5.3rem'
                            alignItems='center'
                            justifyContent='center'
                        >
                            Try Now for Free
                        </Flex>
                    </Flex>

                    <Box
                        height='49rem'
                        width='63rem'
                        borderRadius='1.5rem'
                        background='#fff'
                        mr='16.3rem'
                        mt='5.4rem'                        
                    >   
                        <Flex
                            flexDirection='column'
                            ml='4.3rem'
                            mt='2.5rem'
                        >
                            <Box
                                fontSize='1.8rem'
                                lineHeight='2.7rem'
                                fontWeight='600'
                                color='rgba(73, 80, 87, 1)'
                            >
                                Competitor Analysis
                            </Box>

                            <Box mt='3rem'>
                                <Flex>
                                    <Box
                                        width='37rem'
                                        height='22rem'
                                    >                                        
                                        <Image
                                            src='/images/landing-competiton-chart.png'
                                            width={370}
                                            height={220}

                                        />
                                        <Grid
                                            gridTemplateColumns='2.7rem 2.7rem 2.7rem 2.7rem'
                                            gridColumnGap='4.2rem'
                                            ml='5.9rem'
                                            top='-5.4rem'
                                        >
                                            {
                                                ['Jan', 'Feb', 'Mar', "Apr"].map((item, index)=>(
                                                    <Box
                                                        fontSize='1.3rem'
                                                        lineHeight='1.9rem'
                                                        fontWeight='400'
                                                        color='#495057'
                                                    >{item}</Box>
                                                ))
                                            }                                            
                                        </Grid>
                                    </Box>
                                    <Flex
                                        flexDirection='column'
                                        left='-7.8rem'
                                        mt='2.8rem'
                                    >
                                        {
                                            points2.map((point, index) => (
                                                <Flex
                                                    alignItems='center'
                                                    mb='1rem'                                                    
                                                >
                                                    <Box
                                                        width='1.2rem'
                                                        height='1.2rem'
                                                        borderRadius='50%'
                                                        background={point.color}
                                                    />
                                                    <Box
                                                        ml='1.1rem'
                                                        fontSize='1.3rem'
                                                        lineHeight='1.9rem'
                                                        fontWeight='400'
                                                    >
                                                        {point.title}
                                                    </Box>
                                                </Flex>
                                            ))
                                        }                                        
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box top='-2rem'>
                                <Flex                                     
                                    justifyContent='flex-end'
                                    mr='6.6rem'                                    
                                >
                                    <Select options={options} defaultValue={'Jan'} />
                                </Flex>
                                <Grid
                                    gridTemplateColumns='repeat(5, 1fr)'
                                    //gridColumnGap='3.9rem'
                                    mt='3rem'
                                    mr='4.6rem'
                                >
                                    {
                                        ['Performance', 'SEO', 'Best Practices', 'PWA', 'Accessibility'].map((item, index)=>(
                                            <Flex
                                                flexDirection='column'
                                                alignItems='center'
                                                key={index}
                                            >
                                                <Box
                                                    height='7rem'
                                                    width='7rem'
                                                >
                                                    <Image
                                                        src='/images/landing-progress.svg'
                                                        width={'100%'}
                                                        height={'100%'}
                                                    />
                                                </Box>
                                                <Box
                                                    fontSize='1.3rem'
                                                    lineHeight='1.9rem'
                                                    fontWeight='500'
                                                    mt='1.5rem'                                                    
                                                >
                                                    {item}
                                                </Box>
                                            </Flex>
                                        ))
                                    }
                                                                        
                                </Grid>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>                
            </Box>     
            <Box
                height='12rem'
                width='12rem'
                borderRadius='50%'
                position='absolute'
                background='rgba(157, 58, 223, 1)'
                right='2.5rem'
                top='4.2rem'
                zIndex='0'
            />
            <Box
                height='29.5rem'
                width='29.5rem'
                borderRadius='50%'
                position='absolute'
                background='rgba(241, 180, 76, 1)'
                right='57.7rem'
                bottom='5.2rem'
                zIndex='-1'
            />
        </Box>
    )
}
