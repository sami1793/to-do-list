import React from 'react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Text, HStack, Button, Spacer, AlertDialog, AlertDialogOverlay, 
    AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from '@chakra-ui/react'
import { setLocalStorage } from '../../utils/localStorage'

export const Task = ({ task, taskList, setTaskList }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()


    const deleteTask = (id) => {
        onClose()
        const newTaskList = [...taskList].filter((task) => task.id != id);
        setTaskList(newTaskList);
        setLocalStorage('taskListStorage', newTaskList)
    }

    const checkedTask = (id) => {
        const newTaskList = [...taskList].map((task) => {
            if (task.id == id) { task.done = !task.done }
            return task
        })


        setTaskList(newTaskList);
        setLocalStorage('taskListStorage', newTaskList)
    }

    return (
        <HStack bg='white' p={4} color='orange.800' w={400} borderRadius='xl' shadow='xs'
            borderBottomWidth={5} borderBottomColor='pink.400' borderLeftWidth={5} borderLeftColor='pink.400'
            justify={'space-between'} alignItems='center'>
            <Text as={task.done ? 'del' : ''} fontSize='xl' noOfLines={2} >{task.title}</Text>
            
            <HStack>
                <IconButton
                    colorScheme='green'
                    aria-label='Check database'
                    icon={<CheckIcon />}
                    onClick={() => checkedTask(task.id)}
                />
                <IconButton
                    bg='red.400'
                    color='white'
                    _hover={{ bg: 'red.500' }}
                    aria-label='Delete database'
                    icon={<DeleteIcon />}
                    onClick={onOpen}
                />
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Eliminar tarea
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                ¿Está seguro de eliminar la tarea? No podra revertirlo luego.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancelar
                                </Button>
                                <Button colorScheme='red' onClick={()=>deleteTask(task.id)} ml={3}>
                                    Eliminar
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </HStack>
        </HStack>
    )
}
