import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../ui/btn/btn";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const [hidden, setHide] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 1038 });

    return (
        <>
        <div className={`sidebar-wrapper ${isMobile && hidden ? "mobile" : ""}`}>
            {!isMobile && (
                <aside className="sidebar">
                    <Button block={"sidebar"} modificator={"regular"} innerText={"Карточки"} onClick={() => navigate("/")} />
                    <Button block={"sidebar"} modificator={"regular"} innerText={"Учебный план"} onClick={() => navigate("/modules")} />
                    <Button block={"sidebar"} modificator={"regular"} innerText={"Избранное"} onClick={() => navigate("/favourites")}/>
                    {/* <Button block={"sidebar"} modificator={"regular"} innerText={"Уведомления"}/> */}
                </aside>
            )}

            {isMobile && (
                <>
                <aside className="sidebar">
                <Button block={"sidebar"} modificator={"regular"} innerText={"Карточки"} onClick={() => navigate("/deck/list")} />
                <Button block={"sidebar"} modificator={"regular"} innerText={"Учебный план"} onClick={() => navigate("/modules")} />
                <Button block={"sidebar"} modificator={"regular"} innerText={"Избранное"} onClick={() => navigate("/favourites")}/>
                {/* <Button block={"sidebar"} modificator={"regular"} innerText={"Уведомления"} /> */}
                </aside>
                <button className={`sidebar-btn ${hidden ? "" : "rotated"}`} onClick={() => setHide(!hidden)}></button>
                </>
            )}
        </div>
        </>
    );
};

export default Sidebar;
