import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";
import signupImg from "../../assets/images/signup.svg";

const Register = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleReg = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((resutlt) => {
        const user = resutlt.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Image src={signupImg} className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2 className="text-secondary-emphasis">Sign Up</h2>
            <p className="text-secondary">
              Enter details to create your account
            </p>
            <form onSubmit={handleReg}>
              {/*  Name input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control form-control-lg"
                  placeholder="Name"
                />
              </div>

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
                  Already Registered?{" "}
                  <a
                    className="text-decoration-none fw-normal text-primary"
                    href="/login"
                  >
                    Login
                  </a>
                </span>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
