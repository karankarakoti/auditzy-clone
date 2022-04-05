import { Box, Button, Flex, Grid, Text } from 'atoms'
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
                            <Box
                                mt='2.1rem'                                
                                width='13.4rem'
                                height='3.4rem'                                                            
                            >
                                <Button
                                    borderRadius='0.4rem'
                                    bg='#34C38F'
                                    height='100%'
                                    width='100%'
                                    variant='default'
                                    border='none'
                                >
                                    <Text
                                        color='#fff'
                                        fontSize='1.5rem'
                                    >
                                        Know More
                                    </Text>
                                </Button>                                
                            </Box>
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
                                    <Box
                                        mt='0'                                        
                                        width='10.5rem'
                                        height='3rem'                                        
                                    >
                                        <Button
                                            borderRadius='0.4rem'
                                            bg='#34C38F'                                        
                                            height='100%'
                                            width='100%'
                                            variant='default'
                                            border='none'
                                        >
                                            <Text   
                                                color='#fff'
                                                fontSize='1.3rem'
                                            >
                                                Know More
                                            </Text>
                                        </Button>                                        
                                    </Box>
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
                                    <Box
                                        mt='0'                                        
                                        width='10.5rem'
                                        height='3rem'                                                                                
                                    >
                                        <Button
                                            borderRadius='0.4rem'
                                            bg='#34C38F'
                                            height='100%'
                                            width='100%'
                                            variant='default'
                                            border='none'
                                        >
                                            <Text
                                                color='#fff'
                                                fontSize='1.3rem'
                                            >
                                                Know More
                                            </Text>
                                        </Button>                                        
                                    </Box>
                                </Flex>
                            </Box>                                
                        ))
                    }                                
                </Grid>
            </Box>

            <Box display={{xs: 'none', md: 'block'}}>                        
                <Flex ml='3rem' transform ='rotate(-14.67deg)' top={{md: '-13rem', lg: '-18rem'}}>
                    <Grid
                        gridTemplateColumns={{md: '20.6rem 13.4rem', lg: '38rem 24.8rem'}}
                        gridColumnGap='2rem'
                    >

                        <Box 
                            height={{md:'20.6rem', lg: '38rem'}}
                            width={{md:'20.7rem', lg: '38rem'}}
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius={{md:'0.8rem', lg:'1.5rem'}}
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= {{md:'2rem', lg:'3.5rem'}}
                                    lineHeight= {{md: '3rem', lg: '5.2rem'}}
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt={{md: '1.2rem', lg: '3rem'}}
                                >
                                    Performance
                                </Box>
                                <Box
                                    height={{md: '14rem', lg: '29rem'}}
                                    width={{md: '14rem', lg: '29rem'}}
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={290}
                                        height={290}
                                    />
                                </Box> 
                                <Box
                                    display={{md: 'block', lg: 'none'}}
                                    width='6.9rem'
                                    height='1.9rem'                                                                        
                                >
                                    <Button
                                        bg='#34C38F'
                                        borderRadius='0.2rem'
                                        height='100%'
                                        width='100%'
                                        variant='default'
                                        border='none'
                                    >
                                        <Text
                                            color='#fff'
                                            fontSize='0.8rem'
                                            lineHeight='1.3rem'
                                        >
                                            Know More
                                        </Text>
                                    </Button>
                                </Box>                           
                            </Flex>
                        </Box>

                        <Box 
                            height={{md: '13.1rem', lg: '24.2rem'}}
                            width={{md: '13.4rem', lg:'24.8rem'}}
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius={{md: '0.8rem', lg:'1.5rem'}}
                            mt={{md: '6.5rem', lg:'11rem'}}
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= {{md: '1.4rem', lg: '2.5rem'}}
                                    lineHeight= {{md: '2.1rem', lg: '3.8rem'}}
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt={{md:'1.2rem', lg: '3rem'}}
                                >
                                    Best Practices
                                </Box>
                                <Box
                                    height={{md:'7.5rem', lg: '15rem'}}
                                    width={{md:'7.5rem', lg: '15rem'}}
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={150}
                                        height={150}
                                    />
                                </Box>
                                <Box
                                    display={{md: 'block', lg: 'none'}}
                                    width='6.1rem'
                                    height='1.7rem'                                                                        
                                >
                                    <Button
                                        bg='#34C38F'
                                        borderRadius='0.2rem'
                                        height='100%'
                                        width='100%'
                                        variant='default'
                                        border='none'                                    
                                    >
                                        <Text
                                            color='#fff'
                                            fontSize='0.7rem'
                                            lineHeight='1.1rem'
                                        >
                                            Know More
                                        </Text>
                                    </Button>                                    
                                </Box>  
                            </Flex>
                        </Box>

                    </Grid>
                </Flex>
                <Flex ml='3rem' transform ='rotate(-14.67deg)' top={{ md: '-9rem', lg: '-12rem'}} left='-5rem'>
                    <Grid
                        gridTemplateColumns={{md: '14.8rem 13.4rem 17rem', lg: '27.5rem 24.8rem 31.4rem'}}
                        gridColumnGap='2rem'
                    >
                        <Box 
                            height={{md: '14.4rem', lg: '26.7rem'}}
                            width={{md: '14.8rem', lg: '27.5rem'}}
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius={{md: '0.8rem', lg: '1.5rem'}}
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= {{md: '1.4rem', lg: '2.5rem'}}
                                    lineHeight= {{md: '2.1rem', lg:'3.7rem'}}
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt={{md: '1.1rem', lg: '3rem'}}
                                >
                                    Accessibility
                                </Box>
                                <Box
                                    height={{md: '9.2rem', lg: '20rem'}}
                                    width={{md: '9.2rem', lg: '20rem'}}
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={200}
                                        height={200}
                                    />
                                </Box>
                                <Box
                                    display={{md: 'block', lg: 'none'}}
                                    width='6.1rem'
                                    height='1.7rem'                                                                                                            
                                >
                                    <Button
                                        background='#34C38F'
                                        borderRadius='0.2rem'
                                        height='100%'
                                        width='100%'
                                        variant='default'
                                        border='none'
                                    >
                                        <Text
                                            fontSize='0.7rem'
                                            lineHeight='1.1rem'
                                            color='#fff'
                                        >
                                            Know More
                                        </Text>                                        
                                    </Button>
                                </Box>
                            </Flex>
                        </Box>

                        <Box 
                            height={{md:'13rem', lg: '24.2rem'}}
                            width={{md:'13.4rem', lg: '24.8rem'}}
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius={{md: '0.8rem', lg: '1.5rem'}}
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= {{md: '1.4rem', lg: '2.5rem'}}
                                    lineHeight= {{md: '2.1rem', lg:'3.8rem'}}
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt={{md: '1.1rem', lg: '3rem'}}
                                >
                                    PWA
                                </Box>
                                <Box
                                    height={{md:'7.6rem', lg: '15rem'}}
                                    width={{md:'7.6rem', lg: '15rem'}}
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={150}
                                        height={150}
                                    />
                                </Box>
                                <Box
                                    display={{md: 'block', lg: 'none'}}
                                    width='6.1rem'
                                    height='1.7rem'                                    
                                >
                                    <Button
                                        bg='#34C38F'
                                        borderRadius='0.2rem'
                                        height='100%'
                                        width='100%'
                                        variant='default'
                                        border='none'
                                    >
                                        <Text
                                            color='#fff'
                                            fontSize='0.7rem'
                                            lineHeight='1.1rem'                                        
                                        >
                                            Know More
                                        </Text>                                    
                                    </Button>
                                </Box>
                            </Flex>
                        </Box>

                        <Box 
                            height={{md: '16.5rem', lg: '30.6rem'}}
                            width={{md: '17rem', lg: '31.4rem'}}
                            boxShadow='0px 1px 50px rgba(0, 0, 0, 0.25)'
                            background='#fff'
                            borderRadius={{md: '0.8rem', lg: '1.5rem'}}
                        >
                            <Flex 
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'                                        
                            >
                                <Box
                                    fontWeight= '600'
                                    fontSize= {{md: '1.8rem', lg: '3rem'}}
                                    lineHeight= {{md: '2.7rem', lg: '4.5rem'}}
                                    textAlign= 'center'
                                    color= '#556EE6'
                                    pt={{md: '1.1rem', lg: '3rem'}}
                                >
                                    SEO
                                </Box>
                                <Box
                                    height={{md:'10.4rem', lg: '18.8rem'}}
                                    width={{md:'10.4rem', lg: '18.8rem'}}
                                    ml='auto'
                                    mr='auto'
                                >
                                    <Image
                                        src='/images/landing-vital-progress.svg'
                                        width={200}
                                        height={200}
                                    />
                                </Box>
                                <Box
                                    display={{md: 'block', lg: 'none'}}
                                    width='6.1rem'
                                    height='1.7rem'                                    
                                >
                                    <Button
                                        bg='#34C38F'
                                        borderRadius='0.2rem' 
                                        height='100%'
                                        width='100%'
                                        variant='default'
                                        border='none'                                   
                                    >
                                        <Text
                                            color='#fff'
                                            fontSize='0.7rem'
                                            lineHeight='1.1rem'
                                        >
                                            Know More
                                        </Text>
                                    </Button>                                    
                                </Box>
                            </Flex>
                        </Box>

                    </Grid>
                </Flex>
            </Box>
        </>
    )
}
