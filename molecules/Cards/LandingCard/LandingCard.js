import React from 'react'
import { Box, Text, Flex, Grid, Button } from "atoms";
import Image from 'next/image';

const data = [
    {
        time: '1.5 s',
        title: 'First Contentful Paint',
        color: 'rgb(241, 180, 76)'
    },
    {
        time: '1.9 s',
        title: 'First Maningful Paint',
        color: 'rgb(52, 195, 143)'
    },
    {
        time: '2.1 s',
        title: 'Time to interactive',
        color: 'rgb(85, 110, 230)'
    },
]

export const LandingCard = () => {
    return (
        <Box
            maxWidth={{md:'64rem' ,lg: '110rem'}}
            ml='auto'
            mr='auto'
            mt={{xs: '4.4rem', md:'3.3rem', lg: '12rem'}}
        >
            <Flex
                left={{lg: '-4.5rem'}}
            >  
                <Box display={{xs: "none", md:"block"}}>
                    <Box                
                        borderRadius="1.5rem"
                        background='rgb(255, 255, 255)'
                        boxShadow= '0px 1px 50px 0px rgba(0, 0, 0, 0.25)'                            
                        top={{md:'9.6rem', lg:'15.5rem'}}
                        right={{md: '-1.4rem', lg: '-2.5rem'}}
                        width={{md:'15.2rem', lg:"26.1rem"}}
                        height={{md:'13.6rem', lg: "23.3rem"}}
                        zIndex='2'
                    >                
                        <Box
                            fontWeight= '600'
                            fontSize={{md: '1.4rem', lg:'2.5rem'}}
                            lineHeight={{md: '2.1rem', lg:'3.7rem'}}
                            color='rgba(73, 80, 87, 1)'
                            textAlign='center'
                            pt={{md: '0.6rem', lg:'1rem'}}
                        >SEO</Box>
                        <Box
                            height={{md: '0.2rem', lg:'0.4rem'}}
                            mt={{md:'0.2rem', lg: '0.5rem'}}
                            background='rgb(232, 232, 232)'
                            width='100%'
                        />                
                        <Box
                            fontSize={{md: '4rem', lg:'7rem'}}
                            color='rgb(85, 110, 230)'
                            textAlign='center'
                            fontWeight='600'
                        >   
                            95
                            <Text
                                as='span'
                                fontSize={{md: '1.4rem', lg:'2.3rem'}}
                            >%</Text>
                        </Box>
                        <Box
                            fontWeight= '600'
                            fontSize={{md: '1.1rem', lg:'2rem'}}
                            ml={{md: '2.4rem', lg:'4.2rem'}}
                            color='rgb(52, 195, 143)'                    
                        >Good</Box>
                        <Box
                            height={{md: '0.2rem', lg:'0.4rem'}}
                            width={{md: '10.7rem', lg:'18.4rem'}}
                            ml={{md: '2.4rem', lg:'4.2rem'}}
                            backgroundImage='linear-gradient(90deg, rgb(147, 235, 203) 0%, rgb(52, 195, 143) 73.44%)'
                            mt={{ md: '0.2rem', lg:'0.4rem'}}
                        />
                    </Box> 
                </Box>                        

                <Box                
                    borderRadius={{md: '0.8rem', lg: "1.5rem"}}
                    boxShadow="0px 8px 100px 0px rgba(18, 38, 63, 0.25)"
                    background='rgb(255, 255, 255)'            
                    px='1rem'
                    mx='auto'
                    width={{xs: "36.3rem", md: '39.7rem', lg:"68.8rem"}}
                    height={{xs: "25.2rem", md: '25rem', lg:"42.8rem"}}                    
                    cursor='pointer'
                    zIndex='1'                    
                >
                    <Box mt={{xs: '2.5rem'}}>
                        <Grid 
                            gridTemplateColumns={{ xs: "7.3rem 9rem 15rem", md: "8rem 11.2rem 11.2rem", lg: "13rem 20rem 20rem"}}
                            gridColumnGap={{ xs: '0.5rem', md:'1.6rem', lg: "2rem"}}
                            mx={{xs: '1.2rem', md:'1.9rem', lg:'5rem'}}
                            mt={{xs: '1.5rem', md:'2.1rem', lg:'3rem'}}
                        >
                            <Box
                                width={{xs: '7.3rem', md: '8rem', lg: '16rem'}}
                                height={{xs: '7.3rem', md: '8rem', lg: '16rem'}}
                                pr={{xs: '0.8rem',  lg: '2rem'}}
                            >                                                                   
                                <Image
                                    src="/images/landing-progress.svg"                                
                                    width={500}
                                    height={500}                                       
                                />                                
                            </Box>

                            <Box
                                ml={{lg: '2rem'}}
                            >                            
                                <Box
                                    fontSize={{xs: '1.3rem', md:'1.4rem', lg: '2.5rem'}}
                                    color='rgb(73, 80, 87)'
                                    fontWeight={'600'}
                                    lineHeight={{ xs: '1.9rem', md:'2.1rem', lg: '3.7rem'}}
                                >
                                    Performance
                                </Box>
                                <Box
                                    width={{xs: '8.8rem', md: '11rem', lg: '19rem'}}                                                                    
                                    height={{xs: '4.4rem', md: '4.8rem', lg: '8.3rem'}}  
                                    mt={{xs: '-1.5rem', md: '-3rem', lg:'-3rem'}}                                                                                                      
                                >                                    
                                    <Image
                                        src="/images/landing-progress-bar.svg"
                                        width={500}
                                        height={500}
                                    />                                    
                                </Box>
                            </Box>                            

                            <Box
                                mt={{xs: '1.8rem', md:'2.6rem', lg: '6rem'}}
                            >
                                {
                                    data.map((item, index) => (
                                        <Flex mb={{xs: '0.4rem', md: '0.6rem', lg:'1.1rem'}} key={index}>
                                            <Flex>
                                                <Box
                                                    fontSize={{xs: '1rem', md:'0.7rem', lg: '1.3rem'}}
                                                    color='rgb(85, 110, 230)'
                                                    fontWeight={'700'}
                                                >
                                                    {item.time}
                                                    <Text
                                                        as='span'
                                                        ml={{ xs: '0.7rem', md: '0.9rem', lg: '1.6rem'}}
                                                        color='rgb(73, 80, 87)'
                                                        fontSize={{xs: '1rem', md:'0.7rem', lg: '1.3rem'}}
                                                        fontWeight='500'
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Box
                                                height={{ xs: '0.4rem', md:'0.5rem', lg: '1rem'}}
                                                width={{ xs: '0.4rem', md:'0.5rem', lg: '1rem'}}
                                                mt={{xs: '0.57rem', md:'0.27rem', lg:'0.5rem'}}
                                                ml={{xs: '0.2rem', md: '0.4rem', lg: '0.6rem'}}
                                                background={item.color}
                                                borderRadius='50%'
                                            />
                                        </Flex>
                                    ))
                                }                                                                
                            </Box>
                                                        
                        </Grid>

                        <Grid
                            gridTemplateColumns={{ xs: 'repeat(4, 4.6rem)', md: 'repeat(4, 5.1rem)', lg: 'repeat(4, 9rem)'}}
                            gridColumnGap = {{ xs: '3.3rem', md:'3.5rem', lg: '5rem'}}
                            mx={{xs: '2.3rem', md:'3.1rem', lg: '8rem'}}
                            mt={{ xs: '1rem', md: '2rem'}}
                        >
                            {
                                [0,1,2,3].map((item, index) => (
                                    <Box 
                                        key={index}
                                        width={{xs: '4.6rem', md: '5.1rem', lg: '9rem'}}
                                        height={{xs: '4.6rem', md: '5.1rem', lg: '9rem'}}
                                    >                                    
                                        <Image
                                            src="/images/landing-progress.svg"
                                            width={500}
                                            height={500}
                                        />                                    
                                    </Box>
                                ))
                            }
                        </Grid>

                        <Grid
                            gridTemplateColumns={{ xs: 'repeat(4, 7.2rem)', md: 'repeat(4, 6.4rem)', lg: 'repeat(4, 11rem)'}}
                            gridColumnGap = {{xs: '0.8rem', md:'2.1rem', lg:'3rem'}}
                            mx={{xs: '1rem', md: '2.6rem', lg: '7rem'}}
                            mt={{xs: '0.2rem', md:'0.7rem', lg: '1rem'}}
                        >
                            {
                                ['SEO', 'Best Practices', 'PWA', 'Accessibility'].map((item, index) => (
                                    <Box
                                        key={index}
                                        fontSize={{xs: '1rem', md: '0.7rem',  lg: '1.3rem'}}                                        
                                        color='rgb(73, 80, 87)'
                                        textAlign='center'
                                        fontWeight={'600'}                                    
                                    >
                                        {item}
                                    </Box>
                                ))
                            }
                        </Grid>

                        <Flex
                            mt={{xs: '1.8rem', md: '1.3rem', lg: '3rem'}}
                            mx={{xs: '3rem', md: '3.1rem', lg: '8rem'}}
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <Flex
                                flexDirection='column'
                                alignItems='start'
                            >
                                <Box
                                    fontSize={{ xs: '1rem', md: '0.7rem', lg: '1.3rem'}}
                                    lineHeight={{xs: '1.5rem', md: '1.1rem', lg: '1.9rem'}}
                                    color='rgba(85, 110, 230, 1)'
                                    fontWeight={'500'}
                                >
                                    19-02-2019 03:14 PM
                                </Box>
                                <Box
                                    fontSize={{ xs: '1rem', md: '0.7rem', lg: '1.3rem'}}
                                    lineHeight={{xs: '1.5rem',  md: '1.1rem', lg: '1.9rem'}}
                                    color='rgba(166, 166, 166, 1)'
                                    fontWeight={'500'}
                                >   
                                    Last Audit
                                </Box>
                            </Flex>

                            <Box
                                height= {{xs: '2.2rem', md: '2.4rem', lg: '4rem'}}
                                width= {{ xs: '4.8rem', md: '5.3rem', lg: '9rem'}}                                                                
                            >
                                <Button
                                    bg='rgb(85, 110, 230)'                                
                                    borderRadius='0.2rem' 
                                    height='100%'
                                    width='100%'
                                    variant='default'
                                    border='none'
                                >
                                    <Text
                                        color='white'
                                        fontSize={{xs: '0.8rem', md: '0.7rem', lg: '1.3rem'}}
                                        fontWeight={'400'}      
                                    >
                                        Audit
                                    </Text>
                                </Button>
                                
                            </Box>
                        </Flex>
                    </Box>
                </Box>              

                <Box display={{xs: "none", md:"block"}}>
                    <Box                
                        borderRadius={{md:'0.8rem', lg:"1.5rem"}}
                        boxShadow="0px 1px 50px 0px rgba(0, 0, 0, 0.25)"
                        background='rgb(255, 255, 255)'            
                        top={{md:'7.8rem', lg:'12.5rem'}}
                        left={{md:'-1.5rem', lg:'-2.5rem'}}
                        width={{md: '12.8rem', lg:"22rem"}}
                        height={{md: '11.4rem', lg:"19rem"}}
                        zIndex='2'
                    >
                        <Box
                            fontWeight= '600'
                            fontSize={{md:'0.9rem', lg: '1.6rem'}}
                            lineHeight={{md:'1.3rem', lg:'3.7rem'}}
                            color='rgba(73, 80, 87, 1)'
                            textAlign='center'
                            pt='1rem'
                        >Page Speed</Box>
                        <Box
                            height={{md: '0.2rem', lg:'0.4rem'}}
                            mt={{md:'0.2rem', lg: '0.5rem'}}
                            background='rgb(232, 232, 232)'
                            width='100%'
                        />
                        <Flex
                            mt={{md:'1.8rem', lg: '3rem'}}
                            alignItems='center'
                        >                    
                            <Box
                                width={{md:'1.3rem', lg: '2.2rem'}}
                                height={{md:'1.2rem', lg: '2rem'}}
                                ml={{md:'1.4rem', lg: '2.5rem'}}
                            >
                                <Image
                                    src='/images/landing-desktop.svg'                                                                
                                    width={100}
                                    height={100}
                                />
                            </Box> 
                            <Box
                                width={{md:'5.9rem', lg:'10rem'}}
                                height={{md:'0.2rem', lg:'0.4rem'}}                        
                                ml={{md:'0.7rem', lg: '1.2rem'}}
                            >
                                <Flex
                                    width={{md:'5.9rem', lg:'10rem'}}
                                    height='100%'
                                    backgroundImage='linear-gradient(90deg, rgb(0, 255, 221) 0.51%, rgb(90, 111, 240) 100%)'
                                />
                            </Box> 
                            <Box
                                fontSize={{md:'0.7rem', lg:'1.3rem'}}
                                ml={{md:'0.6rem', lg:'1.2rem'}}
                                color='rgb(85, 110, 230)'
                                fontWeight='600'
                            >
                                1.5s
                            </Box>                  
                        </Flex>

                        <Flex
                            mt={{md:'1.8rem', lg: '3rem'}}
                            alignItems='center'
                        >                    
                            <Box
                                width={{md:'1.3rem', lg: '2.2rem'}}
                                height={{md:'1.2rem', lg: '2rem'}}
                                ml={{md:'1.4rem', lg: '2.5rem'}}
                            >
                                <Image
                                    src='/images/landing-mobile.svg'                                                                
                                    width={100}
                                    height={100}
                                />
                            </Box> 
                            <Box
                                width={{md:'5.9rem', lg:'10rem'}}
                                height={{md:'0.2rem', lg:'0.4rem'}}                        
                                ml={{md:'0.7rem', lg: '1.2rem'}}
                            >
                                <Flex
                                    width={{md:'5.9rem', lg:'10rem'}}
                                    height='100%'
                                    backgroundImage='linear-gradient(90deg, rgb(0, 255, 221) 0.51%, rgb(90, 111, 240) 100%)'
                                />
                            </Box> 
                            <Box
                                fontSize={{md:'0.7rem', lg:'1.3rem'}}
                                ml={{md:'0.6rem', lg:'1.2rem'}}
                                color='rgb(85, 110, 230)'
                                fontWeight='600'
                            >
                                2.5s
                            </Box>                  
                        </Flex>
                    </Box>    
                </Box>
                                                
            </Flex>
            <Box 
                position='absolute'           
                width="13.5rem"
                height="13.5rem"
                borderRadius="50%"
                zIndex="0"
                background={'rgba(247, 191, 23, 1)'}
                left="14rem"
                top="-5rem"
                display={{xs: "none", lg:"block"}}         
            />
            <Box
                position='absolute'            
                width="9.9rem"
                height="9.9rem"
                borderRadius="50%"
                zIndex="1"
                background={'rgba(141, 198, 63, 1)'}
                top="8rem"
                right="-3rem"
                display={{xs: "none", lg:"block"}}         
            />
        </Box>
    )
}
