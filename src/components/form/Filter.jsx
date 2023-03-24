import { getLocalStorage, setLocalStorage} from '../../utils/localStorage';
import { Button, FormControl, HStack, Select, Stack } from "@chakra-ui/react"



export const Filter = ({filter, setFilter, setTaskList}) => {

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
        let newTaskList;
        setTaskList((taskList)=>{
            newTaskList = taskList.filter((task)=>task.done===false);
            return newTaskList;
        })
        setLocalStorage('taskListStorage', newTaskList)
        console.log('funciona!!')
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
                    onClick={clearTasks}>
                Limpiar tareas
            </Button>
        </HStack>
    )
}
