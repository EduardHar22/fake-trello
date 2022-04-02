import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import TableTask from './components/TableTask';
import {createUseStyles} from 'react-jss'


const styles = createUseStyles({

  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

})

const getLocalStorageUser = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : {}
}

const getLocalStorageTables = () => {
  const tables = localStorage.getItem('tables')
  return tables ? JSON.parse(tables) : []
}

const getLocalStorageTableItems = () => {
  const tableItems = localStorage.getItem('tableItems')
  return tableItems ? JSON.parse(tableItems) : {}
}

function App() {

  const classes = styles()
  const [login, setLogin] = useState(getLocalStorageUser())
  const [tables, setTables] = useState(getLocalStorageTables())
  const [tableItem, setTableItem] = useState(getLocalStorageTableItems())

  console.log(tables, tableItem)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(login))
  },[login])

  useEffect(() => {
    localStorage.setItem('tables', JSON.stringify(tables))
  },[tables])

  useEffect(() => {
    localStorage.setItem('tableItems', JSON.stringify(tableItem))
  },[tableItem])

  
  return (
    <div className={classes.header}>
      <Routes>
        <Route path='/' element={<SignIn login={login} setLogin={setLogin}/>}/>
        <Route path='/home' element={<Home tables={tables} setTables={setTables} login={login} setTableItem={setTableItem}/>}/>
        <Route path='/user' element={<ProfilePage login={login} setLogin={setLogin} setTables={setTables}/>}/>
        <Route path={`/tables/${tableItem.name}`} element={<TableTask tableItem={tableItem}/>}/>
      </Routes>
    </div> 

  );
}

export default App;
