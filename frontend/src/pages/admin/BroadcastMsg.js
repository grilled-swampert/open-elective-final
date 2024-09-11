import Sidebar from "../../components/admin/editAdmin/sidebar";
import Header from "../../components/header/Header";
import Broadcast from "../../components/admin/editAdmin/display/broadcastMsg";

export default function BroadcastMsg() {
    return (
        <div>
            <Header />
            <h1>BroadcastMsg</h1>
            <Sidebar />
            <Broadcast />
        </div>
    )
}