import React from "react";
import "./style.css";

export default function App() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(formData.email !== '' && formData.password !== '') {
      console.log("Successfully signed up")
    }
  }

  return (
    <div className="app">
      <div className="app-description">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"}/>
        <p>Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</p>
      </div>
      <div className="app-card-login">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email atau Nomor telepon"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br/>
          <input
            type="password" 
            placeholder="Kata sandi"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br/>
          <button className="btn-login">Masuk</button>
          <br/>
          <a className="forget-password" href="">Lupa kata sandi?</a>
          <hr />
          <button className="btn-new-account">Buat Akun Baru</button>
        </form>
      </div>

    </div>
  );
}