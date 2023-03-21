import './SignUp.css'
export default function SignUp() {
    const handleSubmit = (e) => {
    }    
    return (
        <div className="signup">
        <h2>SignUp</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}} className='form'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" required/>
            <label htmlFor="voterId">Voter Id</label>
            <input type="text" name="voterId" placeholder="Enter your voter id" required/>
            <label htmlFor="metamaskId">Metamask Id</label>
            <input type="text" name="metamaskId" placeholder="Enter your metamask id" required/>
            <button type="submit" className="submit-button">SignUp</button>
        </form>    
        </div>
    )
}