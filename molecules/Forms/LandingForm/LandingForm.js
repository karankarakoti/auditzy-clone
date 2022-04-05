import React, { useState } from 'react'
import { Box, Text, Flex, Button } from "atoms";
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
                        width={{md: '64.8rem', lg:'86rem'}}                        
                    >                
                        <Flex
                            maxWidth={{md:'64.8rem', lg:'86rem'}}
                            height={{md:'3.7rem', lg: '4.9rem'}}
                            mt={{md: '4.1rem', lg: '5rem'}}
                            ml='auto'
                            mr='auto'
                            backgroundColor='rgba(177, 211, 255, 0.2)'
                            border='1px solid transparent'
                            borderRadius={{md: '0.3rem', lg: '0.4rem'}}  
                            alignItems='center'
                            justifyContent='start'                      
                        >                    
                            <Box
                                height={{md: '1.6rem', lg: '2rem'}}
                                width={{md: '1.6rem', lg: '2rem'}}
                                mx={{md:'1.5rem', lg: '1.5rem'}}
                                my='auto'                                
                            >                                                            
                                <Image
                                    src='/images/landing_search.svg'
                                    alt='Search'                                
                                    position='absolute'
                                    m='auto'
                                    width={200}
                                    height={200}
                                    boxShadow='0px 4px 30px 0px rgba(0, 0, 0, 0.2)'
                                />                                
                            </Box>                           

                            <Box                        
                                width='50rem'
                                height={{md:'1.6rem', lg: '2rem'}}
                                mt={{md: '-0.8rem', lg: '-0.5rem'}}
                            >
                                <Formik
                                    initialValues={{
                                        email: ""                                    
                                    }}                                
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <Box
                                                width={{md: '20rem', lg:'50rem'}}
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
                            
                            <Box                                
                                width={{md:'18.8rem', lg: '22rem'}}
                                height={{md:'3.8rem', lg: '4.9rem'}}                                
                                ml={'auto'}  
                                mr='-0.2rem'    
                                className='landing-button'                  
                            >
                                <Button
                                    bg='rgba(52, 195, 143, 1)'
                                    borderRadius={{md: '0.3rem', lg: '0.4rem'}}
                                    height='100%'
                                    width='100%'        
                                    variant='default'                                        
                                    border='none'
                                >
                                    <Text
                                        fontSize={{md:'1.3rem', lg: '1.4rem'}}
                                        fontWeight={'500'}
                                        color={'rgba(255, 255, 255, 1)'}
                                    >
                                        Audit Website for FREE
                                    </Text>
                                </Button>
                            </Box>
                        </Flex>                
                    </Box>


                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                        mt={{md:'1.3rem', lg:'1.7rem'}}                
                    >
                        <Flex>
                            {
                                options.map((option, index) => (
                                    <Flex key={index} alignItems='center' justifyContent='start' mr={{md:'3.8rem', lg:'2.8rem'}}>
                                        <Box
                                            width={{md:'1.6rem', lg: '1.4rem'}}
                                            height={{md:'1.6rem', lg: '1.4rem'}}
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
                                                    <Box
                                                        width={'0.8rem'}
                                                        height={'0.6rem'}  
                                                        mt={{md:'-0.8rem'}}                                       
                                                    >                              
                                                        <Image
                                                            src={`/images/check-mark.svg`}
                                                            width={8}
                                                            height={6}                                         
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

                        <Flex left={'-0.3rem'}>
                            <Flex             
                                alignItems='center'
                                justifyContent='start'  
                                mr={'2.5rem'}
                            >
                                <Box
                                    width='1rem'
                                    height='0.7rem' 
                                    mt={'-0.7rem'}                               
                                >
                                    <Image
                                        src='/images/check-mark.svg'
                                        alt='check'
                                        width={10}
                                        height={7}
                                    />
                                </Box>                               
                                <Text
                                    fontSize={{md:'1.1rem', lg: '1.3rem'}}
                                    lineHeight={{md:'1.6rem', lg: '1.9rem'}}
                                    fontWeight={'500'}
                                    color={'white'}
                                    ml={{md:'1.1rem', lg: '0.7rem'}}
                                >Free for developers</Text>
                            </Flex>                                 
                            <Flex
                                alignItems='center'
                                justifyContent='start'  
                            >
                                <Box
                                    width='1rem'
                                    height='0.7rem' 
                                    mt={'-0.7rem'}                               
                                >
                                    <Image
                                        src='/images/check-mark.svg'
                                        alt='check'
                                        width={10}
                                        height={7}
                                    />
                                </Box>                               
                                <Text
                                    fontSize={{md:'1.1rem', lg: '1.3rem'}}
                                    lineHeight={{md:'1.6rem', lg: '1.9rem'}}
                                    fontWeight={'500'}
                                    color={'white'}
                                    ml={{md:'1.1rem', lg: '0.7rem'}}
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

                    <Box                        
                        width='34rem'
                        height='3.6rem'                        
                        className='landing-button'   
                        mt='2.1rem'               
                    >
                        <Button
                            bg='rgba(52, 195, 143, 1)'
                            borderRadius={'0.4rem'}
                            height='100%'
                            width='100%'        
                            variant='default'                                        
                            border='none'
                        >
                            <Text
                                fontSize={'1.3rem'}
                                fontWeight={'500'}
                                color={'rgba(255, 255, 255, 1)'}
                            >
                                Audit Website for FREE
                            </Text>
                        </Button>
                    </Box>                   
                    
                </Flex>
            </Box>
        </>
    )
}
