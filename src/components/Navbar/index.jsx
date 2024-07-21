import React from 'react'
import styles from './index.module.css'
function Navbar() {
  return (
    <>
    <div className={styles.navbar}>
      <img className={styles.logo} src="../../../public/logo.svg" alt="logo" />
      <ul className={styles.links}>
        <li><a href="">Vakansiyalar</a></li>
        <li><a href="">Kandidatlar</a></li>
        <li><a href="">Kompaniyalar</a></li>
        <li><a href="">Xizmatlar</a></li>
        <li><a href="">Ta’lim</a></li>
      </ul>
      <select className={styles.select} name="language" id="language">
        <option value="O'zbek">O'zbek</option>
        <option value="Ingliz">Ingliz</option>
        <option value="Rus">Rus</option>
      </select>
      <button className={styles.btn}>Boshlash</button>
    </div>
    </>
  )
}

export default Navbar;