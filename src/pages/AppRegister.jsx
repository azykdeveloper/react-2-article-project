import { useState } from "react";
import MyInput from "../components/ui/MyInput";
import { useDispatch, useSelector } from "react-redux";
import { authFailure, authStart, authSuccess } from "../slice/auth";
import axios from "../service/axios";
import ValidationErrors from "../components/ValidationErrors";

function AppRegister() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    const userData = {
      email,
      username,
      password,
    };
    dispatch(authStart());
    try {
      const response = await axios.post("/users", { user: userData });
      console.log("Registration successful:", response);
      dispatch(authSuccess(response.data.user));
    } catch (error) {
      dispatch(authFailure(error.response.data.errors));
    }
  };

  return (
    <main className="form-signin w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <ValidationErrors />
      <form
        onSubmit={handleRegister}
        className=" bg-white border rounded-3 shadow-sm w-100 "
        style={{ maxWidth: "330px", padding: "15px" }}
      >
        <h4 className="h4 mb-4 fw-semibold text-center">Ro'yxatdan o'tish</h4>

        <MyInput
          state={email}
          setState={setEmail}
          type={"email"}
          placeholder={"Email adress"}
        />
        <MyInput
          state={username}
          setState={setUsername}
          type={"text"}
          placeholder={"Username"}
        />
        <MyInput
          state={password}
          setState={setPassword}
          type={"password"}
          placeholder={"Parol"}
        />

        <button
          disabled={auth.loading}
          style={{ cursor: auth.loading ? "wait" : "pointer" }}
          className="btn btn-primary w-100 py-2"
          type="submit"
        >
          {auth.loading ? "Ro'yxatdan o'tish..." : "Ro'yxatdan o'tish"}
        </button>
      </form>
    </main>
  );
}

export default AppRegister;
