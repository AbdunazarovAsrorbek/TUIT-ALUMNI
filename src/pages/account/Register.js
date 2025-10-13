import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import { useDispatch, useSelector } from 'react-redux';
import { getFacultyList as onGetFacultyList } from '../../slice/faculty/thunk';
import { registerList as onRegisterList } from "../../slice/auth/register/thunk";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import textData from "../../data/register/registerJson.json";
import i18n from "../../i18n"

const Register = ({ location }) => {
    const dispatch = useDispatch();
    const lang = location.pathname.split('/')[1] || 'uz';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const facultyList = useSelector((state) => state.Faculty?.facultyList || []);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        dispatch(onGetFacultyList());
    }, [dispatch]);

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', patronymic: '', position: '', email: '', gender: '',
        phoneNumber: '', facultyId: '', graduationYear: '', company: '', userName: '',
        password: '', cPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let newValue = value;
        if (id === "phoneNumber") newValue = "+" + newValue.replace(/[^\d]/g, "");

        setFormData((prev) => ({ ...prev, [id]: newValue }));

        if (id === "cPassword" || id === "password") {
            setFormErrors((prev) => ({
                ...prev,
                cPassword: (id === "password" ? newValue : formData.password) !==
                    (id === "cPassword" ? newValue : formData.cPassword)
                    ? textData[lang].cPasswordError
                    : ''
            }));
        }
    };

    const isEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = textData[lang].firstNameError;
        if (!formData.lastName) errors.lastName = textData[lang].lastNameError;
        if (!formData.patronymic) errors.patronymic = textData[lang].patronymicError;
        if (!formData.position) errors.position = textData[lang].positionError;
        if (!formData.gender) errors.gender = textData[lang].genderError;
        if (!formData.email) errors.email = textData[lang].emailError;
        else if (!isEmail(formData.email)) errors.email = textData[lang].emailInvalid;
        if (!formData.phoneNumber) errors.phoneNumber = textData[lang].phoneNumberError;
        if (!formData.facultyId) errors.facultyId = textData[lang].facultyIdError;
        if (!formData.graduationYear) errors.graduationYear = textData[lang].graduationYearError;
        if (!formData.company) errors.company = textData[lang].companyError;
        if (!formData.userName) errors.userName = textData[lang].userNameError;
        if (!formData.password) errors.password = textData[lang].passwordError;
        if (!formData.cPassword) errors.cPassword = textData[lang].cPasswordError;
        if (formData.password && formData.cPassword && formData.password !== formData.cPassword) {
            errors.cPassword = textData[lang].cPasswordError;
        }
        setFormErrors(errors);
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) return;

        const subData = {
            firstName: formData.firstName, lastName: formData.lastName, patronymic: formData.patronymic,
            gender: formData.gender, username: formData.userName, password: formData.password,
            phoneNumber: formData.phoneNumber, email: formData.email, facultyId: formData.facultyId,
            graduationYear: formData.graduationYear, currentCompany: formData.company,
            position: formData.position, bio: "info"
        };
        const formsData = new FormData();
        formsData.append('alumniDto', new Blob([JSON.stringify(subData)], { type: 'application/json' }));

        try {
            const result = await dispatch(onRegisterList(formsData));
            if (result.payload.id) {
                handleShow();
                setFormData({
                    firstName: '', lastName: '', patronymic: '', position: '', email: '', gender: '',
                    phoneNumber: '', facultyId: '', graduationYear: '', company: '', userName: '',
                    password: '', cPassword: ''
                });
                setFormErrors({});
            }
        } catch (err) { console.error("❌ Xatolik:", err); }
    };
    return (
        <Styles>
            <div className="main-wrapper registration-page">
                <HeaderTwo lang={lang} />
                <BreadcrumbBox title={textData[lang].title} lang={lang} />

                <section className="registration-area">
                    <Container>
                        <div className="registration-box">
                            <div className="registration-title text-center">
                                <h3>{textData[lang].title}</h3>
                            </div>

                            <form id="form_registration" className="form" onSubmit={handleSubmit}>
                                <Row>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="firstName">{textData[lang].firstName}:</label>
                                            <input type="text" id="firstName" placeholder={textData[lang].firstName} value={formData.firstName} onChange={handleInputChange} />
                                            <span>{formErrors.firstName}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="lastName">{textData[lang].lastName}:</label>
                                            <input type="text" id="lastName" placeholder={textData[lang].lastName} value={formData.lastName} onChange={handleInputChange} />
                                            <span>{formErrors.lastName}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="patronymic">{textData[lang].patronymic}:</label>
                                            <input type="text" id="patronymic" placeholder={textData[lang].patronymic} value={formData.patronymic} onChange={handleInputChange} />
                                            <span>{formErrors.patronymic}</span>
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="gender">{textData[lang].gender}:</label>
                                            <select id="gender" value={formData.gender} onChange={handleInputChange}>
                                                <option value="">{textData[lang].gender}</option>
                                                <option value="MALE">Erkak</option>
                                                <option value="FEMAIL">Ayol</option>
                                            </select>
                                            <span>{formErrors.gender}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="position">{textData[lang].position}:</label>
                                            <input type="text" id="position" placeholder={textData[lang].position} value={formData.position} onChange={handleInputChange} />
                                            <span>{formErrors.position}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="email">{textData[lang].email}:</label>
                                            <input type="email" id="email" placeholder={textData[lang].email} value={formData.email} onChange={handleInputChange} />
                                            <span>{formErrors.email}</span>
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="phoneNumber">{textData[lang].phoneNumber}:</label>
                                            <input type="tel" id="phoneNumber" placeholder="998901234567" value={formData.phoneNumber} onChange={handleInputChange} />
                                            <span>{formErrors.phoneNumber}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="facultyId">{textData[lang].facultyId}:</label>
                                            <select id="facultyId" value={formData.facultyId} onChange={handleInputChange}>
                                                <option value="">{textData[lang].facultyId}</option>
                                                {facultyList.map((faculty) => (
                                                    <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                                ))}
                                            </select>
                                            <span>{formErrors.facultyId}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="graduationYear">{textData[lang].graduationYear}:</label>
                                            <input type="number" id="graduationYear" placeholder={textData[lang].graduationYear} value={formData.graduationYear} onChange={handleInputChange} min="1950" max={new Date().getFullYear()} />
                                            <span>{formErrors.graduationYear}</span>
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="company">{textData[lang].company}:</label>
                                            <input type="text" id="company" placeholder={textData[lang].company} value={formData.company} onChange={handleInputChange} />
                                            <span>{formErrors.company}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                            <label htmlFor="userName">{textData[lang].userName}:</label>
                                            <input type="text" id="userName" placeholder={textData[lang].userName} value={formData.userName} onChange={handleInputChange} />
                                            <span>{formErrors.userName}</span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <div className="form-control">
                                            <label htmlFor="password">{textData[lang].password}:</label>
                                            <input type={showPassword ? "text" : "password"} id="password" placeholder="******" value={formData.password} onChange={handleInputChange} />
                                            <p onClick={() => setShowPassword(!showPassword)}
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
                                            <span>{formErrors.password}</span>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="4">
                                        <div className="form-control">
                                            <label htmlFor="cPassword">{textData[lang].cPassword}:</label>
                                            <input type={showCPassword ? "text" : "password"} id="cPassword" placeholder="******" value={formData.cPassword} onChange={handleInputChange} />
                                            <p onClick={() => setShowCPassword(!showCPassword)}
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
                                                {showCPassword ? <FaEyeSlash /> : <FaEye />}
                                            </p>
                                            <span>{formErrors.cPassword}</span>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col md="4" className="text-center">
                                        <button type="submit">{textData[lang].submit}</button>
                                    </Col>
                                </Row>
                            </form>

                            <div className="have_account-btn text-center">
                                <p>{textData[lang].haveAccount} <Link to={`/${lang}/login`}>{textData[lang].login}</Link></p>
                            </div>
                        </div>
                    </Container>
                </section>

                <FooterTwo lang={lang} />

                <Modal show={show} onHide={handleClose} className={"reg-modal"}
                    style={{ marginTop: 120 }}
                >
                    <Modal.Body>
                        <div className={"icon_box"} style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4a2559 " width="150"
                                height="150">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <p style={{fontSize:15}}>{textData[lang].successModal}</p>
                        <div style={{ fontSize: "17px", textAlign: "left", marginTop: "7px" }}>
                            <span>Login sahifasiga o‘tish:</span>
                            <Link to={`/${lang}/login`} style={{ marginLeft: 8, fontWeight: "600", color: "#4a2559",fontSize:17 }}>{textData[lang].login}</Link>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  onClick={handleClose} style={{ backgroundColor: "#4a2559" }}>Yopish</Button>
                    </Modal.Footer>
                </Modal>

                <ToastContainer lang={lang} />
            </div>
        </Styles>
    );
};

export default Register;
