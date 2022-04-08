import { Box, Grid, Text } from 'atoms'
import { SMFeatureCard } from 'molecules'
import Image from 'next/image'
import React from 'react'

export const SiteMonitoringFeatures = () => {
    return (
        <>
            <Box
                background='linear-gradient(180.41deg, #E8FFFB -11.71%, rgba(212, 226, 245, 0) 99.66%)'                
            >
                <Box
                    textAlign='center'
                    fontSize={{xs: "1.4rem", md: '1.8rem', lg:"2rem"}}
                    fontWeight="400"
                    lineHeight={{xs: "2.1rem", md: '2.7rem', lg:"3rem"}}
                    color="#556EE6"
                    pt={{xs: "2.8rem", md: '5.4rem', lg:"12.3rem"}}
                >
                    Features
                </Box>
                <Box
                    textAlign='center'                    
                    pt={{xs: "1rem", md: '1.4rem', lg:"1.6rem"}}
                    mx='auto' 
                    maxWidth={{xs: "27.3rem", md: "64.1rem", lg:"84rem"}}                   
                >
                    <Text
                        fontSize={"4rem"}
                        fontWeight="600"
                        lineHeight="6rem"
                        color="#495057"
                        display={{xs: "none", lg: "block"}}                        
                    >Compare and evaluate <br/>
                    portfolios with any website
                    </Text>    
                    <Text
                        fontSize={{xs: '2rem', md: "2.8rem"}}
                        fontWeight="600"
                        lineHeight={{xs: '3rem', md: "4.2rem"}}
                        color="#495057"
                        display={{xs: "block", lg: "none"}}                        
                    >Compare and evaluate portfolios with any website
                    </Text>                 
                </Box>
                <Box
                    textAlign='center'
                    fontSize={{xs: "1.3rem", md: "1.4rem"}}
                    fontWeight="600"
                    lineHeight={{xs: "1.9rem", md: "2.2rem"}}
                    color="#495057"
                    pt={{xs: "1.6rem", md: '1.2rem'}}
                    mx='auto' 
                    maxWidth={{xs: '32.9rem', md: '52.1rem', lg:"48.7rem"}}                   
                >
                    Try it now and get insights and data that can be used to create a better user experience for website visitors.
                </Box>                

                <Box
                    mt={{lg:'7.1rem'}}                    
                    display={{xs: 'none', md: "block"}}
                >                    
                    <Grid
                        gridTemplateColumns={{md: "1fr 1fr"}}
                        gridColumnGap={{md: "5.5rem", lg: "13rem"}}
                        gridRowGap={{md: "6.8rem", lg: "12rem"}}
                        px={{md: '6rem', lg:'14rem'}}
                        pt='10rem'                        
                    >
                        <Box>
                            <Box
                                maxWidth={{md: "24.9rem", lg:"40.9rem"}}
                                fontSize={{md: "1.6rem", lg: "3rem"}}
                                fontWeight="600"
                                color="#495057"
                                lineHeight={{md: "2.4rem", lg: "4.5rem"}}
                            >
                                Compare and evaluate portfolios with any website
                            </Box>
                            <Box
                                maxWidth={{md: "30.5rem", lg:"43rem"}}
                                fontSize={{md: "1.3rem", lg: "1.4rem"}}
                                fontWeight="400"
                                color="rgb(73, 80, 87)"
                                lineHeight={{md: "2.2rem"}}
                                mt={{md: "0.7rem", lg: "2.2rem"}}
                            >
                                Try it now and get insights and data that can be used to create a better user experience for website visitors.
                            </Box>
                        </Box>

                        <Box mx='auto'>
                            <Box
                                width={{md: "26rem", lg:"42.3rem"}}
                                height={{md: "13.2rem", lg:"21.5rem"}}
                                borderRadius={{md: "0.9rem", lg:"1.5rem"}}
                                border= '1px solid #E9E9E9'
                                boxShadow=' 0px 12px 50px rgba(18, 38, 63, 0.1)'
                                top={{md: "5.8rem", lg:"3rem"}}
                            >
                                <Image
                                    src='/images/sm-feature-card-1.svg'
                                    width={423}
                                    height={215}
                                />
                            </Box>
                            <Box
                                width={{md: "10.2rem", lg:"16.6rem"}}
                                height={{md: "10.3rem", lg:"16.3rem"}}
                                borderRadius={{md: "0.9rem", lg:"1.5rem"}}
                                border= '1px solid #E9E9E9'
                                boxShadow='0px 1px 50px rgba(0, 0, 0, 0.15)'
                                position={{md:"absolute"}}
                                right={{ md: '-4rem', lg:"-6rem"}}
                                top={{ md: '1.9rem', lg:"-3rem"}}
                            >
                                <Image
                                    src='/images/sm-feature-card-2.svg'
                                    width={166}
                                    height={163}
                                />
                            </Box>
                        </Box>

                        <Box mt={{md: '5rem', lg: '12rem'}}>
                            <Box
                                width={{md: "28.6rem", lg:"49.8rem"}}
                                height={{md: "19.6rem", lg:"34.4rem"}}
                                borderRadius={{md: "0.2rem", lg:"0.4rem"}}                                
                                boxShadow='0px 10px 50px rgba(18, 38, 63, 0.15)'                                
                            >
                                <Image
                                    src='/images/sm-feature-card-3.svg'
                                    width={498}
                                    height={344}
                                />
                            </Box>                            
                        </Box>

                        <Box mt={{md: '11.5rem', lg: '12rem'}}>
                            <Box
                                maxWidth={{md: "28.9rem", lg:"49.9rem"}}
                                fontSize={{md: "1.6rem", lg: "3rem"}}
                                fontWeight="600"
                                color="#495057"
                                lineHeight={{md: "2.4rem", lg: "4.5rem"}}
                            >
                                Maintain multiple porfolios and do mutiple audits
                            </Box>
                            <Box
                                maxWidth={{md: "29.6rem", lg:"41rem"}}
                                fontSize={{md: "1.3rem", lg: "1.4rem"}}
                                fontWeight="400"
                                color="rgb(73, 80, 87)"
                                lineHeight={{md: "2.2rem"}}
                                mt={{md: "0.7rem", lg: "2.8rem"}}
                            >
                                Try it now and get insights and data that can be used to create a better user experience for website visitors.Try it now and get insights and data that
                            </Box>
                        </Box>

                        <Box mt={{md: '7rem', lg: '14rem'}}>
                            <Box
                                maxWidth={{md: "30rem", lg:"40.9rem"}}
                                fontSize={{md: "1.6rem", lg: "3rem"}}
                                fontWeight="600"
                                color="#495057"
                                lineHeight={{md: "2.4rem", lg: "4.5rem"}}
                            >
                                Monitor and keep track of multiple competitors
                            </Box>
                            <Box
                                maxWidth={{md: "29.6rem", lg:"48.7rem"}}
                                fontSize={{md: "1.3rem", lg: "1.4rem"}}
                                fontWeight="400"
                                color="rgb(73, 80, 87)"
                                lineHeight={{md: "2.2rem"}}
                                mt={{md: "0.7rem", lg: "2.8rem"}}
                            >
                                Try it now and get insights and data that can be used to create a better user experience for website visitors. Try it now and get insights and data that can be used to create a better user experience for website visitors.
                            </Box>
                        </Box>

                        <Box mt={{md: '4rem', lg: '8rem'}}>
                            <Box
                                width={{md: "26rem", lg:"41.2rem"}}
                                height={{md: "11.7rem", lg:"18.5rem"}}
                                border= '1px solid #E9E9E9'
                                background= '#FFFFFF'
                                boxShadow= '0px 12px 24px rgba(18, 38, 63, 0.0313726)'
                            >
                                <Image
                                    src='/images/sm-feature-card-4.svg'
                                    width={412}
                                    height={185}
                                />
                            </Box>
                            <Box
                                width={{md: "26rem", lg:"41.2rem"}}
                                height={{md: "11.7rem", lg:"18.5rem"}}
                                border= '1px solid #E9E9E9'
                                background= '#FFFFFF'
                                boxShadow= '0px 12px 24px rgba(18, 38, 63, 0.0313726)'
                                left={{md: "1.8rem", lg:"2.8rem"}}
                                top={{md: "-8.5rem", lg:"-13.5rem"}}
                            >
                                <Image
                                    src='/images/sm-feature-card-4.svg'
                                    width={412}
                                    height={185}
                                />
                            </Box>
                            <Box
                                width={{md: "26rem", lg:"41.2rem"}}
                                height={{md: "11.7rem", lg:"18.5rem"}}
                                border= '1px solid #E9E9E9'
                                background= '#FFFFFF'
                                boxShadow= '0px 12px 24px rgba(18, 38, 63, 0.0313726)'
                                left={{md: "3.6rem", lg:"5.6rem"}}
                                top={{md: "-17rem", lg:"-27rem"}}
                            >
                                <Image
                                    src='/images/sm-feature-card-4.svg'
                                    width={412}
                                    height={185}
                                />
                            </Box>
                        </Box>

                    </Grid>
                </Box>

                <Box
                    display={{xs: 'block', md: 'none'}}
                    mt='5.8rem'
                >                    
                    <Grid
                        gridTemplateColumns={"1fr"}                        
                        gridRowGap={'3.9rem'}
                        px={'4.2rem'}                        
                    >                        
                        <Box mt='4.5rem' px='1.8rem'>
                            <Box
                                maxWidth={'27.9rem'}
                                fontSize={'2rem'}
                                fontWeight="600"
                                color="#495057"
                                lineHeight={'3rem'}                    
                            >
                                Compare and evaluate portfolios with any website
                            </Box>
                            <Box
                                maxWidth={'29.4rem'}
                                fontSize={'0.9rem'}
                                fontWeight="400"
                                color="rgb(73, 80, 87)"
                                lineHeight={'1.5rem'}
                                mt={'1.5rem'}                    
                            >
                                Try it now and get insights and data that can be used to create a better user experience for website visitors.
                            </Box>
                        </Box>

                        <Box mx='auto'>
                            <Box
                                width={'31.1rem'}
                                height={'16.9rem'}
                                borderRadius={'0.9rem'}
                                border= '1px solid #E9E9E9'
                                boxShadow=' 0px 12px 50px rgba(18, 38, 63, 0.1)'
                                top={'3rem'}
                                left='-2.8rem'
                            >
                                <Image
                                    src='/images/sm-feature-card-1.svg'
                                    width={423}
                                    height={215}
                                />
                            </Box>
                            <Box
                                width={'13rem'}
                                height={'12.3rem'}
                                borderRadius={'0.9rem'}
                                border= '1px solid #E9E9E9'
                                boxShadow='0px 1px 50px rgba(0, 0, 0, 0.15)'
                                position={"absolute"}
                                left={'19.5rem'}
                                top={'-1.8rem'}
                            >
                                <Image
                                    src='/images/sm-feature-card-2.svg'
                                    width={166}
                                    height={163}
                                />
                            </Box>
                        </Box>

                        <Box pt='9.1rem'>
                            <Box
                                maxWidth={'34.6rem'}
                                fontSize={'2rem'}
                                fontWeight="600"
                                color="#495057"
                                lineHeight={'3rem'}
                            >
                                Maintain multiple porfolios and do mutiple audits
                            </Box>
                            <Box
                                maxWidth={'31rem'}
                                fontSize={'1.3rem'}
                                fontWeight="400"
                                color="rgb(73, 80, 87)"
                                lineHeight={'1.9rem'}
                                mt={'1.9rem'}
                            >
                                Try it now and get insights and data that can be used to create a better user experience for website visitors.Try it now and get insights and data that
                            </Box>
                        </Box>

                        <Box>
                            <Box
                                maxWidth={'33.8rem'}
                                height={'23.4rem'}
                                borderRadius={'0.2rem'}                                
                                boxShadow='0px 10px 50px rgba(18, 38, 63, 0.15)'                                                                
                            >
                                <Image
                                    src='/images/sm-feature-card-3.svg'
                                    width={498}
                                    height={344}
                                />
                            </Box>                            
                        </Box>

                        <Box pt='5.8rem'>
                            <Box
                                maxWidth={'34.6rem'}
                                fontSize={'2rem'}
                                fontWeight="600"
                                color="#495057"
                                lineHeight={'3rem'}
                            >
                                Monitor and keep track of multiple competitors
                            </Box>
                            <Box
                                maxWidth={'32.8rem'}
                                fontSize={'1.3rem'}
                                fontWeight="400"
                                color="rgb(73, 80, 87)"
                                lineHeight={'1.9rem'}
                                mt={'1.9rem'}
                            >
                                Try it now and get insights and data that can be used to create a better user experience for website visitors. Try it now and get insights and data that can be used to create a better user experience for website visitors.
                            </Box>
                        </Box>

                        <Box left='-1.3rem'>
                            <Box
                                width={'31.2rem'}
                                height={'14rem'}
                                border= '1px solid #E9E9E9'
                                background= '#FFFFFF'
                                boxShadow= '0px 12px 24px rgba(18, 38, 63, 0.0313726)'
                            >
                                <Image
                                    src='/images/sm-feature-card-4.svg'
                                    width={412}
                                    height={185}
                                />
                            </Box>
                            <Box
                                width={'31.2rem'}
                                height={'14rem'}
                                border= '1px solid #E9E9E9'
                                background= '#FFFFFF'
                                boxShadow= '0px 12px 24px rgba(18, 38, 63, 0.0313726)'
                                left={'2.1rem'}
                                top={'-9.9rem'}
                            >
                                <Image
                                    src='/images/sm-feature-card-4.svg'
                                    width={412}
                                    height={185}
                                />
                            </Box>
                            <Box
                                width={'31.2rem'}
                                height={'14rem'}
                                border= '1px solid #E9E9E9'
                                background= '#FFFFFF'
                                boxShadow= '0px 12px 24px rgba(18, 38, 63, 0.0313726)'
                                left={'4.2rem'}
                                top={'-19.8rem'}
                            >
                                <Image
                                    src='/images/sm-feature-card-4.svg'
                                    width={412}
                                    height={185}
                                />
                            </Box>
                        </Box>
                    </Grid>                    
                
                </Box>

                <SMFeatureCard/>
            </Box>
        </>
    )
}
