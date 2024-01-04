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
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d" }}>Welcome to STUDYSPOT INDIA PRIVATE LIMITED, a pioneering educational platform recognized by the Government of India as an esteemed edutech startup. At STUDYSPOT [Home Tuition Services], we redefine the landscape of home tuition services, both offline and online, with a commitment to excellence and innovation.</p>
        </Box>

        <Box w="85%" m="auto"  h="auto" mt="30px">
        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"}>About Us</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>TUDYSPOT is more than just a tutoring service; it's a recognized edutech startup dedicated to providing unparalleled educational experiences. Our government recognition reflects our commitment to quality and innovation in the education sector.</p>
        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Our Offerings</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>Experience personalized home tuition services, tailored to meet the unique needs of students from Grade 1st to Graduate level.</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" , }}> Our team consists of the best-skilled, qualified, and experienced tutors who are passionate about nurturing the potential of every student.</p>
        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Subjects We Cover</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>Choose from a diverse range of subjects, including mathematics, science, social science, language (English, Hindi...), and computer science.</p>

        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Extracurricular Activities</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>STUDYSPOT goes beyond academics, offering opportunities for enriching extracurricular activities, from dance to music, drawing to creative writing.</p>

        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Join Us</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>Educators passionate about teaching can join our community by registering on our website. As a recognized edutech startup, we emphasize collaboration to create impactful learning experiences.</p>

        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Education Seekers</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>For those seeking education, posting your requirements on our website is simple and efficient. Let us connect you with the best-suited tutors to meet your unique learning needs.</p>

        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Flexible Learnin</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>Experience the STUDYSPOT advantage with both offline and online options. Our flexible timing ensures that learning seamlessly fits into your schedule.</p>

        <Text  fontFamily={"sans-serif"}  fontSize={{base:"16px",md:"18px",lg:"18px"}} fontWeight={"600"} mt="25px">Free Demo Classes</Text>
        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>Explore our offerings confidently with our 100% FREE DEMO CLASSES. It's an opportunity to witness the STUDYSPOT difference firsthand.</p>

        <p style={{ fontFamily: "sans-serif", fontSize: "17.5px", color: "#8d8d8d" ,marginTop:"5px" }}>Discover a new era of education with STUDYSPOT, Join us today - A recognized edutech startup, where excellence meets opportunity. Together, we're shaping the future of education in India, one personalized learning experience at a time.</p>


        </Box>

        <Box w="85%" m="auto">
          <Text mt="40px" fontFamily={"sans-serif"} textAlign={"center"} fontSize={{base:"16px",md:"33px",lg:"36px"}} fontWeight={"800"}>WE MEET STUDENT'S LEARNING NEEDS</Text>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "35px" }}>Our online tuition classes are organized to make learning as convenient and effective as possible. Studyspot is the perfect platform that enables students to reach their goals faster and get real results without leaving their homes. Our tutors provide the exact resources for your curriculum including comprehensive support:</p>
          <Box w="100%" m="auto" padding="10px" mt="25px">
            <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "blue", textAlign: "center", marginTop: "0px" }}>CBSE,  ICSE, IGCSE, all State boards for all subject  Like -: Mathematics, Physics, Chemistry, and all Sciences etc.....</p>
            {/* <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "blue", textAlign: "center", marginTop: "20px" }}>International curriculum: IB, SAT, Advanced Placement, Australian curriculum</p>
            <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "blue", textAlign: "center", marginTop: "20px" }}>Competitive entrance exam support: NEET, JEE (main), JEE (advanced)</p> */}

          </Box>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "35px" }}>Students can benefit from our interactive whiteboard sessions, and these sessions can be recorded for future reference. Our professionals will make your life easier by providing pre-planned and well-researched tutoring sessions.</p>
          <Text mt="35px" fontFamily='sans-serif' textAlign={"center"} fontSize={"26px"} fontWeight={"600"} color="#333333 ">MISSION</Text>

          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "30px" }}>At the heart of STUDYSPOT's mission is a dedication to empowering students, tutors, and society:</p>

          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d",}}>For Students : Access quality education with personalized home tuition services, convenience, affordability, and a focus on holistic development</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d",}}>For Tutors : Unlock job opportunities, enhance skills through training programs, and enjoy flexibility in scheduling and pricing.</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d",}}>For Society : Empower women through job opportunities, improve overall education quality, and bridge the gap between demand and availability of qualified teachers.</p>

          <Text mt="35px" fontFamily='sans-serif' textAlign={"center"} fontSize={"26px"} fontWeight={"600"} color="#333333 ">VISION</Text>

          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#8d8d8d", marginTop: "30px" }}>Our vision is to be a leading force in transforming education globally. We aspire to create a world where every learner has access to personalized, high-quality education, and every educator has the platform and resources to excel in their profession. STUDYSPOT aims to be a catalyst for positive change, impacting students, tutors, and society at large.</p>


        </Box>

      </Box>

    </Box>
  )
}

export default About