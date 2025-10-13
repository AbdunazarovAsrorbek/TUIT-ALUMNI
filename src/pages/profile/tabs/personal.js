import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiCamera } from "react-icons/fi";
import personalText from "../../../data/profile/personalJson.json";
import { useLocation } from "react-router-dom";

const Personal = ({ profile, updateProfile }) => {
    const location = useLocation();
    const lang = location.pathname.split('/')[1];
    const text = personalText[lang];

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        phoneNumber: "",
        currentCompany: "",
        position: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        phoneNumber: "",
        currentCompany: "",
        position: "",
    });

    useEffect(() => {
        if (profile?.id) {
            setFormData({
                firstName: profile.firstName || "",
                lastName: profile.lastName || "",
                patronymic: profile.patronymic || "",
                phoneNumber: profile.phoneNumber || "",
                currentCompany: profile.currentCompany || "",
                position: profile.position || "",
            });
        }
    }, [profile?.id]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const initials = `${profile?.lastName?.charAt(0) || ""}.${profile?.firstName?.charAt(0) || ""}`;
    const id = profile?.id;
    const url = process.env.REACT_APP_API_URL;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setSelectedFile(null);
            setImagePreview(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subData = { ...formData };
        const formsData = new FormData();
        formsData.append(
            "alumniUpdateDataDto",
            new Blob([JSON.stringify(subData)], { type: "application/json" })
        );
        if (selectedFile) formsData.append("image", selectedFile);
        if (id) updateProfile({ data: formsData, id });
        setSelectedFile(null);
    };

    return (
        <section className="personal">
            <h4 className="tab-title">{text.personal_info_title}</h4>
            <hr />
            <form className="form" onSubmit={handleSubmit}>
                <Row>
                    <Col lg={2}>
                        <div className="img-box">
                            {profile.imageUrl ? (
                                <img className="img-fluid" src={url + profile.imageUrl} alt="Img" />
                            ) : (
                                <div className={"profile_no-img"}><p>{initials}</p></div>
                            )}
                            <div className={"profile_no-img"}>
                                {imagePreview && <img src={imagePreview} alt="Preview" />}
                            </div>
                            <div className="add_user-img">
                                <label htmlFor="userImg" className="upload-label">
                                    <FiCamera size={20} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", cursor: "pointer", transition: "0.5s" }} />
                                </label>
                                <input type="file" id="userImg" onChange={handleFileChange} style={{ display: "none" }} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className={"profile-content"}>
                            <h2>{formData.firstName} {formData.lastName} {formData.patronymic}</h2>
                            <div className={"mb-2"}>
                                <h5>{text.faculty}</h5>
                                <p><i className="las la-book"></i> {profile.faculty}</p>
                            </div>
                            <div>
                                <h5>{text.graduation_year}</h5>
                                <p><i className="las la-calendar"></i> {profile.graduationYear}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={"personal_form mt-4"}>
                    <Row>
                        <Col md="6">
                            <div className="form-control">
                                <label htmlFor="firstName">{text.first_name}</label>
                                <input type="text" id="firstName" placeholder={text.first_name_placeholder} value={formData.firstName} onChange={handleInputChange} />
                                <span>{formErrors.firstName}</span>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="form-control">
                                <label htmlFor="lastName">{text.last_name}</label>
                                <input type="text" id="lastName" placeholder={text.last_name_placeholder} value={formData.lastName} onChange={handleInputChange} />
                                <span>{formErrors.lastName}</span>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="form-control">
                                <label htmlFor="patronymic">{text.patronymic}</label>
                                <input type="text" id="patronymic" placeholder={text.patronymic_placeholder} value={formData.patronymic} onChange={handleInputChange} />
                                <span>{formErrors.patronymic}</span>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="form-control">
                                <label htmlFor="currentCompany">{text.current_company}</label>
                                <input type="text" id="currentCompany" placeholder={text.current_company_placeholder} value={formData.currentCompany} onChange={handleInputChange} />
                                <span>{formErrors.currentCompany}</span>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="form-control">
                                <label htmlFor="position">{text.position}</label>
                                <input type="text" id="position" placeholder={text.position_placeholder} value={formData.position} onChange={handleInputChange} />
                                <span>{formErrors.position}</span>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="form-control">
                                <label htmlFor="phoneNumber">{text.phone_number}</label>
                                <input type="tel" id="phoneNumber" placeholder={text.phone_number_placeholder} value={formData.phoneNumber} onChange={handleInputChange} />
                                <span>{formErrors.phoneNumber}</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="personal_button">{text.update_button}</button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default Personal;
