import React from 'react';
import logo from './logo-poll.png';
import avatar from './avatar.png';
import styles from './styles.css'

const Header = () => {
    return(
        <div className="body">
        <img src={logo} />
            <div className="container">
                        <div className="container-img">
                            <p>¿No tenés una cuenta de POLL? <a href="#">REGISTRARSE</a></p>
                        </div>
                        <div className="container-cards">
                            <div className="container-intro">
                                <h1>Inicia sesión para <br/>seguir ganando<br/> recompensas!</h1>
                                <p>Miles de encuestas a diario para poder recibir recompensas. Inicia sesión y responde las mejores encuenstas de la web.</p>
                                <img src={avatar}></img>
                            </div>
                            <div className="container-formulario">
                                <h2>Inicia sesión</h2>
                                <input type="text" placeholder="NOMBRE DE USUARIO"></input>
                                <input type="text" placeholder="CONTRASEÑA"></input>
                                <button type="button">INICIAR SESIÓN</button>
                                <h3>¿Olvidaste tu contraseña?</h3>
                                <p>¿Necesitas ayuda?</p>                                
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Header;