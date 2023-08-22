import React from 'react'
import { Heading, Flex, Text, Box, OrderedList, ListItem } from '@chakra-ui/layout'
import Image from 'next/image'
import { aboutImg } from '@/assets'

const page = () => {
  return (
    <div>
      <Heading 
        textAlign='center' 
        fontSize='48px'
        mt='3rem'
        >About us</Heading>

        <Flex flexDir='column' p='2rem'>

          {/* ========== hero section =========  */}
          <Flex gap={'1rem'} justify='center' align={'center'} mb='1.5rem' flexDir={{ base: 'column', lg: 'row'}}>
            <Image src={aboutImg} alt='about us' style={{ width: '50%', borderRadius: '18px' }}  />
            <Box w='50%'>
              <Text fontWeight={'400'} color='#888'>NGC foundation was birthed in 2019 but became recognized and registered as a non-governmental organization in 2020 with the sole aim of reducing the educational barrier amongst children in local communities and orphanage homes, implementing feeding programs and sensitizing children on health matters as well as providing medical care.</Text>
              <Text fontWeight={'400'} color='#888'>Children are the leaders of tomorrow but this will just remain a statement if the children are not given an opportunity to develop, evolve, learn, relearn and be educated in a conducive environment with knowledgeable teachers in other to achieve great things in the society and extinguish the possibility of becoming a burden in the society.</Text>
            </Box>
          </Flex>
          
          <Text fontWeight={'400'} color='#888'>In Nigeria, it was recorded that over 10 million children are out of school as well as children that receive little or no food daily and are highly prone to infectious diseases due to lack of proper sensitization and maintaining healthy practices. This is as a result of the large number of children in rural areas that are unable to be catered for by their parents not excluding the children in orphanage homes that have not been opportune to experience any form of education. These facts birthed the idea of starting NGC foundation to make an impact in the lives of children across Nigeria.</Text>

          <Heading fontSize={'26px'} fontWeight='600' mt='1.5rem'>Mission</Heading>
          <Text fontWeight={'400'} color='#888'>To impact the lives of children by implementing programs that enables community participation in providing quality and inclusive education, feeding programs and promoting good health and well-being amongst less privileged children.</Text>

          <Heading fontSize={'26px'} fontWeight='600' mt='1.5rem'>Vision</Heading>
          <Text fontWeight={'400'} color='#888'>Better education, nutrition and health for every child. </Text>

          <Heading fontSize={'26px'} fontWeight='600' mt={'1.5rem'}>OUR SDG’S</Heading>
          <Text mb='7px' fontWeight={'400'} color='#888'>According to the United Nations 2030 sustainable goals, we at NGC foundation are committed to the following;</Text>
          <OrderedList mb='10px' fontWeight={'400'} color='#888'>
            <ListItem>QUALITY AND INCLUSIVE EDUCATION FOR EVERY CHILD</ListItem>
            <ListItem>HEALTH AND WELL BEING OF CHILDREN</ListItem>
            <ListItem>ZERO HUNGER </ListItem>
          </OrderedList>

          <Heading fontSize={'26px'} fontWeight='600' mt={'1.5rem'}>AIMS AND OBJECTIVES</Heading>
          <OrderedList mb='10px' fontWeight={'400'} color='#888'>
            <ListItem>Establish welfare projects that will rehabilitate children in distress, especially orphans and the less privileged children such as feeding programs.</ListItem>
            <ListItem>Impact the lives of children by implementing programs that enables community participation in providing quality and inclusive education for disadvantaged children in these communities, providing volunteer teachers for schools that are short staffed, supporting teachers in public schools with materials that will aid learning as well as providing learning materials for children who can’t afford them and engaging them in technical skills.<br /> We also carry out programs that brings ‘out of school’ children back to school in order to encourage school enrollment. </ListItem>
            <ListItem>Assist in the development of gifted, less privileged children and capable young millennial by providing equal opportunities based on their skills and sponsoring their education, trainings and creative development.</ListItem>
            <ListItem>Empower abused estranged and less privileged women and young girls with skills and education/ counselling to fend for themselves and make a living.</ListItem>
            <ListItem>Implement projects that addresses the health and well-being of children in rural communities.</ListItem>
            <ListItem>Organize seminars, activities, and forums that will empower young people to realize their potentials.</ListItem>
          </OrderedList>

          <Heading fontSize={'26px'} fontWeight='600' mt={'1.5rem'}>Our Impacts</Heading>
          <Text fontWeight={'400'} color='#888'>Over the past 3 years, we have</Text>
          <OrderedList my='8px' fontWeight={'400'} color='#888'>
            <ListItem>Offered free education to out-of-school children in an orphanage home in Lagos.</ListItem>
            <ListItem>Fed over 200+ street kids in lagos during our first annual feeding project 2020.</ListItem>
            <ListItem>Sensitized children on Covid 19.</ListItem>
            <ListItem>Offered free education to 200+ students in a rural community in Abia state that lacked teachers.</ListItem>
            <ListItem>Offered scholarships to over 20 students who couldn’t pay their fees.</ListItem>
            <ListItem>Introduced ICT and simple computer skills to students in Abia state who haven’t used a computer before.</ListItem>
            <ListItem>Sensitized children on the importance of maintaining personal hygiene.</ListItem>
            <ListItem>Educated girls on menstrual hygiene and distributed over 180 sanitary pads to girls in rural areas.</ListItem>
            <ListItem>Organized a 2 days seminar for both genders in a public school on sexual education and sexual violence in recognition of the 16 days of activism against gender based violence.</ListItem>
            <ListItem>Fed over 200 homeless children in illorin, Kwara state in 2021.</ListItem>
            <ListItem>Carried out a cloth drive in a rural community.</ListItem>
          </OrderedList>
          <Text fontWeight={'400'} color='#888'>Our projects have been nothing but impactful with visible results.</Text>
        </Flex>
    </div>
  )
}

export default page