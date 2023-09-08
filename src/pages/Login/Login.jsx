import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../firebase/firebase.config";
import signinImg from "../../assets/images/login.svg";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((resutlt) => {
        const user = resutlt.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Image src={signinImg} className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2 className="text-secondary-emphasis">Sign in</h2>
            <p className="text-secondary">
              Enter details to log in your account
            </p>
            <form onSubmit={handleLogin}>
              {/*  Email input */}
              <div className="form-outline mb-4">
                <input
                  name="email"
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  name="password"
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </div>

              <div className="mb-2">
                <span className="fs-6 fw-light">
                  Need an account?{" "}
                  <a
                    className="text-decoration-none fw-normal text-primary"
                    href="/"
                  >
                    Register
                  </a>
                </span>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Login
              </Button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
