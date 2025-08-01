import e from "express";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleChange = () => {
    console.log(e.target.value);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left  */}
        <div className="flex-1">
          <Link to="/" className=" text-sm sm:text-4xl font-bold  text-black">
            <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
              Blog
            </span>{" "}
            Post
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            nesciunt culpa placeat at suscipit ratione laudantium perspiciatis
            quisquam minus officiis?
          </p>
        </div>
        {/* right  */}
        <div className="flex-1">
          <form className="flex flex-col gap-3 mt-4 md:mt-0">
            <div>
              <Label value="your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 mt-5">
            <span>Have an account?</span>
            <Link className="text-blue-600" to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
