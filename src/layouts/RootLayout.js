import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import '../images/logo.png'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
          <div><img src={require('../images/logo.png')}/></div>
        <nav>
          <h1>Студия</h1>
          <NavLink to="/">О Студии</NavLink>
          <NavLink to="development">Разработка сайтов</NavLink>
          <NavLink to="style">Фирменный стиль</NavLink>
          <NavLink to="design">Графический дизайн</NavLink>
          <NavLink to="vacancies">Вакансии</NavLink>
          <NavLink to="contact">Контакты</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <NavLink to="contact">Контакт</NavLink>
        <p>© 2002—2023 «Парадигма»</p>
      </footer>
    </div>
  )
}