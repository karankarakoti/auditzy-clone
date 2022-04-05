import { Box, Flex, Grid } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const VitalCard = () => {
    return (
        <>
            <Box display={{xs: 'block', md: 'none'}} mt='4rem'>                        
                <Grid
                    gridTemplateColumns='1fr'
                    mb='2.1rem'
                    mx='auto'
                >
                    <Box 
                        width='36rem'
                        height='26rem'
                        boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                        background='#fff'
                        borderRadius='0.7rem'
                    >
                        <Flex 
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'                                        
                        >
                            <Box
                                fontWeight= '600'
                                fontSize= '2.6rem'
                                lineHeight= '3.9rem'
                                textAlign= 'center'
                                color= '#556EE6'
                                pt='1.5rem'
                            >
                                Performance
                            </Box>
                            <Box
                                height='13.2rem'
                                width='13.2rem'
                                ml='auto'
                                mr='auto'
                            >
                                <Image
                                    src='/images/landing-vital-progress.svg'
                                    width={132}
                                    height={132}
                                />
                            </Box>
                            <Flex
                                mt='2.1rem'
                                alignItems='center'
                                justifyContent='center'
                                width='13.4rem'
                                height='3.4rem'
                                borderRadius='0.4rem'
                                background='#34C38F'
                                color='#fff'
                                fontSize='1.5rem'
                            >
                                Know More
                            </Flex>
                        </Flex>
                    </Box>                                
                </Grid>
                <Grid
                    gridTemplateColumns='1fr 1fr'
                    mb='1.5rem' 
                    gridColumnGap='0'                              
                >
                    {
                        ['SEO', 'Best Practises'].map(item => (
                            <Box 
                                width='17rem'
                                height='17.8rem'
                                boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                                background='#fff'
                                borderRadius='0.98rem'
                            >
                                <Flex 
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'                                        
                                >
                                    <Box
                                        fontWeight= '600'
                                        fontSize= '1.8rem'
                                        lineHeight= '2.7rem'
                                        textAlign= 'center'
                                        color= '#556EE6'
                                        pt='1.3rem'
                                    >
                                        {item}
                                    </Box>
                                    <Box
                                        height='9.7rem'
                                        width='9.7rem'
                                        ml='auto'
                                        mr='auto'
                                    >
                                        <Image
                                            src='/images/landing-vital-progress.svg'
                                            width={97}
                                            height={97}
                                        />
                                    </Box>
                                    <Flex
                                        mt='0'
                                        alignItems='center'
                                        justifyContent='center'
                                        width='10.5rem'
                                        height='3rem'
                                        borderRadius='0.4rem'
                                        background='#34C38F'
                                        color='#fff'
                                        fontSize='1.3rem'
                                    >
                                        Know More
                                    </Flex>
                                </Flex>
                            </Box>                                
                        ))
                    }                                
                </Grid>
                <Grid
                    gridTemplateColumns='1fr 1fr'
                    mb='1.5rem'
                    gridColumnGap='0'
                >
                    {
                        ['Accessibility', 'PWA'].map(item => (
                            <Box 
                                width='17rem'
                                height='17.8rem'
                                boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                                background='#fff'
                                borderRadius='0.98rem'
                            >
                                <Flex 
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'                                        
                                >
                                    <Box
                                        fontWeight= '600'
                                        fontSize= '1.8rem'
                                        lineHeight= '2.7rem'
                                        textAlign= 'center'
                                        color= '#556EE6'
                                        pt='1.3rem'
                                    >
                                        {item}
                                    </Box>
                                    <Box
                                        height='9.7rem'
                                        width='9.7rem'
                                        ml='auto'
                                        mr='auto'
                                    >
                                        <Image
                                            src='/images/landing-vital-progress.svg'
                                            width={97}
                                            height={97}
                                        />
                                    </Box>
                                    <Flex
                                        mt='0'
                                        alignItems='center'
                                        justifyContent='center'
                                        width='10.5rem'
                                        height='3rem'
                                        borderRadius='0.4rem'
                                        background='#34C38F'
                                        color='#fff'
                                        fontSize='1.3rem'
                                    >
                                        Know More
                                    </Flex>
                                </Flex>
                            </Box>                                
                        ))
                    }                                
                </Grid>
            </Box>
            <Box display={{xs: 'none', md: 'block'}}>                        
                <Flex ml='3rem' transform ='rotate(-14.67deg)' top='-18rem'>
                    <Grid
                        gridTemplateColumns='38rem 24.8rem'
                        gridColumnGap='2rem'
                    >

                        <Box 
                            height='38rem'
                            width='38rem'
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius='1.5rem'
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= '3.5rem'
                                    lineHeight= '5.2rem'
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt='3rem'
                                >
                                    Performance
                                </Box>
                                <Box
                                    height='29rem'
                                    width='29rem'
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={290}
                                        height={290}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box 
                            height='24.2rem'
                            width='24.8rem'
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius='1.5rem'
                            mt='11rem'
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= '2.5rem'
                                    lineHeight= '3.8rem'
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt='3rem'
                                >
                                    Best Practices
                                </Box>
                                <Box
                                    height='15rem'
                                    width='15rem'
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={150}
                                        height={150}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                    </Grid>
                </Flex>
                <Flex ml='3rem' transform ='rotate(-14.67deg)' top='-12rem' left='-5rem'>
                    <Grid
                        gridTemplateColumns='27.5rem 24.8rem 31.4rem'
                        gridColumnGap='2rem'
                    >

                        <Box 
                            height='26.7rem'
                            width='27.5rem'
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius='1.5rem'
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= '2.5rem'
                                    lineHeight= '3.7rem'
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt='3rem'
                                >
                                    Accessibility
                                </Box>
                                <Box
                                    height='20rem'
                                    width='20rem'
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={200}
                                        height={200}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box 
                            height='24.2rem'
                            width='24.8rem'
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius='1.5rem'                                        
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= '2.5rem'
                                    lineHeight= '3.8rem'
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt='3rem'
                                >
                                    PWA
                                </Box>
                                <Box
                                    height='15rem'
                                    width='15rem'
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={150}
                                        height={150}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box 
                            height='30.6rem'
                            width='31.4rem'
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius='1.5rem'
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= '3rem'
                                    lineHeight= '4.5rem'
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt='3rem'
                                >
                                    SEO
                                </Box>
                                <Box
                                    height='18.8rem'
                                    width='18.8rem'
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={200}
                                        height={200}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                    </Grid>
                </Flex>
            </Box>
        </>
    )
}
