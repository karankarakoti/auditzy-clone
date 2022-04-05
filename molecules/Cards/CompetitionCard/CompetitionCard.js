import { Box, Flex, Grid } from 'atoms'
import Image from 'next/image'
import React from 'react'
import Select from 'react-select'

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

export const CompetitionCard = () => {

    const options = [
        { value: 'Jan', label: 'Jan' },
        { value: 'Feb', label: 'Feb' },
        { value: 'Mar', label: 'Mar' }
    ]

    return (
        <Box
            height={{xs: '27rem', md: '29.5rem', lg: '49rem'}}
            maxWidth={{xs: '36rem', md: '33.7rem', lg: '63rem'}}
            borderRadius='1.5rem'
            background='#fff'
            mr={{ xs: '3.4rem', md: '6rem', lg: '16.3rem'}}
            mt={{ xs: '4.5rem', md: '0.7rem', lg: '5.4rem'}}    
            boxShadow='rgb(0 0 0 / 20%) 0px 2px 50px'  
            ml={{ md: '4.5rem', lg: '14.5rem'}}              
        >   
            <Flex
                flexDirection='column'
                ml={{xs: '3rem', md: '2.5rem', lg: '4.3rem'}}
                mt={{xs: '1.4rem', md: '1.5rem', lg: '2.5rem'}}
            >
                <Box
                    fontSize={{xs: '1.5rem', md: '1rem', lg: '1.8rem'}}
                    lineHeight={{xs: '2.2rem', md: '1.5rem', lg: '2.7rem'}}
                    fontWeight='600'
                    color='rgba(73, 80, 87, 1)'
                >
                    Competitor Analysis
                </Box>

                <Box mt={{xs: '2.4rem', md: '1.3rem', lg: '3rem'}}>
                    <Flex>
                        <Box
                            width={{xs: '19.2rem', md: '37rem'}}
                            height={{xs: '8.8rem', md: '22rem'}}
                        >                                       
                            <Box
                                width={{md: '21rem', lg: '37rem'}}
                                height={{md: '9.6rem', lg: '22rem'}}
                                display={{ xs: 'none', md: 'block'}}
                            >
                                <Image
                                    src='/images/landing-competiton-chart.png'
                                    width={370}
                                    height={220}                                            
                                />
                            </Box> 
                            <Box
                                width={{xs: '19.2rem', md: '37rem'}}
                                height={{xs: '8.8rem', md: '22rem'}}                                            
                                display={{ xs: 'block', md: 'none'}}
                            >
                                <Image
                                    src='/images/landing-competiton-chart.png'
                                    width={192}
                                    height={88}                                            
                                />
                            </Box>                                                                                      
                            <Grid
                                gridTemplateColumns={{xs: 'repeat(4, 2.3rem)', md: 'repeat(4, 1.6rem)', lg: 'repeat(4, 2.7rem)'}}
                                gridColumnGap={{xs: '1.4rem', md: '2.4rem', lg: '4.2rem'}}
                                ml={{xs: '2.4rem', md: '3.2rem', lg: '5.9rem'}}
                                top={{xs: '-2rem', md: '0.4rem', lg: '-5.4rem'}}
                            >
                                {
                                    ['Jan', 'Feb', 'Mar', "Apr"].map((item, index)=>(
                                        <Box
                                            fontSize={{xs: '1.2rem', md: '0.7rem', lg: '1.3rem'}}
                                            lineHeight={{md:'1.1rem', lg:'1.9rem'}}
                                            fontWeight='400'
                                            color='#495057'
                                        >{item}</Box>
                                    ))
                                }                                            
                            </Grid>
                        </Box>
                        <Flex
                            flexDirection='column'
                            left={{xs: '-3.6rem', md: '-8rem', lg: '-7.8rem'}}
                            mt={{xs: '-2rem', md: '1rem', lg: '2.8rem'}}
                        >
                            {
                                points2.map((point, index) => (
                                    <Flex
                                        alignItems='center'
                                        mb={{xs: '0.4rem', md: '0', lg: '1rem'}}                                                    
                                        key={index}
                                    >
                                        <Box
                                            width={{xs: '0.7rem', lg: '1.2rem'}}
                                            height={{xs: '0.7rem', lg: '1.2rem'}}
                                            borderRadius='50%'
                                            background={point.color}
                                        />
                                        <Box
                                            ml={{xs: '0.6rem', lg: '1.1rem'}}
                                            fontSize={{xs: '1.2rem', md: '0.7rem', lg: '1.3rem'}}
                                            lineHeight={{xs: '1.8rem', md: '1.9rem'}}
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

                <Box top={{xs: '-0.5rem', md:'-10rem',lg: '-2rem'}}>
                    <Flex                                     
                        justifyContent='flex-end'
                        mr={{xs: '3rem', md: '6.6rem'}}                                    
                    >
                        <Select options={options} defaultValue={'Jan'} />
                    </Flex>
                    <Grid
                        gridTemplateColumns={{xs: 'repeat(5, 3.6rem)', md: 'repeat(5, 1fr)'}}
                        gridColumnGap={{xs: '2rem', md: '0'}}
                        mt={{xs: '1.4rem', md:"1.2rem", lg: '3rem'}}
                        mr={{xs: '3rem', md: '2.7rem', lg: '4.6rem'}}
                    >
                        {
                            ['Performance', 'SEO', 'Best Practices', 'PWA', 'Accessibility'].map((item, index)=>(
                                <Flex
                                    flexDirection='column'
                                    alignItems='center'
                                    key={index}
                                >
                                    <Box
                                        height={{xs: '3.8rem', md:'4.1rem', lg: '7rem'}}
                                        width={{xs: '3.8rem', md:'4.1rem', lg: '7rem'}}
                                    >
                                        <Image
                                            src='/images/landing-progress.svg'
                                            width={100}
                                            height={100}
                                        />
                                    </Box>
                                    <Box
                                        fontSize={{ xs: '1rem', md: '0.7rem' ,lg: '1.3rem'}}
                                        lineHeight={{ xs: '1.5rem', md: '1.9rem'}}
                                        fontWeight='500'
                                        mt={{ xs: '0.6rem', md: '0.6rem', lg: '1.5rem'}}
                                        textAlign='center'
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
    )
}
