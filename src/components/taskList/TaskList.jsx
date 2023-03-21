import { IconButton, Box, VStack, Text, HStack, StackDivider, Spacer } from '@chakra-ui/react'
import { Task } from '../task/Task'

export const TaskList = ({taskList}) => {
  return (
    <VStack>
        {taskList.map((task, index)=>(
            <Task key={index} task={task}/>
        ))}
    </VStack>
  )
}
