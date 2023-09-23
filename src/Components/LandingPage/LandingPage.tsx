import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Landing Page</p>
      <Button className="bg-blue" onClick={() => navigate("register")}>
        Get Started
      </Button>
    </div>
  );
}
