import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { 
  Box, Heading, Text, HStack, IconButton, useColorModeValue, useToast, useDisclosure, 
  ModalOverlay, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input ,ModalFooter,
  Button
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { useProductStore } from '../../store/product';

const ProductCard = ({ product }) => {
  
  const [updatedProduct, setupdatedProduct] = useState(product)


  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const { deleteProduct } = useProductStore();
  
  const handelDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
      });
    }
  };

  const {updateProduct} =useProductStore()
  const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

  return (
    <Box shadow="lg" rounded="lg" overflow="hidden" bg={bg}>
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2} color={textColor}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color="blue.200" mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue"
          
          />
          <IconButton icon={<DeleteIcon />} onClick={() => handelDeleteProduct(product._id)} colorScheme="red" />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Product Name" name="name" value={updatedProduct.name}
              onChange={(e) => setupdatedProduct({...updatedProduct, name:e.target.value})}
              />
              <Input placeholder="Price" name="price" type="number" value={updatedProduct.price} 
              onChange={(e) => setupdatedProduct({...updatedProduct, price:e.target.value})}
              
              />
              <Input placeholder="Image URL" name="image" value={updatedProduct.image} 
              onChange={(e) => setupdatedProduct({...updatedProduct, image:e.target.value})}
              
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button bg='Blue' mr={3} 
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button onClick={onClose}>
            Cancel
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
