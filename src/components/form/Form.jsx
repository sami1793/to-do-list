import { FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button, HStack } from '@chakra-ui/react'

export const Form = () => {
    const buttonStyle = {
        bg:'purple.700',
        color:'white',
        ':hover':{
            color:'purple.700',
            bg:'gray.100'
        }
    }
    return (
        <FormControl mb={5}>
            <HStack>
                <Input type='text' placeholder='Ingrese nueva tarea' bg='white' focusBorderColor='red.200' />
                <Button bg='gray.700' color='white' _hover={{bg:'gray.100', color:'pink.600'}}>Agregar</Button>
            </HStack>
            <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
        </FormControl>
    )
}
