import Header from "../components/header/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <h2>Home Page</h2>
      <Link to="/admin">
        <button>Admin Landing Page</button>
      </Link>
      <Link to="/student/66bf1dbb7e8a364c5b73ca72">
        <button>Student Landing Page</button>
      </Link>
      <Link to="/faculty/branch">
        <button>Faculty Landing Page</button>
      </Link>
    </div>
  );
}
