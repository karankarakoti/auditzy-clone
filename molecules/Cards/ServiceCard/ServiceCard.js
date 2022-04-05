import { Box, Text, Flex, Button } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const ServiceCard = () => {
    return (
        <Box
            width={{xs: '36rem', md: '64.2rem', lg: '112rem'}}
            height={{xs:'50.5rem', md: '27rem', lg: '47rem'}}
            borderRadius={{xs: '1.4rem', md: '0.86rem', lg: '1.5rem'}}
            backgroundImage={{xs: 'url(/images/landing-service-bg-sm.png)', md: 'url(/images/landing-service-bg.png)'}}
            mx='auto'
            mt={{ xs: '5.7rem', md: '0', lg: '12rem'}}    
            backgroundRepeat = 'no-repeat'
        >
            <Box   
                position='absolute'
                height={{xs: '5.3rem', md: '3.3rem'}}
                width={{xs: '5.3rem', md: '3.3rem'}}
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'
                left={{xs: '18.8rem', md: '15.4rem'}}
                top={{xs: '25.3rem', md: '16.8rem'}}
                zIndex='5'
                display={{ xs: 'block', lg: 'none'}}
            >   
                <Box
                    height={{xs: '1.8rem', md: '1rem'}}
                    width={{xs: '1.8rem', md: '1rem'}}
                    mx='auto'
                    mt={{xs: '1.7rem', md: '1.1rem' }}                                                                   
                >
                    <Image
                        src='/images/arrow-right.svg'
                        width={100}
                        height={100}                                                
                    />
                </Box>
            </Box>
            <Box
                ml={{xs: '4.3rem', md: '6.2rem', lg: '8rem'}}                
            >
                <Text
                    as='h2'
                    fontSize={{ xs: '2rem', md: '2.3rem', lg: '4.2rem'}}
                    pt={{xs: '6.6rem', md: '4.3rem', lg: '7.6rem'}}
                    color='rgb(255, 255, 255)'
                    fontWeight='bold'
                    lineHeight={{ xs: '3rem', md: '3.4rem', lg:'6.3rem'}}                        
                    maxWidth={{xs: '28.5rem', md: '45.6rem', lg:'79rem'}}
                    zIndex='2'
                    mb='0'
                >Only a few clicks to understand your website’s performance.</Text>
                <Flex
                    flexDirection={{ xs: 'column', md: 'row'}}
                    alignItems='start'                        
                >
                    <Flex
                        flexDirection='column'
                        zIndex='2'
                    >
                        <Box>
                            <Text
                                as='p'
                                fontSize={{xs: '1.3rem', md: '0.8rem', lg: '1.4rem'}}
                                maxWidth={{xs: '28rem', md: '27.9rem', lg: '48rem'}}
                                color='rgb(255, 255, 255, 0.5)'                                
                                lineHeight={{ xs: '1.9rem', md: '1.2rem', lg: '2.2rem'}}
                                mt={{md: '0.8rem', lg: '1.4rem'}}                                    
                            >If your website is the primary point of your business then with Auditzy, you can easiliy understand your website’s performance.</Text>
                        </Box>

                        <Box
                            background='rgba(51, 207, 150, 1)'
                            width={{xs: '17.9rem',  md: '11.2rem', lg:'13.2rem'}}
                            height={{xs: '3.6rem', md: '2.4rem', lg: '3.8rem'}}
                            boxShadow='rgba(0, 0, 0, 0.2)'                                                                                     
                            mt={{xs: '2.3rem', md: '2.2rem', lg: '4rem'}}                                
                        >
                            <Button                                                               
                                borderRadius={{md: '0.4rem', lg: '0.4rem'}}
                                bg='rgba(51, 207, 150, 1)'                                
                                mx='auto' 
                                height='100%'
                                width='100%'        
                                variant='default'                                        
                                border='none'                                  
                            >
                                <Text
                                    fontSize={{md: '0.9rem', lg: '1.3rem'}}
                                    color='#fff'                                
                                >
                                    Start Auditing
                                </Text>
                            </Button>                                
                        </Box>
                        

                        <Flex
                            flexDirection='column'
                            alignItems='start'
                            mt={{xs: '1.2rem', md: '0.8rem', lg: '1.7rem'}}
                        >
                            <Flex
                                flexDirection='row'
                                alignItems='center'
                            >
                                <Box
                                    width={{xs: '0.8rem', lg: '0.8rem'}}
                                    height={{xs: '0.6rem', lg: '0.6rem'}}
                                    mt={{ xs: '-0.6rem', lg: '-0.6rem'}}
                                >
                                    <Image
                                        src='/images/check-mark.svg'                                    
                                        width={10}
                                        height={10}
                                    />
                                </Box>                                
                                <Text
                                    as='span'
                                    ml={{xs:'0.5rem', lg: '1rem'}}
                                    fontSize={{xs: '0.75rem', lg: '1.3rem'}}
                                    color='rgb(255, 255, 255)'
                                    fontWeight='500'
                                >Its FREE</Text>
                            </Flex>
                            <Flex
                                flexDirection='row'
                                alignItems='center'
                                mt={{xs: '1.2rem', md: '0.6rem', lg: '1.1rem'}}
                            >
                               <Box
                                    width={{xs: '0.8rem', lg: '0.8rem'}}
                                    height={{xs: '0.6rem', lg: '0.6rem'}}
                                    mt={{ xs: '-0.6rem', lg: '-0.6rem'}}
                                >
                                    <Image
                                        src='/images/check-mark.svg'                                    
                                        width={10}
                                        height={10}
                                    />
                                </Box>
                                <Text
                                    as='span'
                                    ml={{xs:'0.5rem', lg: '1rem'}}
                                    fontSize={{xs: '0.75rem', lg: '1.3rem'}}
                                    color='rgb(255, 255, 255)'
                                    fontWeight='500'                                    
                                >no credit card required</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Box
                            ml={{xs: '0',  lg: '15rem'}}
                            width={{xs: '16rem', md: '16.9rem', lg: '29rem'}}
                            height={{xs: '16rem', md: '16.9rem', lg: '29rem'}}
                            ml='auto'
                            top={{xs: '-4rem',lg:'-6rem' }}
                            left={{xs: '10rem',lg: '15rem'}}
                            zIndex='1'                               
                        >   
                            <Image
                                src='/images/landing-service-img.png'
                                width={500}
                                height={500}   
                                zIndex='0'
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Box> 
                            
        </Box>
    )
}
