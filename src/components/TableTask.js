import { createUseStyles } from "react-jss";
import { useState } from "react";
import TableTaskItem from "./TableTaskitem";
import Modal from "./Modal";
const styles = createUseStyles({
    TableTaskDivHeader: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    TableTaskDivMain: {
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '2%',
    }
})

export default function TableTask({tableItem}) {

    const [active, setActive] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: Math.random(),
            status: 'ToDo',
            info: [],
        },
        {
            id: Math.random(),
            status: 'Doing',
            info: [],
        },
        {
            id: Math.random(),
            status: 'Done',
            info: [],
        },
    ])
    const [modalValues, setModalValues] = useState({
        priority: '',
        title: ''
    })
    const [itemId, setItemId] = useState(null)
    console.log(tasks)

    const classes = styles()

    return (
        <div className={classes.TableTaskDivHeader}>
            <h1>Table Name: {tableItem.name}</h1>
            <div className={classes.TableTaskDivMain}>
                {tasks.map((item) => <TableTaskItem key={item.id} setItemId={setItemId} item={item}  setActive={setActive}/>)}
            </div>
            <Modal setTasks={setTasks} itemId={itemId} tasks={tasks} active={active} setActive={setActive} setModalValues={setModalValues} modalValues={modalValues}/>
        </div>
    )
}