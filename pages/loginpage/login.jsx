export default function login() {

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
      };
    
      const labelStyles = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        textAlign: 'left',
        width: '100%',
      };
    
      const inputStyles = {
        padding: '0.5rem',
        borderRadius: '0.5rem',
        border: 'none',
        marginBottom: '1rem',
        width: '100%',
        fontSize: '1.2rem',
      };
    
      const submitButtonStyles = {
        padding: '0.5rem',
        borderRadius: '0.5rem',
        border: 'none',
        backgroundColor: '#2ecc71',
        color: '#fff',
        cursor: 'pointer',
        width: '100%',
        fontSize: '1.2rem',
        fontWeight: 'bold',
      };
    
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <form action='/api/crediential/login' method="post" style={formStyles}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Login</h1>
            <label style={labelStyles}>Email address</label>
            <input type="email" name="email" placeholder="Type your email" style={inputStyles} />
            <label style={labelStyles}>Password</label>
            <input type="password" name="password" placeholder="Enter your password" style={inputStyles} />
            <input type="submit" value="Login" style={submitButtonStyles} />
          </form>
        </div>
      );
    }