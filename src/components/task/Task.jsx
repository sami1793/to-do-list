import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Text, HStack, StackDivider, Spacer } from '@chakra-ui/react'
export const Task = ({task}) => {
    return (
        <HStack bg='white' p={4} color='orange.800' w={400} borderRadius='xl'shadow='xs'
        borderBottomWidth={5} borderBottomColor='red.400' borderLeftWidth={5} borderLeftColor='red.400' >
            <Text as={task.done?'del':''} fontSize='xl'noOfLines={2} >{task.title}</Text>
            <Spacer></Spacer>
            <HStack>
                <IconButton
                    colorScheme='green'
                    aria-label='Search database'
                    icon={<CheckIcon />}
                />
                <IconButton
                    bg='red.400'
                    color='white'
                    _hover={{bg:'red.500'}}
                    aria-label='Search database'
                    icon={<DeleteIcon />}
                />
            </HStack>
        </HStack>
    )
}
