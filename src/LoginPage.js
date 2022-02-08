import { Link } from 'react-router-dom';

function Login() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        // localStorage.setItem('name', name);

    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Name: <input type={"text"} name='name'></input></label>
                <label>Password: <input type={"password"} ></input></label>
                <input type={"submit"} Value="Login"></input>
            </form>
        <button>
        <Link to="/home">Login</Link>  
            </button>
        </div>
    );
  }
  
  export default Login;