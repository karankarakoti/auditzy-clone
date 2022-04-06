import { Box, Flex, Grid } from 'atoms'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from 'public/assets/icons/Logo'
import React from 'react'

const footerData = [
  {
    title: 'Solutions',
    links: [
      'Lighthouse Monitoring',
      'Competitor Analysis',
      'Compare Analysis'
    ]
  },
  {
    title: 'Resources',
    links: [
      'Blog',
      'Release Notes',
      'Performance Newsletter',
    ]
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Careers',
      'Terms of Service',
      'Privacy Policy',
      'GDPR'
    ]
  },
  {
    title: 'Get help',
    links: [
      'Help Docs',
      'Contact & Support',
      'FAQs'      
    ]
  }      
]

export const Footer = () => {
  return (
    <Box
      height={{xs: '65.7', md: '68rem', lg: '56.6rem' }}
      background='#2A3042'
    >
      <Box
        maxWidth={{xs: '36rem', md: '64rem', lg: '111.6rem'}}
        mx='auto'
      >
        <Grid          
          pt={{xs: '2.5rem', md: '7.7rem'}}            
          gridTemplateColumns={{xs: '1fr', md: '1fr 4fr', lg: '1fr 4fr'}}        
          gridColumnGap={{xs: '3rem', md: '11rem', lg: '2.5rem'}}
        >
          <Box
            height={'3.9rem'}
            width={'12rem'}
            top={'-3.5rem'}
            display={{xs: 'none', lg: 'block'}}
          >                     
            <Image
              src='/images/jamsfy-logo.png'
              alt='Jamsfy Logo'
              width={500}
              height={500}
              objectFit='contain'
            />            
          </Box>
          <Box
            height={{xs: '4rem'}}
            width={{xs: '12rem'}}            
            display={{xs: 'block', lg: 'none'}}  
            mb={{xs: '10rem', md: '0'}}      
            top={{xs: '3.5rem', md: '-0.5rem'}}    
          >
            <Box
              height={{xs: '4rem'}}
              width={{xs: '12rem'}}              
              display={{xs: 'block', lg: 'none'}}
            >
              <Logo/>               
            </Box>                     
          </Box>

          <Grid
            gridTemplateColumns={{xs: 'repeat(2, 16rem)', md: 'repeat(2, 16rem)', lg: 'repeat(4, 1fr)'}}
            gridColumnGap={{xs: '4rem', md: '8rem', lg: '1.5rem'}}
            gridRowGap={{xs: '3rem', md: '5.9rem', lg: '2rem'}}
          >
            {
              footerData.map((item, index) => (
                <Flex
                  flexDirection='column'
                  alignItems='start'
                  justifyContent='start'
                  key={index}
                  mb={{xs: '3rem', md: '0'}}                     
                >
                  <Box
                    fontSize={{xs: '1.8rem', md: '1.6rem'}}
                    color='#fff'
                    lineHeight={{xs: '2.7rem', md: '2.4rem'}}
                    mb={{xs: '1.4rem', md:'1.2rem'}}
                    fontWeight={'500'}
                  >
                    {item.title}
                  </Box>
                  {
                    item.links.map((link, i) => (
                      <Box
                        fontSize={{xs: '1.3rem', md: '1.3rem'}}
                        color='#fff'
                        lineHeight={{xs: '1.6rem', md: '1.9rem'}}
                        mb={{xs: '1.2rem', md: '1.36rem'}}
                        key={i}
                        opacity={'0.5'}
                        fontWeight={'400'}
                        width={'100%'}
                      >
                        <Link href='#' passHref>
                          {link}
                        </Link>                        
                      </Box>
                    ))
                  }
                </Flex>
              ))
            }
          </Grid>
          
          
        </Grid>

        <Box
          width={{md: '52.7rem', lg: '111.6rem'}}
          mx='auto'
          height={{md: '0.1rem'}}
          background='rgba(255, 255, 255, 0.101961)'
          mt={{md: '6.3rem', lg: '8.6rem'}}
          display={{xs: 'none', md: 'block'}}
        />

        <Box
          mt={{xs: '6.7rem', md: '', lg: '3.2rem'}}
          display={'flex'}
        >
          <Box
            fontSize={'1.6rem'}
            lineHeight={'2.4rem'}
            fontWeight={'300'}
            color='#fff'
            mr={{xs: '2.7rem', md: '', lg: '2rem'}}
          >
            Follow Us On:
          </Box>
          {
            [1,2,3].map((item, index) => (
              <Box
                width={'2.5rem'}
                height={'2.5rem'}
                mr={'1.9rem'}
                key={index}
              >
                <Image
                  src='/images/linkedin.svg'
                  alt='linkedin'
                  width={100}
                  height={100}
                />
              </Box>
            ))
          }
        </Box>
        
      </Box>

      <Box
        height={{xs: '7.7rem', md: '9.2rem', lg: '12.6rem'}}
        background='#242938'
        mt={{xs: '2.6rem', md: '3.3rem', lg: '3rem'}}
      >
        <Box
          fontSize={{xs: '1rem', md: '1.3rem'}}
          lineHeight={{xs: '1.5rem', md: '1.9rem'}}
          pt={{xs: '2.4rem', md: '2.6rem'}}
          fontWeight={'400'}
          color='rgba(255, 255, 255, 0.498039)'
          textAlign={{xs: 'center', md: 'none'}}
          maxWidth={{xs: '27rem', md: '60.1rem'}}
          mx={{xs: 'auto', md: 'none'}}
          ml={{xs: 'auto', md: '6.2rem', lg: '16rem'}}
        >
          Auditzy is the trading name of Jamsfy Technologies Pvt Ltd © 2021 - 2022 All Rights Reserved.
        </Box>
      </Box>
    </Box>
  )
}