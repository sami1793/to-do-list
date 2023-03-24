import { getLocalStorage} from '../../utils/localStorage';
import { Button, FormControl, HStack, Select } from "@chakra-ui/react"



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
    return (
        <HStack w={'100%'} mt={5}>
            <FormControl>
                <Select bg={'whiteAlpha.100'} color='white' value={filter} onChange={filterTask}>
                    <option value='todas'>Todas</option>
                    <option value='completadas'>Completadas</option>
                    <option value='pendientes'>Pendientes</option>
                </Select>
            </FormControl>
            <Button paddingInline={8} colorScheme='blackAlpha'>Limpiar tareas</Button>
        </HStack>
    )
}
