import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    modal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        position: 'fixed',
    },
    notActive: {
        display: 'none',
    },
    modalIn: {
        width: '70%',
        height: '70%',
        backgroundColor: 'white',
        border: 'grey solid 2px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        width: '60%',
        height: '20%',
        textAlign: 'center',
        fontSize: '50px',
    },
    select: {
        width: '50%',
        height: '10%',
        fontSize: '20px'
    }
});

export default function Modal({ setTasks, itemId, tasks, active, setActive, setModalValues, modalValues }){

    const classes = styles()

    const addTaskClick = () => {
        tasks.map((elem) => {
            if(elem.id === itemId){
                return setTasks([
                    {
                        id: elem.id,
                        status: elem.status,
                        info: [ 
                            ...elem.info,
                            {
                                ...modalValues
                            }
                        ]
                    }
                ])
            }
            
            
        })
    }

    return(
        <div className={active ? classes.modal : classes.notActive} onClick={() => setActive(!active)}>
            <div className={classes.modalIn} onClick={e => e.stopPropagation()}>
                    <input className={classes.input} type="text" placeholder="Title" value={modalValues.title} onChange={(e) => {
                        setModalValues({
                            title: e.target.value,
                            priority: modalValues.priority
                        })
                    }}></input>
                    <select className={classes.select} value={modalValues.priority} onChange={(e) => {
                        setModalValues({
                            title: modalValues.title,
                            priority: e.target.value,
                        })
                    }}>
                        <option value='Low Priority'>Low Priority</option>
                        <option value='Medium Priority'>Medium Priority</option>
                        <option value='High Priority'>High Priority</option>
                    </select>
                    <button onClick={() => addTaskClick()}>Add Task</button>
            </div>
        </div>
    )
}