import { Box, Flex, Grid, Text } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const HomeVital = () => {
    return (
        <Box pt='12rem' pb='20rem' overflow='hidden' mx='auto'>
            <Box
                background='url(/images/landing-vitals-bg.png)'
                backgroundRepeat='no-repeat'       
                backgroundSize='cover'
                height='58.2rem'
                pt='6rem'
                mt='3rem'                                
            >
                <Box mx='auto'>
                    <Flex>                        
                        <Box ml='24rem' mt='15rem'>
                            <Box 
                                fontSize='2.8rem'
                                color='#fff'
                                fontWeight='600'
                            >
                                All you need to know about
                            </Box>
                            <Flex
                                flexDirection='column'
                            >
                                <Flex 
                                    fontSize='6rem'
                                    color='#fff'
                                    fontWeight='700'
                                >
                                    YOUR
                                    <Text
                                        as='span'
                                        color='rgb(52, 195, 143)'
                                        fontSize='6rem'
                                        ml='1rem'
                                    >
                                        WEBSITE'S
                                    </Text>
                                </Flex>                               
                                <Box 
                                    fontSize='3rem'
                                    color='#fff'
                                    fontWeight='600'
                                >
                                    Core web vital score
                                </Box>
                            </Flex>
                        </Box>

                        <Box>                        
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
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
