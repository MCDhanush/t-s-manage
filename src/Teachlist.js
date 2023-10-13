export function Teachlist({ teach, id, deletButton, editButton }) {
  console.log(teach.age);
  return (
    <>
      <div className="teachlist-co">
        <img className="tea-img" src={teach.avatar} />
        <div className="iner-div">
          <h3 className="tea-name">Name : {teach.teacher}</h3>
          <p className="tea-age">AGE : {teach.age}</p>
        </div>
        <div className="iner-divs">
          <p className="about-a">About:</p>
          <div>
            {deletButton}
            {editButton}
          </div>
        </div>
        <p className="tea-about">&nbsp; &nbsp;{teach.about}</p>
      </div>
    </>
  );
}
