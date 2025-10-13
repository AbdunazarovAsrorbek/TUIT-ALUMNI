import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCertificate } from "../../../slice/profile/thunk";
import certificateText from "../../../data/profile/certificateJson.json";

const Certificate = ({ profile }) => {

    const dispatch = useDispatch();
    const [pdfUrl, setPdfUrl] = useState(null);

    const lang = window.location.pathname.split('/')[1]
    const text = certificateText[lang];

    useEffect(() => {
        if (profile?.id) {
            dispatch(getCertificate(profile.id))
                .unwrap()
                .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    setPdfUrl(url);
                })
                .catch((error) => {
                    console.error("Sertifikat olishda xatolik:", error);
                });
        }
    }, [dispatch, profile]);

    return (
        <>
            <h4 className="tab-title">{text.certificate_title}</h4>
            <hr />

            {pdfUrl ? (
                <>
                    <div style={{ marginBottom: "1rem" }}>
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="personal_button-certificate">
                            {text.view_download} <i className="las la-download"></i>
                        </a>
                    </div>
                    <iframe
                        src={pdfUrl}
                        width="100%"
                        height="650"
                        className="certificate-iframe"
                        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                        title="PDF Viewer"
                    />
                </>
            ) : (
                <div className={"not_data"}>
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <div style={{ color: "#888" }}>
                            <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                            <p style={{ marginTop: "16px", fontSize: "18px" }}>{text.not_found}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Certificate;
