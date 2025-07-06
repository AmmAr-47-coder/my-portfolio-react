import "./navbar.css";
import "../public/fontawesome-free-6.7.2-web/css/all.min.css";
import { useRef } from "react";

function Navbar({ admin, setAdmin, p, data, supabase }) {
  const ns = useRef(null);
  const tt = useRef(null);
  const t = useRef(null);
  const mass = useRef(null);
  const masss = useRef({});
  const mas = useRef(null);
  const pas = useRef(null);
  const inps = useRef(null);

  async function del(id) {
    const { data, error } = await supabase
      .from("contant")
      .delete()
      .eq("id", id);
    if (error) {
      alert("حدث خطأ أثناء الحذف:" + data);
    } else {
      alert("تم الحذف بنجاح:");
    }
    masss.current[id].remove();
  }

  return (
    <div className="navh">
      <nav>
        <span className="title">My Portfolio</span>

        {admin && (
          <>
            <i
              onClick={() => mass.current.classList.toggle("masss")}
              className="fa-solid fa-message contt"
            >
              <i className="cont">{data.length}</i>
            </i>

            <div className="massages" ref={mass}>
              {data.map((i) => (
                <div
                  className="massage"
                  key={i.id}
                  ref={(el) => (masss.current[i.id] = el)}
                >
                  <i className="fa-solid fa-user"></i>
                  <span>{i.name}</span>
                  <span className="jjj">
                    email : <span>{i.email}</span>
                  </span>
                  <p>{i.massge}</p>
                  <i
                    className="fa-solid fa-trash vvv"
                    onClick={() => del(i.id)}
                  ></i>
                </div>
              ))}
            </div>
          </>
        )}

        <form className="inps" id="inps" ref={inps}>
          <input
            type="password"
            placeholder="Admin Only"
            required
            ref={pas}
            id="pas"
            onFocus={() => ns.current.classList.remove("navsidew")}
          />
          <span className="mas" ref={mas}>
            the password is wrong
          </span>
          <input
            className="btnps"
            type="submit"
            value="login"
            onClick={(e) => {
              e.preventDefault();
              if (pas.current.value === p) {
                setAdmin(true);
                mas.current.style.color = "green";
                mas.current.innerText = "Done";
                mas.current.style.opacity = 1;
                t.current.innerText = "Admin";
                t.current.style.color = "green";
                tt.current.innerText = "Admin";
                tt.current.style.color = "green";
                setTimeout(() => {
                  mas.current.style.opacity = 0;
                  inps.current.style.display = "none";
                }, 2000);
              } else {
                mas.current.style.color = "red";
                mas.current.innerText = "Wrong";
                mas.current.style.opacity = 1;
                setTimeout(() => {
                  mas.current.style.opacity = 0;
                }, 2000);
                inps.current.reset();
              }
            }}
          />
        </form>

        <div className="nt">
          <span
            id="sfdf1"
            onClick={() => {
              inps.current.classList.toggle("inputno");
              pas.current.focus();
            }}
          >
            <a href="#" ref={tt}>Login</a>
          </span>
          <span id="sfdf2"><a href="#avv">About me</a></span>
          <span id="sfdf3"><a href="#none">My Skills</a></span>
          <span id="sfdf4"><a href="#my">My Project</a></span>
          <span id="sfdf5"><a href="#ggg">Contact Me</a></span>
        </div>
        <div className="navside" ref={ns}>
          <div>
            <span onClick={() => inps.current.classList.toggle("inputno")}>
              <a ref={t}>Login</a>
            </span>
            <span><a href="#avv">About me</a></span>
            <span><a href="#none">My Skills</a></span>
            <span><a href="#my">My Project</a></span>
            <span><a href="#ggg">Contact Me</a></span>
          </div>
        </div>

        <button
          className="btnnav material-symbols-outlined"
          onClick={() => ns.current.classList.toggle("navsidew")}
        >
          dehaze
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
