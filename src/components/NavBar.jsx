import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer, Avatar, Text, Badge, Button} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex>
        <Avatar src="../src/assets/hogar.png" />
  <Box ml='3'>
    <Text fontWeight='bold'>
      H&M SOLUTIONS
      <Badge ml='1' colorScheme='green'>
        ONLINE
      </Badge>
    </Text>
    <Text fontSize='sm'>Soluciones para tu hogar</Text>
  </Box>
  <Spacer>

  </Spacer>
        <Menu>
  <MenuButton as={Button} colorScheme='green'>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem  as={Button} colorScheme='green' >Productos</MenuItem>
    <MenuItem as={Button} colorScheme='green' >Contacto</MenuItem>
    <MenuItem as={Button} colorScheme='green' >Blog</MenuItem>
    <MenuItem as={Button} colorScheme='green' >Sobre Nosotros</MenuItem>
  </MenuList>
</Menu>
  <Box p='4'>
    <CartWidget/>
  </Box>
</Flex>
    </div>
  )
}

export default NavBar