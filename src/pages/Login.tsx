

const Login = () => {
	const isAuthenticated = false;
  const loginAsUser = async () => {
    try {
    } catch (err) {
      console.log('err', err)
    }
  }

  const loginAsAdmin = async () => {
    try {
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div className="content">
      {isAuthenticated ? (
        <>
          <p>You're logged-in.</p>
        </>
      ) : (
        <>
          <p>You're in the Home page. Login to visit protected pages.</p>
          <button className="button" onClick={loginAsUser}>
            Login as User
          </button>
          <button className="button" onClick={loginAsAdmin}>
            Login as Admin
          </button>
        </>
      )}
      <button className="button" onClick={() => {}}>
        Authenticated request
      </button>
    </div>
  )
}

export default Login