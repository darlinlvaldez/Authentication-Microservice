import { useState } from 'react';
import { Errores } from './login.js';
import { useForm } from "react-hook-form";
import useEnterNavigation from '../hooks/useEnterNavigation.js';
import auth from 'summa-core/auth.js';
import useApp from '../hooks/useApp.js'

import './Login.css';

function Login({ app }) {

    const [infoApp] = useApp(app);
    const [errorLogin, setErrorLogin] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEnterNavigation("#Form");

    const onSubmit = async (data) => {
        const { username, password } = data
        const [error, response] = await auth.login(username, password);
        if (error) {
            reset(undefined, { keepErrors: true })
            setErrorLogin(Errores[error]);
            return;
        }

        const url = `${infoApp.url}?token=${response.token}`;
        window.location.replace(url);
    }; 

    return (
        <form className="text-center" id="Form" onSubmit={handleSubmit(onSubmit)}>
            <img className="logo" src={'./summasoft.svg'} alt="Logo SummaSoft" />
            <div className="login-container">
                <img className="appicon" src={infoApp.icon} alt="Logo App" />
                <h2>{infoApp.name}</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre de Usuario"
                        name="username"
                        className="login-input"
                        autoFocus
                        {...register("username", { required: true })}
                        aria-invalid={errors.username ? "true" : "false"}
                    />
                    {errors.username?.type === 'red' &&
                        <span className="error-message">{Errores['Missing username']}</span>
                    }

                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        className="login-input"
                        {...register("password", { required: true })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password?.type === 'required' &&
                        <span className="error-message">{Errores['Missing password']}</span>
                    }

                </div>

                <button className="login-button">Iniciar Sesión</button>
                {errorLogin && <span className="error-message">{errorLogin}</span>}
            </div>
        </form>
    );
}

export default Login;