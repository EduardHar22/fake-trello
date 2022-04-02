import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom';

const styles = createUseStyles({
    formDiv: {
        width: "100%",
        height: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
    },
    form: {
        width: '30%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
    },
    inputUsername: {
        width: '50%',
        marginBottom: '5%',
        height: '10%',
    },
    inputPassword: {
        width: '50%',
        height: '10%',
        marginBottom: '10%',
    }
})

export default function SignIn({setLogin, login}){

    const classes = styles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let signInSubmit = () => {

       setLogin({
           isLoggedIn: true,
           username: username,
           password: password,
       })
       setUsername('')
       setPassword('')
    }

    return (
        <div className={classes.formDiv}>
            <div className={classes.form}>
                <input className={classes.inputUsername} type='text' value={username} placeholder='Username' onChange={(e) => {
                    setUsername(e.target.value)
                }}></input>
                <input className={classes.inputPassword} type='password' value={password} placeholder='Password' onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
               <Link to='/home'><button onClick={() => {
                    signInSubmit()
                }}>Submit</button></Link>
            </div>
        </div>
    )
}