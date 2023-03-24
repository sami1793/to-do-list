import React from 'react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Text, HStack, Button, Spacer, AlertDialog, AlertDialogOverlay, 
    AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure, 
    useToast, Flex } from '@chakra-ui/react'
import { setLocalStorage } from '../../utils/localStorage'

export const Task = ({ task, taskList, setTaskList }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const toast = useToast()


    const deleteTask = (id) => {
        onClose()
        const newTaskList = [...taskList].filter((task) => task.id != id);
        setTaskList(newTaskList);
        setLocalStorage('taskListStorage', newTaskList);
        toast({
            title: 'Tarea eliminada.',
            description: "La tarea fue eliminada de la lista.",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
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
        <HStack bg='whiteAlpha.400' p={4} color='whiteAlpha.800' borderRadius='xl' shadow='xs' w='100%' h='12'
            borderBottomWidth={3} borderBottomColor='blackAlpha.700' borderLeftWidth={3} borderLeftColor='blackAlpha.500'
            justify={'space-between'} alignItems='center'>
            <Text as={task.done ? 'del' : ''} fontSize='xl' noOfLines={2} >{task.title}</Text>
            <HStack>
                <IconButton
                    colorScheme='pink'
                    aria-label='Check database'
                    variant='solid'
                    size='sm'
                    icon={<CheckIcon />}
                    onClick={() => checkedTask(task.id)}
                />
                <IconButton
                    // bg='red.400'
                    // color='white'
                    // _hover={{ bg: 'red.500' }}
                    // aria-label='Delete database'
                    colorScheme='pink'
                    variant='solid'
                    size='sm'
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
