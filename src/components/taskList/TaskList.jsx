import { IconButton, Box, VStack, Text, HStack, StackDivider, Spacer } from '@chakra-ui/react'
import { Task } from '../task/Task'

export const TaskList = () => {
  return (
    <VStack>
        <Task />
        <Task />
        <Task />
    </VStack>
  )
}
