import "./mySkills.css";
function MySkills() {
  return (
    <div>
      <section className="myskills" id="none">
        <h1>My Skills</h1>
        <div className="card bg-transparent">
          <div className="cube">
            <div className="front imgmy">
              <img src="/html.png" alt="es" />
            </div>
            <div className="back imgmy">
              <img src="/css.png" alt="es" />
            </div>
            <div className="right imgmy">
              <img src="/js.png" alt="es" />
            </div>
            <div className="left imgmy">
              <img src="/react.png" alt="es" />
            </div>
            <div className="top imgmy">
              <img src="/git.png" alt="es" />
            </div>
            <div className="bottom imgmy">
              <img src="/github.png" alt="es" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MySkills;
