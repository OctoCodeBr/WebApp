import "./global.css"

export function App() {
  return (
    <div className="container">
      <header className="header">
        <span>bem vindo</span>
      </header>

      <form>
      <div className="inputContainer">
        <label htmlfor="email">E-mail</label>
        <input
         type="text"
          name="email"
           id="email"
           placeholder="fantinelvitor443@gmail.com"
         />
      </div>

      <div className="inputContainer">
        <label htmlfor="password">password</label>
        <input
         type="password"
          name="password"
           id="password"
           placeholder="*********"
         />
      </div>

      <a href="">esqueci minha senha?</a>

      <button className="button">
        conectar
      </button>
      </form>
    </div>
  )
}