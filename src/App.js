import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  console.log("errors", errors)

  return (
    <div className="container">
      <div className="row">

        <div className="column">
          <div className="left-half">

            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/*First Name*/}

              <p className="input-label">First Name</p>

              <input
                type="name"
                placeholder="First Name"
                {...register("firstname", {
                  required: true
                })} />
              {errors.firstname &&
                <span className="error">
                  {errors.firstname.type === "required" && "This field is required."}
                </span>
              }

              {/*Last Name*/}
              <p className="input-label">Last Name</p>

              <input
                type="name"
                placeholder="Last Name"
                {...register("lastname", {
                  required: true
                })} />
              {errors.lastname &&
                <span className="error">
                  {errors.lastname.type === "required" && "This field is required."}
                </span>
              }

              {/*Email*/}
              <p className="input-label">Email</p>

              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })} />
              {errors.email &&
                <span className="error">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email Address."}
                </span>
              }

              {/*Phone*/}
              <p className="input-label">Phone Number </p>

              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", {
                  required: true,
                })} />
              {errors.phone &&
                <span className="error">
                  {errors.phone.type === "required" && "This field is required."}
                </span>
              }

              {/*Message*/}
              <p className="input-label">Message</p>
              <input
                className="input"
                type="text"
                placeholder="Write Your Message"
                {...register("message", {
                  required: true
                })} />
              {errors.message &&
                <span className="error">This field is required </span>
              }

              {/*Submit*/}
              <input className="submit" type="submit" value="Send Mesage" />

            </form>
          </div>

        </div>

        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            alt="car-wheel" />
        </div>

      </div>
    </div >
  );
}

export default App;
