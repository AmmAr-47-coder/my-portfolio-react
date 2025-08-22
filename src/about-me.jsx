import "./about-me.css";
import { useEffect, useRef } from "react";

function Aboutme({ img, admin, textdata, supabase }) {
  const h = useRef(null);
  useEffect(() => {
    h.current.src = `${img.map((item) => item.url)}`;
  }, [img]);
  return (
    <div>
      <section className="Aboutme">
        <h1 id="avv">About me</h1>
        <div className="about">
          <div className="img" ref={h} id="img">
            <div className="loading" id="load2"></div>
            <img
              src={img.map((item) => item.url)}
              alt="kjh"
              onLoad={() => (load2.style.opacity = 0)}
            />
          </div>
          <div className="p">
            {admin && (
              <>
                <button
                  className="edit"
                  id="ed"
                  onClick={() => {
                    sas.style.display = "block";
                    prr.style.display = "block";
                    prr.focus();
                    pr.style.display = "none";
                    ed.style.right = "80px";
                  }}
                >
                  Edit
                </button>
                <button
                  className="save"
                  onClick={async () => {
                    pr.style.display = "block";
                    prr.style.display = "none";
                    sas.style.display = "none";
                    ed.style.right = "0";
                    let ttt = prr.value;
                    const { data: textdata, error: texterror } = await supabase
                      .from("text")
                      .update({ text: ttt })
                      .eq("id", 1);
                  }}
                  id="sas"
                >
                  Save
                </button>
              </>
            )}

            <p className="ppp" id="pr">
              {textdata.map((f) => f.text)}
            </p>
            <textarea
              onChange={(e) => e.target.value}
              defaultValue={textdata.map((f) => f.text)}
              name=""
              id="prr"
            ></textarea>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Aboutme;
