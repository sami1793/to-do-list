import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Text, HStack, StackDivider, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

export const Task = ({task, taskList, setTaskList}) => {


    const deleteTask = (id) =>{
        const newTaskList = [...taskList].filter((task)=>task.id!=id);
        setTaskList(newTaskList);
        setLocalStorage('taskListStorage',newTaskList)
    }

    const checkedTask = (id) =>{
        const newTaskList = [...taskList].map((task)=> {
            if(task.id==id) {task.done=!task.done}            
            return task
        } )          
        
            
        setTaskList(newTaskList);
        setLocalStorage('taskListStorage',newTaskList)
    }

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
                    onClick={()=> checkedTask(task.id)}
                />
                <IconButton
                    bg='red.400'
                    color='white'
                    _hover={{bg:'red.500'}}
                    aria-label='Search database'
                    icon={<DeleteIcon />}
                    onClick={()=> deleteTask(task.id)}
                />
            </HStack>
        </HStack>
    )
}
