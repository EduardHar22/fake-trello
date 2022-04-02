import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"

const styles = createUseStyles({
    tableItem: {
        width: '30%',
        height: '20%',
        display: 'flex',
        justifyContent: 'space-between',
        border: 'solid 2px grey',
        borderRadius: '10px',
        flexDirection: 'column',
        alignItems: 'center',   
        fontSize: '20px'
    },
    buttonDiv: {
        width: '100%',
        height: '30%',
        display: 'flex', 
        justifyContent: "space-around",
        borderTop: 'solid 1px grey',
        padding: '.5%'
    }
})

export default function TableItem({ item, tables, setTables, setTableItem }){
    const classes = styles()
    
    let delItem = () => {
        return setTables(tables.filter((elem) => {
           return elem.id !== item.id 
        }))
    } 
    
    return (

        <div className={classes.tableItem}>
            <h1>{item.name}</h1>
            <div className={classes.buttonDiv}>
            <button onClick={() => delItem()}>Delete</button>
            <Link to={`/tables/${item.name}`} onClick={() => setTableItem({name: item.name})}><button>Enter Table</button></Link>
            </div>
        </div>
    )
}