import { Box, Flex, Grid, Text } from 'atoms'
import { WorkflowCard } from 'molecules'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        title: 'Add and Audit Portfolio',
        oi:'Try it now and get insights and data that can be used to create a better user experience for website visitors.'
    },
    {
        title: 'Add and Audit Competitor',
        oi:'Try it now and get insights and data that can be used to create a better user experience for website visitors.'
    },
    {
        title: 'Compare Portfolio',
        oi:'Try it now and get insights and data that can be used to create a better user experience for website visitors.'
    }
]

export const HomeWorkflow = () => {
    return (
        <Box pt={{xs: '3.6rem', md: '8rem'}}>
            <Box
                fontSize={{xs:'1.5rem', md: '2rem'}}
                lineHeight={{xs: '2.2rem', md: '3rem'}}
                color='#556EE6'             
                textAlign='center'
                fontWeight='400'
            >
                Our Workflow
            </Box>
            <Box
                fontSize={{xs: '2rem', md: '4rem'}}
                lineHeight={{xs:'2.7rem', md: '6rem'}}
                fontWeight='600'
                color='#495057'             
                textAlign='center'
                mt={{xs: '1.5rem', md: '1.6rem'}}
                maxWidth={{xs: '26.6rem', md: '82.4rem'}}
                mx='auto'
            >
                Simple and clear steps for valuable data
            </Box>
            <Box
                fontSize={{xs:'1.3rem', md: '1.4rem'}}
                lineHeight={{xs:'1.9rem', md: '2.2rem'}}
                fontWeight='400'
                color='#495057'             
                textAlign='center'
                mt='1.6rem'
                maxWidth={{xs: '25.5rem', md: '46rem'}}
                mx='auto'
            >
                Try it now and get insights and data that can be used to create a better user experience for website visitors.
            </Box>
            <Box mt='9.9rem' maxWidth='75rem' mx='auto' display={{xs:'none', md: 'block'}}>
                <Grid
                    gridTemplateColumns='repeat(3, 6.3rem)'
                    gridColumnGap='29rem'
                    mb='3.5rem'
                >
                    {
                        [1,2,3].map(item=>(
                            <Box    
                                width='6.3rem'
                                height='6.3rem'
                                background='rgb(29, 209, 227)'
                                borderRadius='50%'
                                key={item}
                            >
                                <Box
                                    fontSize='3rem'
                                    mt='1rem'
                                    color='#fff'
                                    fontWeight='600'
                                    textAlign='center'
                                >
                                    {item}
                                </Box>
                            </Box>
                        ))
                    }                    
                </Grid>
                <Box
                    position='absolute'
                    top='40%'
                    left='1rem'
                    width='75rem'
                    height='0.2rem'
                    zIndex='-1'
                >
                    <Image
                        src='/images/landing-workflow-dotted-line.svg'
                        width={750}
                        height={2}
                    />
                </Box>
                <Grid
                    gridColumnGap='35rem'
                    gridTemplateColumns='1.9rem 1.9rem'
                    position='absolute'
                    zIndex='3'
                    top='45%'
                    left='25%'
                >
                    <Box
                        width='1.9rem'
                        height='1.3rem'
                    >
                        <Image
                            src='/images/arrow-right-green.svg'
                            width={19}
                            height={13}
                        />
                    </Box>
                    <Box
                        width='1.9rem'
                        height='1.3rem'
                    >
                        <Image
                            src='/images/arrow-right-green.svg'
                            width={19}
                            height={13}
                        />
                    </Box>
                </Grid>
            </Box>

            <Flex
                alignItems='center'
                justifyContent='center'
                mt={{xs: '4.7rem', md: '3.5rem'}}
            >
                <Grid
                    gridTemplateColumns={{xs: '1fr', md: 'repeat(3, 34rem)'}}
                    gridColumnGap='5.2rem'                
                    gridRowGap='5.4rem'                
                >
                    {
                        data.map((item, index)=>(
                            <Box 
                                width={{xs:'32.7rem', md: '34rem'}}
                                height={{xs: '25rem', md: '45rem'}}
                                background='#FFFFFF'
                                boxShadow='0px 2px 20px rgba(0, 0, 0, 0.15)'
                                borderRadius={{xs: '0.7rem', md: '1.5rem'}}
                            >
                                <Box
                                    display={{xs:'block', md: 'none'}}
                                    position='absolute'
                                    width={'4.6rem'}
                                    height={'4.6rem'}
                                    top='-2.5rem'
                                    left='2.1rem'
                                    background='#1DD1E3'
                                    borderRadius='50%'
                                    textAlign='center'
                                >
                                    <Text
                                        textAlign='center'
                                        mt='0.65rem'
                                        fontSize='2.2rem'
                                        lineHeight='3.3rem'
                                        color='#fff'
                                        fontWeight='600'                                        
                                    >
                                        {index+1}
                                    </Text>
                                </Box>
                                <Flex
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Box
                                        mt={{xs: '2rem', md: '2rem'}}
                                        width={{xs: '10.9rem', md:'18.3rem'}}
                                        height={{xs: '8.6rem', md: '18.3rem'}}
                                        display={{xs: 'none', md:'block'}}
                                    >
                                        <Image
                                            src='/images/landing-workflow-card-img.png'
                                            width={183}
                                            height={183}
                                        />
                                    </Box>
                                    <Box
                                        mt={{xs: '2rem', md: '2rem'}}
                                        width={{xs: '10.3rem', md:'18.3rem'}}
                                        height={{xs: '10.3rem', md: '18.3rem'}}
                                        display={{xs: 'block', md:'none'}}
                                    >
                                        <Image
                                            src='/images/landing-workflow-card-img.png'
                                            width={103}
                                            height={103}
                                        />
                                    </Box>
                                    <Box
                                        mt={{xs: '0.1rem', md: '1.7rem'}}
                                        maxWidth={{xs: '17.7rem', md: '21rem'}}
                                        textAlign='center'
                                        color='#495057'
                                        fontWeight='600'
                                        fontSize= {{xs:'1.5rem', md: '2.5rem'}}
                                        lineHeight= {{xs:'2.2rem', md: '3.8rem'}}     
                                    >{item.title}</Box>
                                    <Box
                                        mt={{xs: '1.2rem', md: '1.9rem'}}
                                        maxWidth={{xs:'23.4rem', md: '30rem'}}
                                        textAlign='center'
                                        color='rgba(47, 47, 47, 0.498039)'
                                        fontWeight='400'
                                        fontSize= {{xs: '1.3rem', md: '1.4rem'}}
                                        lineHeight= {{xs: '1.9rem', md: '2.2rem'}}
                                    >{item.oi}</Box>
                                </Flex>
                            </Box>
                        ))
                    }                
                </Grid>     
            </Flex>

            <WorkflowCard/>
        </Box>
    )
}
