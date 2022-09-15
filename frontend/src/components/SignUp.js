export default function SignUp() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="mx-auto border" style={{ width: '650px' }}>
                    <h2 className="col text-center my-5">Sign Up</h2>
                    <form className="row g-3" action="/users/create" method="post">
                        <div className="col-md-6">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" name="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" name="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" name="password" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputConfirmPassword4" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="inputconfirmPassword4" name="confirm_password" />
                        </div>
                        <div className="col text-center my-5">
                            <button type="submit" className="btn btn-primary mx-auto">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}