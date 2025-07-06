import "./about-me.css";
import { useEffect, useRef, useState } from "react";

function Aboutme({ img, admin, textdata, supabase }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textdata && textdata.length > 0) {
      setText(textdata[0].text);
    }
  }, [textdata]);

  const handleSave = async () => {
    setEditing(false);
    await supabase.from("text").update({ text }).eq("id", 1);
  };

  const imageUrl = img && img.length > 0 ? img[0].url : "";

  return (
    <div>
      <section className="Aboutme">
        <h1>About me</h1>
        <div className="about">
          <div className="img" data-aos="fade-right">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="profile"
                onLoad={() => {
                  const loader = document.getElementById("load2");
                  if (loader) loader.style.opacity = 0;
                }}
              />
            )}
          </div>
          <div className="p" data-aos="fade-left" data-aos-delay="250">
            {admin && (
              <>
                {!editing ? (
                  <button className="edit" onClick={() => setEditing(true)}>
                    Edit
                  </button>
                ) : (
                  <button className="save" onClick={handleSave}>
                    Save
                  </button>
                )}
              </>
            )}
            {!editing ? (
              <p className="ppp">{text}</p>
            ) : (
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
