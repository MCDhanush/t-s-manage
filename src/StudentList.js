export function StudentList({ teach, id, deletButton, editButton }) {
  console.log(teach.age);
  return (
    <>
      <div className="teachlist-co">
        <img className="tea-img" src={teach.avatar} />
        <div className="iner-div">
          <h3 className="tea-name">Name : {teach.name}</h3>
          <p className="tea-age">AGE : {teach.age}</p>
        </div>
        <div className="iner-divs">
          <n className="about-a">
            His/Her-<b>Class:</b>
          </n>
          <div>
            {deletButton}
            {editButton}
          </div>
        </div>
        <h4 className="tea-about">&nbsp; &nbsp;{teach.Class}</h4>
      </div>
    </>
  );
}
