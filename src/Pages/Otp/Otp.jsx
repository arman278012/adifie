import { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import axios from "axios";


const OtpInput = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");


  const handleOtpVerification = () => {
    setLoading(true);
    setError(null);

    axios
      .post( 'https://adifie.cyclic.app/user//verify', {
        email,
        otp,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App  dark:bg-black h-screen flex flex-col justify-center align-middle ">
      <div
        className={`flex items-center   bg-gradient-to-tr from-slate-900 to-gray-700 text-white text-sm font-bold px-4 py-3 ${
          error ? "block" : "hidden"
        }`}
        role="alert"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>{error}</p>
      </div>
      
      <div className="flex flex-col items-center justify-center  md:h-[60vh] lg:py-0 otp-container h-[60vh] bg-gray-300 py-10   rounded-lg container mx-auto max-w-sm md:max-w-lg px-10">
        <h1 className="text-[26px]  text-black font-semibold mb-2">Enter OTP</h1>
        <p className="text-[18px] text-gray-500 mb-5 font-medium ">Otp has been sent to your email !!</p>
        <input
          type="email"
          className="block mb-6 rounded-md mx-auto h-12 w-[100%] px-4 text-sm font-medium text-gray-900 "
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter OTP"
          className="block mb-6 mx-auto h-12 w-[100%] px-4 py-4 text-sm font-medium text-gray-900  rounded-md"
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={handleOtpVerification}
          disabled={loading}
          className="w-full py-4 text-white bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  text-center  "
        >
          {" "}
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        <p className="mt-4 text-[16px] font-semibold">Dont get an otp ? 
        <Link to = "/signup">
        <span className="text-gray-500 ml-4 underline underline-offset-4 cursor-pointer">Sign Up Agian </span>
        </Link> </p>
      </div>
    </div>
  );
};

export default OtpInput;
