import React, { useState } from 'react'
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
    IconButton, Text, HStack, Button, AlertDialog, AlertDialogOverlay,
    AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure,
    useToast, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input
} from '@chakra-ui/react'
import { setLocalStorage } from '../../utils/localStorage'

export const Task = ({ task, taskList, setTaskList }) => {

    const [inputEdit, setInputEdit] = useState(task.title);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const cancelRef = React.useRef();

    const toast = useToast();


    const deleteTask = (id) => {
        onClose();
        const newTaskList = taskList.filter((task) => task.id != id);
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
            return task;
        })
        setTaskList(newTaskList);
        setLocalStorage('taskListStorage', newTaskList);
    }

    const editTask = (id) => {
        onEditClose();
        const newTaskList = taskList.map((task) => {
            if (task.id == id) { task.title = inputEdit }
            return task;
        })
        setTaskList(newTaskList);
        setLocalStorage('taskListStorage', newTaskList);
        toast({
            title: 'Tarea editada.',
            description: "La tarea fue editada correctamente.",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    return (
        <HStack bg='whiteAlpha.400' p={4} color='whiteAlpha.800' borderRadius='xl' w='100%' maxHeight='20'
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
                    colorScheme='pink'
                    aria-label='Edit database'
                    variant='solid'
                    size='sm'
                    icon={<EditIcon />}
                    onClick={onEditOpen}
                />
                <IconButton
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
                                <Button colorScheme='red' onClick={() => deleteTask(task.id)} ml={3}>
                                    Eliminar
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>

                {/* <ModalDelete isOpen={isOpen} cancelRef={cancelRef} onClose={onClose} deleteTask={deleteTask} task={task}/> */}

                <>
                    <Modal
                        isOpen={isEditOpen}
                        onClose={onEditClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Editar Tarea</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <Input value={inputEdit} onChange={(e) => setInputEdit(e.target.value)} />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='teal' mr={3} onClick={() => editTask(task.id)}>
                                    Editar
                                </Button>
                                <Button onClick={onEditClose}>Cancelar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>

            </HStack>
        </HStack>
    )
}
