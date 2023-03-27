import { getLocalStorage, setLocalStorage} from '../../utils/localStorage';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, HStack, Select, Stack, useDisclosure, useToast } from "@chakra-ui/react"
import React from 'react';



export const Filter = ({filter, setFilter, setTaskList}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const toast = useToast();

    const filterTask = (e) => {
        setFilter(e.target.value);
        const copyTaskList = getLocalStorage('taskListStorage')
        let newTaskList
        switch (e.target.value) {
            case 'completadas':
                newTaskList = copyTaskList.filter((task) => task.done === true);
                setTaskList(newTaskList);
                break;
            case 'pendientes':
                newTaskList = copyTaskList.filter((task) => task.done === false);
                setTaskList(newTaskList);
                break;
            default:
                setTaskList(copyTaskList)
                break;
        }
    }

    const clearTasks = () =>{
        onClose();
        let newTaskList;
        setTaskList((taskList)=>{
            newTaskList = taskList.filter((task)=>task.done===false);
            return newTaskList;
        })
        setLocalStorage('taskListStorage', newTaskList)
        toast({
            title: 'Tareas elimindas',
            description: "Se limpiaron todas las tareas realizadas",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }

    return (
        <HStack w={'100%'} mt={5} gap={2}>
            <FormControl>
                <Select bg={'whiteAlpha.100'} color='white' flexGrow='1'
                        value={filter} onChange={filterTask} >
                    <option value='todas'>Todas</option>
                    <option value='completadas'>Completadas</option>
                    <option value='pendientes'>Pendientes</option>
                </Select>
            </FormControl>
            <Button paddingInline={8} colorScheme='blackAlpha' flexGrow='1'
                    onClick={onOpen}>
                Limpiar tareas
            </Button>

            <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Eliminar tareas completadas
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                ¿Está seguro de eliminar TODAS las tareas completadas? 
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancelar
                                </Button>
                                <Button colorScheme='red' onClick={clearTasks} ml={3}>
                                    Eliminar
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
        </HStack>
    )
}
