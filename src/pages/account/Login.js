import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import { loginUser } from "../../slice/auth/login/thunk";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import texts from "../../data/login/loginJson.json";
import i18n from "../../i18n"

function Login({ location }) {
    const dispatch = useDispatch();
    const lang = location.pathname.split('/')[1] || 'uz';
    const history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (user.trim() === '') {
            setUserError(texts[lang].user_error);
            isValid = false;
        } else {
            setUserError('');
        }

        if (password.trim() === '') {
            setPasswordError(texts[lang].password_error);
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!isValid) return;

        const loginData = { username: user, password: password };
        dispatch(loginUser(loginData, history, lang));
    };

    return (
        <Styles>
            <div className="main-wrapper login-page">
                <HeaderTwo lang={lang} />
                <BreadcrumbBox title={texts[lang].title} lang={lang} />

                <section className="login-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="login-box">
                                    <div className="login-title text-center">
                                        <h3>{texts[lang].title}</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} className="form">
                                        <p className={`form-control ${userError ? 'text-left error' : 'success'}`}>
                                            <label htmlFor="login_user">{texts[lang].username_label}</label>
                                            <input
                                                type="text"
                                                id="login_user"
                                                placeholder={texts[lang].username_placeholder}
                                                value={user}
                                                onChange={(e) => setUser(e.target.value)}
                                            />
                                            <span className="login_input-msg">{userError}</span>
                                        </p>

                                        <div className={`form-control ${passwordError ? 'text-left error' : 'success'}`}>
                                            <label htmlFor="login_password">{texts[lang].password_label}</label>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="login_password"
                                                placeholder={texts[lang].password_placeholder}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <p
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{
                                                    position: "absolute",
                                                    right: "15px",
                                                    top: "70%",
                                                    transform: "translateY(-55%)",
                                                    cursor: "pointer",
                                                    color: "#888",
                                                    padding: 0,
                                                    margin: 0,
                                                }}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </p>
                                            <span className="login_input-msg">{passwordError}</span>
                                        </div>

                                        <button type="submit">{texts[lang].submit}</button>

                                        <div className="save-forget-password d-flex justify-content-between">
                                            <div className="save-passowrd">
                                                <label htmlFor="save_password">
                                                    <input type="checkbox" id="save_password" className="check-box" />
                                                    {texts[lang].save_password}
                                                </label>
                                            </div>
                                            <div className="forget-password">
                                                <Link to={"#"}>{texts[lang].forget_password}</Link>
                                            </div>
                                        </div>

                                        <div className="not_account-btn text-center">
                                            <p>
                                                {texts[lang].no_account} (
                                                <Link to={`/${lang}/registration`}>
                                                    {texts[lang].register}
                                                </Link>
                                                )
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <FooterTwo lang={lang} />
            </div>
        </Styles>
    );
}

export default Login;
