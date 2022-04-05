import { Box, Text, Flex } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const ServiceCard = () => {
    return (
        <Box
            width={{xs: '36rem', md: '112rem'}}
            height={{xs:'50.5rem', md: '47rem'}}
            borderRadius={{xs: '1.4rem', md: '1.5rem'}}
            backgroundImage={{xs: 'url(/images/landing-service-bg-sm.png)', md: 'url(/images/landing-service-bg.png)'}}
            mx='auto'
            mt={{ xs: '5.7rem', md: '12rem'}}    
            backgroundRepeat = 'no-repeat'
        >
            <Box   
                position='absolute'
                height='5.3rem'
                width='5.3rem'
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'
                left='18.8rem'
                top='25.3rem'
                zIndex='5'
                display={{ xs: 'block', md: 'none'}}
            >   
                <Box
                    height='1.8rem'
                    width='1.8rem'
                    mx='auto'
                    mt='1.7rem'                                                                    
                >
                    <Image
                        src='/images/arrow-right.svg'
                        width={100}
                        height={100}                                                
                    />
                </Box>
            </Box>
            <Box
                ml={{xs: '4.3rem', md: '8rem'}}
                
            >
                <Text
                    as='h2'
                    fontSize={{ xs: '2rem', md: '4.2rem'}}
                    pt={{xs: '6.6rem', md: '7.6rem'}}
                    color='rgb(255, 255, 255)'
                    fontWeight='bold'
                    lineHeight={{ xs: '3rem', md:'6.3rem'}}                        
                    maxWidth={{xs: '28.5rem', md:'79rem'}}
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
                                fontSize={{xs: '1.3rem', md: '1.4rem'}}
                                maxWidth={{xs: '28rem', md: '48rem'}}
                                color='rgb(255, 255, 255, 0.5)'                                
                                lineHeight={{ xs: '1.9rem', md: '2.2rem'}}
                                mt='1.4rem'                                    
                            >If your website is the primary point of your business then with Auditzy, you can easiliy understand your website’s performance.</Text>
                        </Box>

                        <Box
                            background='rgba(51, 207, 150, 1)'
                            width={{xs: '17.9rem',  md:'13.2rem'}}
                            height={{xs: '3.6rem', md: '3.8rem'}}
                            borderRadius='0.4rem'
                            boxShadow='rgba(0, 0, 0, 0.2)'
                            textAlign='center'
                            mt={{xs: '2.3rem', md: '4rem'}}                                
                        >
                            <Flex                               
                                width={{xs: '17.9rem',  md:'13.2rem'}}
                                height={{xs: '3.6rem', md: '3.8rem'}}
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
                            ml={{xs: '0', md: '15rem'}}
                            width={{xs: '16rem', md: '29rem'}}
                            height={{xs: '16rem', md: '29rem'}}
                            ml='auto'
                            top='-6rem' 
                            left='15rem'
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
