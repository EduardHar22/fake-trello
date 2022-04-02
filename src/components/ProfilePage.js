import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import user_img from '../images/user_img.png'

const style = createUseStyles({

    mainDiv: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },
    userCard: {
        width: '30%',
        height: '70%',
        border: 'solid 2px grey',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    img: {
        width: '50%',
        height: '50%',
    }
})

export default function ProfilePage({login, setLogin, setTables}){

    const logOut = () => {
        setLogin({})
        setTables([])
    }

    const classes = style()
    
    return(
        <div className={classes.mainDiv}>
            <Link to='/home'><h1>Back to HomePage</h1></Link>
            <Link to='/'><h1 onClick={() => logOut()}>Log Out</h1></Link>
            <div className={classes.userCard}>
                <img className={classes.img} src={user_img} alt='img'/>
                <h1>{login.username}</h1>
            </div>
        </div>
    )
}