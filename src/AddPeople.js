import { useNavigate } from "react-router-dom";

export function AddPeople() {
  const navigate = useNavigate();
  return (
    <>
      <div className="add-peop">
        <div>
          <img
            onClick={() => navigate("/addteacher")}
            className="peo-img"
            src="https://cdn.elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg"
          />
        </div>
        <div className="peop-2">
          <img
            onClick={() => navigate("/addstudent")}
            className="peo-img"
            src="https://165225.fs1.hubspotusercontent-na1.net/hubfs/165225/Web%20images%202023%20(compressed)/Stock%20(with%20filter)/AdobeStock_455007184.webp"
          />
        </div>
      </div>
      <div className="add-cnt">
        <h2 onClick={() => navigate("/addteacher")}>Teacher</h2>
        <h2 onClick={() => navigate("/addstudent")}>Student</h2>
      </div>
    </>
  );
}
