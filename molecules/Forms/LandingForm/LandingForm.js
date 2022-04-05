import React, { useState } from 'react'
import { Box, Text, Flex } from "atoms";
import { Field, Form, Formik } from "formik";
import Image from 'next/image';

export const LandingForm = () => {

    const [ deviceType, setDeviceType ] = useState('mobile');

    const options = [
        { value: 'mobile', label: 'Mobile' },        
        { value: 'desktop', label: 'Desktop' }      
    ]
      

    return (
        <>
            <Box display={{xs: 'none', md:'block'}}>
                <Flex flexDirection='column'>
                    <Box                
                        width={{xs: '36rem', md:'86rem'}}                        
                    >                
                        <Flex
                            maxWidth='86rem'
                            height='4.9rem'
                            mt='5rem'
                            ml='auto'
                            mr='auto'
                            backgroundColor='rgba(177, 211, 255, 0.2)'
                            border='1px solid transparent'
                            borderRadius={'0.4rem'}  
                            alignItems='center'
                            justifyContent='start'                      
                        >                    
                            <Box
                                height='2rem'
                                width='2rem'
                                mx='1.5rem'
                                my='auto'
                            >                                                            
                                <Image
                                    src='/images/landing_search.svg'
                                    alt='Search'                                
                                    position='absolute'
                                    m='auto'
                                    width='100%'
                                    height={'100%'}
                                    boxShadow='0px 4px 30px 0px rgba(0, 0, 0, 0.2)'

                                />                                
                            </Box>

                            <Box                        
                                width='50rem'
                                height={'2rem'}
                                mt={'-0.5rem'}
                            >
                                <Formik
                                    initialValues={{
                                        email: ""                                    
                                    }}                                
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <Box
                                                width={'50rem'}
                                            >
                                                <Field
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="https://yoursite.com"                                            
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        background: 'transparent',
                                                        width: '100%',
                                                        height: '100%',
                                                        fontSize: '1.6rem',
                                                        color: '#fff',
                                                        fontWeight: '700',
                                                    }}
                                                    className="ui-input"
                                                />
                                                {errors.email && touched.email ? (
                                                    <Box
                                                        top={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                                                        left={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                                                    >
                                                        <Text
                                                            fontSize={{
                                                                xs: "1rem",
                                                                md: "1.2rem",
                                                                lg: "1rem",
                                                            }}
                                                            fontWeight={{ xs: "medium", md: "medium" }}
                                                            color="red.500"
                                                            >
                                                            {errors.postcode}
                                                        </Text>
                                                    </Box>
                                                ) : null}
                                            </Box>                                   
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                            
                            <Flex
                                alignItems='center'
                                justifyContent='center'
                                width='22rem'
                                height='4.9rem'
                                background='rgba(52, 195, 143, 1)'
                                borderRadius={'0.4rem'}
                                ml={'auto'}      
                                className='landing-button'                  
                            >
                                <Text
                                    fontSize={'1.4rem'}
                                    fontWeight={'500'}
                                    color={'rgba(255, 255, 255, 1)'}
                                >
                                    Audit Website for FREE
                                </Text>
                            </Flex>
                        </Flex>                
                    </Box>


                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                        mt='1.7rem'                
                    >
                        <Flex>
                            {
                                options.map((option, index) => (
                                    <Flex key={index} alignItems='center' justifyContent='start' mr={'2.8rem'}>
                                        <Box
                                            width='1.4rem'
                                            height='1.4rem'
                                            background={deviceType === option.value ? 'rgba(52, 195, 143, 1)' : 'rgba(199, 199, 199, 1);'}
                                            borderRadius={'0.4rem'}
                                            display={'flex'}
                                            alignItems='center'
                                            justifyContent='center'
                                            mr={'0.8rem'}     
                                            onClick={() => setDeviceType(option.value)}                                   
                                        >
                                            {
                                                deviceType === option.value &&                                    
                                                    <Image
                                                        src={`/images/check-mark.svg`}
                                                        width={'8.5rem'}
                                                        height={'6.5rem'}                                         
                                                    />
                                            }
                                        </Box>
                                        <Text
                                            fontSize={'1.3rem'}
                                            fontWeight={'500'}
                                            color={'#fff'}
                                        >{option.label}</Text>
                                    </Flex>
                                ))
                            }
                        </Flex>

                        <Flex
                            left={'-2rem'}
                        >
                            <Flex             
                                alignItems='center'
                                justifyContent='start'  
                                mr={'2.5rem'}
                            >
                                <Image
                                        src='/images/check-mark.svg'
                                        alt='check'
                                        width='10rem'
                                        height='7.6rem'                                
                                />
                                <Text
                                    fontSize={'1.3rem'}
                                    lineHeight={'1.9rem'}
                                    fontWeight={'500'}
                                    color={'white'}
                                    ml={'0.7rem'}
                                >Free for developers</Text>
                            </Flex>                                 
                            <Flex
                                alignItems='center'
                                justifyContent='start'  
                            >
                                    <Image
                                        src='/images/check-mark.svg'
                                        alt='check'
                                        width='10rem'
                                        height='7.6rem'
                                        mr={'0.6rem'}
                                />
                                <Text
                                    fontSize={'1.3rem'}
                                    lineHeight={'1.9rem'}
                                    fontWeight={'500'}
                                    color={'white'}
                                    ml={'0.7rem'}
                                >no credit card required</Text>
                            </Flex>
                        </Flex>
                    </Flex>  
                </Flex>
            </Box>
            <Box display={{xs: 'block', md:'none'}} maxWidth='34rem'>
                <Flex flexDirection='column' mt={{xs: '5.7rem'}} mx='auto'>
                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                        //ml='2.9rem'                        
                    >
                        <Flex>
                            {
                                options.map((option, index) => (
                                    <Flex key={index} alignItems='center' justifyContent='start' mr={'1.4rem'}>
                                        <Box
                                            width='1.7rem'
                                            height='1.8rem'
                                            background={deviceType === option.value ? 'rgba(52, 195, 143, 1)' : 'rgba(199, 199, 199, 1);'}
                                            borderRadius={'0.4rem'}
                                            display={'flex'}
                                            alignItems='center'
                                            justifyContent='center'
                                            mr={'0.7rem'}     
                                            onClick={() => setDeviceType(option.value)}                                   
                                        >
                                            {
                                                deviceType === option.value &&                                    
                                                    <Box height='1.2rem' width='0.7rem'>
                                                        <Image
                                                            src={`/images/check-mark.svg`}
                                                            width={500}
                                                            height={500}                                         
                                                        />
                                                    </Box>
                                            }
                                        </Box>
                                        <Text
                                            fontSize={'1.3rem'}
                                            fontWeight={'500'}
                                            color={'#fff'}
                                        >{option.label}</Text>
                                    </Flex>
                                ))
                            }
                        </Flex>
                    </Flex>

                    <Flex
                        width='34rem'
                        height='3.6rem'
                        mt='2.1rem'                        
                        backgroundColor='rgba(177, 211, 255, 0.2)'
                        border='1px solid transparent'
                        borderRadius={'0.3rem'}  
                        alignItems='center'
                        justifyContent='start'                      
                    >                    
                        <Box
                            height='1.6rem'
                            width='1.6rem'
                            mx='1.5rem'
                            my='auto'
                        >                                                            
                            <Image
                                src='/images/landing_search.svg'
                                alt='Search'                                
                                position='absolute'
                                m='auto'
                                width={100}
                                height={100}
                                boxShadow='0px 4px 30px 0px rgba(0, 0, 0, 0.2)'

                            />                                
                        </Box>

                        <Box                        
                            width='16.6rem'
                            height={'2rem'}
                            mt={{xs: '-0.1rem', md: '-0.5rem'}}                            
                        >
                            <Formik
                                initialValues={{
                                    email: ""                                    
                                }}                                
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Box
                                            width={'16.6rem'}
                                        >
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="https://yoursite.com"                                            
                                                style={{
                                                    border: 'none',
                                                    outline: 'none',
                                                    background: 'transparent',
                                                    width: '100%',
                                                    height: '100%',
                                                    fontSize: {xs: '1.3rem', md: '1.6rem'},
                                                    color: '#fff',
                                                    fontWeight: '700',
                                                }}
                                                className="ui-input"
                                            />
                                            {errors.email && touched.email ? (
                                                <Box
                                                    top={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                                                    left={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                                                >
                                                    <Text
                                                        fontSize={{
                                                            xs: "1rem",
                                                            md: "1.2rem",
                                                            lg: "1rem",
                                                        }}
                                                        fontWeight={{ xs: "medium", md: "medium" }}
                                                        color="red.500"
                                                        >
                                                        {errors.postcode}
                                                    </Text>
                                                </Box>
                                            ) : null}
                                        </Box>                                   
                                    </Form>
                                )}
                            </Formik>
                        </Box>                                               
                    </Flex>                

                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        width='34rem'
                        height='3.6rem'
                        background='rgba(52, 195, 143, 1)'
                        borderRadius={'0.4rem'}
                        //ml={'2.9rem'}      
                        className='landing-button'   
                        mt='2.1rem'               
                    >
                        <Text
                            fontSize={'1.3rem'}
                            fontWeight={'500'}
                            color={'rgba(255, 255, 255, 1)'}
                        >
                            Audit Website for FREE
                        </Text>
                    </Flex>                   
                    
                </Flex>
            </Box>
        </>
    )
}
