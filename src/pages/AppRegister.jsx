import { useState } from "react";
import MyInput from "../components/ui/MyInput";

function AppRegister() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <main className="form-signin w-100 min-vh-100 d-flex align-items-center justify-content-center">
      <form
        className=" bg-white border rounded-3 shadow-sm w-100 "
        style={{ maxWidth: "330px", padding: "15px" }}
      >
        <h4 className="h4 mb-4 fw-semibold text-center">Ro'yxatdan o'tish</h4>
        <MyInput state={email} setState={setEmail} type={"email"} placeholder={"Email adress"} />
        <MyInput state={username} setState={setUsername} type={"text"} placeholder={"Username"} />
        <MyInput state={password} setState={setPassword} type={"password"} placeholder={"Parol"} />

        <button className="btn btn-primary w-100 py-2" type="submit">
          Kirish
        </button>
      </form>
    </main>
  );
}

export default AppRegister;
