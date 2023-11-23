import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {



  return (

    <Box mt="120px"  h="auto" w="100%" >

      <Box  h="auto" >
        <Box w="85%" m="auto">
          <Text mt={{base:"25px",md:"25px",lg:"30px"}} fontFamily={"sans-serif"} textAlign={"center"} fontSize={{base:"16px",md:"28px",lg:"36px"}} fontWeight={"800"}>ABOUT STUDYSOPT</Text>
          <Text mt={{base:"23px",md:"33px",lg:"30px"}} fontFamily={"sans-serif"} textAlign={"center"} fontSize={{base:"15px",md:"24px",lg:"30px"}} fontWeight={"800"}>QUALIFIED ONLINE TUTORS FROM  OUR INSTITUTIONS</Text>
        </Box>

        <Box mt={{base:"35px",md:"45px",lg:"60px"}} w="100%" height={{ base: "300px", md: "300px", lg: "500px" }}>
          <Image borderRadius={"10px"} m="auto" w="85%" h="100%" src="https://cdn.pixabay.com/photo/2023/08/17/11/01/indian-school-children-8196296_1280.jpg" />

        </Box>
        <Box padding="10px" h="auto" w="85%" m="auto" mt="30px">
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d" }}>Looking for extra study help? Studyspot has a team of certified Indian tutors online from the best universities who offer high-quality online tutoring sessions by employing effective teaching methods and techniques. We focus on providing one-to-one live sessions to provide comprehensive support to high school students of all curriculums. Our private online tutors are carefully handpicked to be highly adaptive and offer a series of custom scheduled sessions to prepare students for their future. Our innovative online classroom environment provides students with the closest experience to an in-person tutoring lesson.</p>
        </Box>

        <Box w="85%" m="auto">
          <Text mt="40px" fontFamily={"sans-serif"} textAlign={"center"} fontSize={{base:"16px",md:"33px",lg:"36px"}} fontWeight={"800"}>WE MEET STUDENT'S LEARNING NEEDS</Text>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "35px" }}>Our online tuition classes are organized to make learning as convenient and effective as possible. Studyspot is the perfect platform that enables students to reach their goals faster and get real results without leaving their homes. Our tutors provide the exact resources for your curriculum including comprehensive support:</p>
          <Box w="100%" m="auto" padding="10px" mt="25px">
            <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "blue", textAlign: "center", marginTop: "0px" }}>CBSE,  ICSE, IGCSE, all State boards for all subject  Like -: Mathematics, Physics, Chemistry, and all Sciences etc.....</p>
            <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "blue", textAlign: "center", marginTop: "20px" }}>International curriculum: IB, SAT, Advanced Placement, Australian curriculum</p>
            <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "blue", textAlign: "center", marginTop: "20px" }}>Competitive entrance exam support: NEET, JEE (main), JEE (advanced)</p>

          </Box>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "35px" }}>Students can benefit from our interactive whiteboard sessions, and these sessions can be recorded for future reference. Our professionals will make your life easier by providing pre-planned and well-researched tutoring sessions.</p>
          <Text mt="35px" fontFamily='sans-serif' textAlign={"center"} fontSize={"26px"} fontWeight={"600"} color="#333333 ">MISSION</Text>

          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "30px" }}>The mission is to bridge the gap experienced by individual students and teachers in routine classrooms, identify their actual needs, manage a program that caters to students of different skills and abilities to fulfill their academic and career dreams, utilizing the huge resource pool of expert teachers willing to support this concept. To give special focus to STEM subjects and languages, work alongside the existing curriculum, identify the best practices,  constantly improve the delivery of education using a program to generate jobs and encourage academic brilliance.</p>

          <Text mt="35px" fontFamily='sans-serif' textAlign={"center"} fontSize={"26px"} fontWeight={"600"} color="#333333 ">VISION</Text>

          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "30px" }}>To make education accessible to all and create a community of empathetic teachers who are willing to sacrifice and contribute to the idea to educate all. To provide a flexible, virtual environment to learn, teach, earn and build a career enhanced by frequently revisiting this community of experts.At Edugraff, your child will be nurtured to their full potential to fulfill their academic and competitive exam needs. Our experts are trained and certified to provide the best online tutoring experience to students.</p>


        </Box>

      </Box>

    </Box>
  )
}

export default About