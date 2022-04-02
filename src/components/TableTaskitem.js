import { createUseStyles } from "react-jss";

const styles = createUseStyles({

    mainDiv: {
        width: '20%',
        minHeight: '20%',
        border: '2px solid grey',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    h1name: {
        width: '100%',
        borderBottom: '2px solid grey',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5%'
    }

})

export default function TableTaskItem({ item, setItemId, setActive }){

    const classes = styles()
    const addTask = () => {
        setActive(true)
        setItemId(item.id)
    }

    return(
        <div className={classes.mainDiv}>
            <div className={classes.h1name}>
                <h1 >{item.status}</h1>
            </div>
            
            <button onClick={() => addTask()}>Add Task</button>
            
        </div>
    )
}