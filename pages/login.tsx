import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Head from "next/head";
import style from "../styles/login-register.module.css";
import Link from "next/link";
import FormRow from "../Components/FormRow";
import { useRouter } from "next/router";
import { useAppContext } from "Context/AppContext";

const Login: React.FC = () => {
  const router = useRouter();
  const { formmsg, setFrommsg,username,setUsername,password,setPassword } = useAppContext()
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username || password) {
      setFrommsg({ msg: "Log in successfully" });
      setUsername("");
      setPassword("");
      router.push("/");
    } else {
      setFrommsg({ msg: "Log in failed" });
    }
  };

  return (
    <>
      <Head>
        <title>Express Bus -- Log in</title>
        <meta
          name="description"
          content="This is ticket reservation project -- login page"
        />
      </Head>
      <div className={style.body}>
        <div className={style.container}>
          {formmsg.msg && (
            <div className={`${style.form_msg_wrapper} success_wrapper`}>
              <div>
                <FaCheckCircle />
                {formmsg.msg}
              </div>
            </div>
          )}
          <div className={style.title}>Giriş Yap</div>
          <div className={style.content}>
            <form onSubmit={HandleSubmit} action="register.php" method="post">
              <div className="user_details">
                <FormRow
                  type={"text"}
                  placeholder={"Kullanıcı Adı Giriniz "}
                  label={"Kullanıcı Adı"}
                  name={"Username"}
                  state={setUsername}
                  value={username}
                />

                <FormRow
                  type={"password"}
                  placeholder={"Şifre Giriniz"}
                  label={"Şifre"}
                  name={"password"}
                  state={setPassword}
                  value={password}
                />
              </div>

              <div className={style.button}>
                <input type="submit" value="Giriş Yap" />
              </div>
            </form>
            <div id={style.create_account_wrap}>
              <p>
                Üye Değil?{" "}
                <Link href="/register">
                  <a>Hesap Oluştur</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
