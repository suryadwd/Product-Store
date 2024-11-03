import { Container, useColorModeValue, VStack, Button,Box, Input, Heading, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  })
  const toast = useToast();
  const  {createProduct} = useProductStore();

  const handleAddProduct =async () => {
  
    const{success, message} = await createProduct(newProduct);
    
    if(!success){
        toast({
            title:"erroe",
            description:message,
            status:"erroe",
        })
    }else{
        toast({
            title:"success",
            description:message,
            status:"success",
        })
    }
    
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>

      <Heading as={"h1"} size = {"2xl"} textAlign={"center"} mb={8}>
        Create new Product
      </Heading>


        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>


        <VStack spacing={4}>
          <Input placeholder="Product Name"
          name = "name"
          value ={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value}) }
          />
          <Input placeholder="Price"
          name = "price"
          value ={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price:e.target.value})}
          />
          <Input placeholder="Image URL"
          name = "image"
          value ={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct,
            image:e.target.value
          })}
          />

          <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
            Add Product
          </Button>


        </VStack>


        </Box>


      </VStack>
    </Container>
  )
}

export default CreatePage
// CreatePage.jsx
