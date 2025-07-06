import "./mySkills.css";
function MySkills() {
  return (
    <div>
      <section className="myskills" id="none">
        <h1>My Skills</h1>
        <div className="card bg-transparent">
          <div className="cube">
            <div className="front imgmy">
              <img src="/public/html.png" alt="es" />
            </div>
            <div className="back imgmy">
              <img src="/public/css.png" alt="es" />
            </div>
            <div className="right imgmy">
              <img src="/public/js.png" alt="es" />
            </div>
            <div className="left imgmy">
              <img src="/public/react.png" alt="es" />
            </div>
            <div className="top imgmy">
              <img src="/public/git.png" alt="es" />
            </div>
            <div className="bottom imgmy">
              <img src="/public/github.png" alt="es" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MySkills;
