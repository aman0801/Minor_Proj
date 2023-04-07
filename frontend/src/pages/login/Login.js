import './Login.css'
import Button from 'react-bootstrap/Button'
export default function Login() {
    const handleSubmit= (e)=>{

    }
    return (
        <div className="login">
        <h2>Login</h2>
        <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" required/>
            <Button type="submit" variant='dark' size='lg'>Login</Button>
        </form>
        </div>
    )
}