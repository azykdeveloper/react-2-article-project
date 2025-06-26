import { useState } from "react";
import MyInput from "../components/ui/MyInput";
import { useDispatch, useSelector } from "react-redux";
import axios from "../service/axios";
import ValidationErrors from "../components/ValidationErrors";
import { authFailure, authStart, authSuccess } from "../slice/auth";

function AppLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    const userData = {
      email,
      password,
    };
    
    dispatch(authStart())
    try {
      const response = await axios.post("/users/login", { user: userData });
      console.log("Login successful:", response);
      dispatch(authSuccess(response.data.user));
    } catch (error) {
      dispatch(authFailure(error.response.data.errors));
      console.error("Login failed:", error);
    }
  };
  return (
    <main className="form-signin w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <ValidationErrors />
      <form
        onSubmit={handleLogin}
        className=" bg-white border rounded-3 shadow-sm w-100 "
        style={{ maxWidth: "330px", padding: "15px" }}
      >
        <h4 className="h4 mb-4 fw-semibold text-center">Tizimga kirish</h4>

        <MyInput
          state={email}
          setState={setEmail}
          type={"email"}
          placeholder={"Email adress"}
        />
        <MyInput
          state={password}
          setState={setPassword}
          type={"password"}
          placeholder={"Parol"}
        />

        <button
          disabled={auth.loading}
          className="btn btn-primary w-100 py-2"
          type="submit"
          style={{ cursor: auth.loading ? "wait" : "pointer" }}
        >
          {auth.loading ? "Kirish..." : "Kirish"}
        </button>
      </form>
    </main>
  );
}

export default AppLogin;
