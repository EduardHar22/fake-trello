import { createUseStyles } from 'react-jss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import TableItem from './TableItem'

const styles = createUseStyles({

    homeDiv: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2%'
    },
    inputTable: {
        width: '50%',
        height: '10%',
        fontSize: '40px',
        textAlign: 'center',
    },
    buttonAdd: {
        width: '20%',
        height: '5%',
        marginTop: '1%',
        backgroundColor: 'white',
        fontSize: '15px',
        marginBottom: '2%'   
    },
    tablesDiv: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    header: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2% 0 2%'
    }
})

export default function Home({tables, setTables, login, setTableItem}){

    let tableAdd = () => {
        if(tableName.length !== 0){
            setTables([
                ...tables,
                {
                    id: Math.random(),
                    name: tableName,
                }
            ])
            setTableName('')
        }
    }

    const [tableName, setTableName] = useState('')
    const classes = styles()

    return (
        <div className={classes.homeDiv}>
            <div className={classes.header}>
                <h1>Hello {login.username}</h1>
               <Link to='/user'><h1>User Profile</h1></Link>
            </div>
            <input className={classes.inputTable} type='text' placeholder='Table Name' value={tableName} onChange={(e) => {
                setTableName(e.target.value)
            }}></input>
            <button className={classes.buttonAdd} onClick={() => tableAdd()}>Add Table</button>
            <div className={classes.tablesDiv}>
                {tables.map((item) => <TableItem key={item.id} item={item} tables={tables} setTables={setTables} setTableItem={setTableItem}/>)}
            </div>
        </div>
    )
}