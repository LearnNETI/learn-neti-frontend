import { useNavigate } from "react-router-dom";
import Button from "../../ui/btn/btn";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    if (!navigate) {
        return null; // Предотвращаем ошибку, если useNavigate() недоступен
    }

    return (
        <aside className="sidebar">
            <Button block={"sidebar"} modificator={"regular"} innerText={"Карточки"} onClick={() => navigate("/")} />
            <Button block={"sidebar"} modificator={"regular"} innerText={"Учебный план"} onClick={() => navigate("/plan")} />
            <Button block={"sidebar"} modificator={"regular"} innerText={"Избранное"} onClick={() => navigate("/favorites")} />
            <Button block={"sidebar"} modificator={"regular"} innerText={"Уведомления"} onClick={() => navigate("/notifications")} />
        </aside>
    );
};

export default Sidebar;
