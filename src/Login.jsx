import React, { useState } from "react";
import { REGISTER, LOGIN } from "./graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();
  const [register, { error }] = useMutation(REGISTER);
  const [login] = useMutation(LOGIN);

  const loginHandler = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("AUTH_TOKEN");
    if (token == null) {
      register({
        variables: {
          username: username,
          password: pass,
        },
        onCompleted: ({ register }) => {
          localStorage.setItem("AUTH_TOKEN", register.token);
          history("/dashboard");
        },
      });
    } else {
      login({
        variables: {
          username: username,
          password: pass,
        },
        onCompleted: ({}) => {
          history("/dashboard");
        },
      });
    }
  };
  console.log(localStorage.getItem("AUTH_TOKEN"), "token");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Вход</h1>
      <form
        onSubmit={loginHandler}
        style={{
          width: "100%",
          height: "100%",
          minWidth: 300,
          maxWidth: 500,
        }}
      >
        <div class="mb-3">
          <input
            required
            onChange={(e) => setUsername(e.currentTarget.value)}
            type="text"
            value={username}
            placeholder="логин"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <input
            required
            value={pass}
            onChange={(e) => setPass(e.currentTarget.value)}
            type="password"
            placeholder="пароль"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          style={{
            width: "100%",
            minWidth: 300,
            maxWidth: 500,
            margin: "auto",
          }}
          type="submit"
          className="btn btn-primary"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
