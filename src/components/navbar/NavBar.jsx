import styles from './NavBar.module.css';

export default function NavBar() {
  const logoImgPath = "https://th.bing.com/th/id/OIG.glUmIjt1.8XjaMRycEGN?pid=ImgGn";
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-logo"]}><img src={logoImgPath} className={styles["logo-img"]} /></div>
      <a className={styles["nav-item"]} href="#">Home</a>
      <a className={styles["nav-item"]} href="#">Serviços</a>
      <a className={styles["nav-item"]} href="#">Produtos</a>
      <a className={styles["nav-item"]} href="#">Sobre nós</a>
      <a className={styles["nav-item"]} href="#">Contatos</a>
    </div>
  )
}


