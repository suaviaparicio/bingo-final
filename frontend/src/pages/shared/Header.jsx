import React, {useContext} from 'react';
import { AuthContext } from '../../AuthContext';

const Header = () => {
    const { authState, setAuthState} = useContext(AuthContext);

    if (authState === null) {
        return <div>Loading...</div>;
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/bingo-game">Bingo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li> */}
                    </ul>
                    <span className="navbar-text">
                       ¡ Hola {authState.user}!
                    </span>
                </div>
            </div>
        </nav>
    );
};
export default Header;