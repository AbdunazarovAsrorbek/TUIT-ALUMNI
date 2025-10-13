import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGraduates as onGraduates } from "../../../slice/graduates/thunk";
import { sendRequest as onSendRequest } from "../../../slice/notification/thunk";
import { createSelector } from "reselect";
import graduatesText from "../../../data/profile/graduatesJson.json";

const url = process.env.REACT_APP_API_URL;

const Graduates = () => {
    const dispatch = useDispatch();
    const [listView, setListView] = useState([]);
    const [input, setInput] = useState("");

    const selectGraduate = createSelector(
        (state) => state.Graduates,
        (graduate) => ({
            graduate: graduate.graduates.content
        })
    );
    const { graduate } = useSelector(selectGraduate);

    const dataSearch = {
        firstName: null,
        lastname: null,
        patronymic: null,
        username: null,
        phoneNumber: null,
        email: null,
        facultyId: null,
        graduationYear: null
    }

    useEffect(() => {
        dispatch(onGraduates(dataSearch));
    }, [dispatch]);

    useEffect(() => {
        if (graduate) setListView(graduate);
    }, [graduate]);

    const onSubmit = async (item) => {
        try {
            if (item.id) {
                const res = await dispatch(onSendRequest(item.id)).unwrap();
                if (res) {
                    await dispatch(onGraduates(dataSearch));
                }
            }
        } catch (error) {
            // console.log("Xatolik:", error);
        }
    };

    const handleChange = (ele) => {
        const search = ele.target.value;
        setInput(search);
        if (search) {
            setListView(graduate?.filter((item) => {
                const strData = `${item.alumni?.firstName} ${item.alumni?.lastName} ${item.alumni?.patronymic}`;
                return strData.toLowerCase().includes(search.toLowerCase());
            }));
        } else {
            setListView(graduate);
        }
    };

    const lang = window.location.pathname.split('/')[1];
    const text = graduatesText[lang];

    return (
        <>
            <div className={"notification_header"}>
                <h4 className="tab-title">{text.graduates_title}</h4>
                <input
                    type="text"
                    className="form-control"
                    placeholder={text.search_placeholder}
                    value={input}
                    onChange={handleChange}
                />
            </div>

            <hr />
            <div>
                {listView?.length > 0 ? listView.map((item, index) => (
                    <div className="graduate-box" key={index}>
                        <div className={"content_box"}>
                            <p className={"graduate_num"}>{index + 1}</p>
                            <div className={"graduate_img-content"}>
                                {item.alumni?.imageUrl ? (
                                    <div className={"graduate_img-box"}>
                                        <img src={url + item.alumni?.imageUrl} alt="Graduates" />
                                    </div>
                                ) : (
                                    <div className={"not_img"}>
                                        <p>{item.alumni?.firstName?.charAt(0)}</p>
                                    </div>
                                )}
                            </div>
                            <h4>{item.alumni?.firstName} {item.alumni?.lastName} {item.alumni?.patronymic}</h4>
                        </div>
                        <div className={"connection_box"}>
                            {item.connectionStatus === "NOT_CONNECTED" && (
                                <button
                                    onClick={() => onSubmit(item?.alumni)}
                                    className={"connection"}
                                >
                                    <i className="las la-link"></i> {text.connection}
                                </button>
                            )}

                            {item.connectionStatus === "PENDING_SENT" && (
                                <div className="bg-blue-100 text-blue-800 p-2 rounded">
                                    <p>
                                        <i className="las la-spinner la-spin"></i> {text.sent_pending}
                                    </p>
                                </div>
                            )}
                            {item.connectionStatus === "PENDING_RECEIVED" && (
                                <div className="bg-blue-100 text-blue-800 p-2 rounded">
                                    <p>
                                        <i className="las la-spinner la-spin"></i> {text.received_pending}
                                    </p>
                                </div>
                            )}
                            {item.connectionStatus === "CONNECTED" && (
                                <div className="bg-green-100 text-green-800 p-2 rounded">
                                    <p>
                                        <i className="las la-check-circle text-green-600"></i> {text.connected}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )) : (
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
                                <p style={{ marginTop: "16px", fontSize: "18px" }}>{text.no_data}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Graduates;
