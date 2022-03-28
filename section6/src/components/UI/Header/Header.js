import React from 'react'
// import './Header.css'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Course goal project</span>
                    <span className={styles.About}>About</span>
                    <span className="Menu">Menu</span>


                </div>
            </nav>
        </div>
    )
}
