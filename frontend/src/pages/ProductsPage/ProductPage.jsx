import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,

  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";


import Header_Gradient from "../../components/ProductPage/Header_Gradient";
import styles from "./product.module.css";

function ProductPage() {

  const [data, setData] = useState(Array(3).fill(0));

  const SingleClick = () => {
    
  };

  return (
    <Container
      className={styles.prod_container}
      maxW={{ base: "100%", md: "95%", lg: "90%" }}
      minH="100vh"
      color="#262626"
    >
      <Center p={"0.5rem 0"}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Makeup</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
      <Divider bgColor={"lightgrey"} />
      {/* header Gradient */}
      <Box m={"2rem 0"}>
        <Header_Gradient name={"MAKEUP"} size={"40px"} />
      </Box>
      {/* header Gradient */}

      <SimpleGrid
        minChildWidth={{ base: "100%", md: "40%", lg: "30%" }}
        spacing="30px"
      >
        {data.map((e,i) => (
       <Card
       key={i}
            maxW="sm"
            bg={"#ffff"}
            borderRadius={"2px"}
            boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            onClick={() => SingleClick}
          >
            <CardBody>
              <Center height={"300px"}>
                <Image
                  src="https://files.myglamm.com/site-images/800x800/staydefined_3.jpeg"
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                  w={"85%"}
                  height={"85%"}
                  _hover={{
                    w: "95%",
                    h: "95%",
                  }}

                  //   border={"1px solid red"}
                />
              </Center>

              <Stack mt="6" spacing="3">
                <Heading
                  size="sm"
                  color={"black"}
                  // fontSize='20px'
                >
                  MYGLAMM SUPER SERUM COMPACT - 101N CREAM
                </Heading>
                <Text color={"black"}>
                  Skin-perfecting Compact Powder With Hyaluronic Acid
                </Text>
                <Flex color={"#111"} gap="0.5rem">
                  <Image
                    src={
                      "https://files.myglamm.com/site-images/original/plus-icon.png"
                    }
                  />
                  <span>SHADES</span>
                </Flex>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProductPage;
