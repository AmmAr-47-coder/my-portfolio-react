import { useEffect, useState, useRef } from "react";
import "./myproject.css";
import AOS from "aos";

function MyProject({ supabase, admin }) {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const load = useRef({});
  const pro = useRef({});
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, image_url,urlgit")
        .order("id", { ascending: false });

      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    };

    fetchPosts();
  }, [supabase]);
  async function del(id){
      const { data, error } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);
      if (error) {
        alert("حدث خطأ أثناء الحذف:"+ data);
      } else {
        alert("تم الحذف بنجاح:");
      }
      pro.current[id].remove();
  }

  return (
    <div>
      <section className="myproject" id="my">
        <h1>
          my project
          {admin && (
            <button
              onClick={() => {
                document.getElementById("cpro").classList.toggle("formd");
              }}
            >
              +
            </button>
          )}
        </h1>

        {admin && (
          <div className="a">
            <form action="" className="form" id="cpro">
              <input type="file" name="" id="jsf" />
              <input
                type="text"
                required
                className="passs"
                id="js"
                placeholder="URL"
              />
              <input
                type="text"
                required
                className="passs"
                id="jsg"
                placeholder="URL Github"
              />
              <input
                className="bttt"
                id="crt"
                type="submit"
                value="Create"
                onClick={async () => {
                  event.preventDefault();
                  const file = jsf.files[0];
                  const url = js.value;
                  const urlg = js.value;
                  if (!file || !url || !urlg ) {
                    alert("رجاءً ارفع صورة واكتب رابط");
                    return;
                  }
                  const filePath = `public/${Date.now()}_${file.name}`;
                  const { data: uploadData, error: uploadError } =
                    await supabase.storage.from("img").upload(filePath, file);
                  if (uploadError) {
                    console.error("خطأ في رفع الصورة:", uploadError + uploadData);
                    alert("فشل رفع الصورة!");
                    return;
                  }
                  const imageUrl = supabase.storage
                    .from("img")
                    .getPublicUrl(filePath).data.publicUrl;
                  const { data: insertData, error: insertError } =
                    await supabase
                      .from("posts")
                      .insert([{ title: url, image_url: imageUrl ,urlgit :urlg}]);
                  if (insertError) {
                    console.error("خطأ في حفظ البيانات:", insertError + insertData);
                    alert("فشل حفظ البيانات!");
                    return;
                  }
                  alert("تم رفع الصورة وحفظ العنوان بنجاح! 🎉");
                  cpro.reset();
                }}
              />
            </form>
          </div>
        )}

        <div className="myprojcat">
          <div className="proo">
            {error && <p>Error: {error.message}</p>}
            {data.map((i) => (
              <div className="proj" key={i.id} ref={(el)=>pro.current[i.id] = el} data-aos="zoom-in">
                {admin &&<button className="del" onClick={()=>del(i.id)} >Delete</button>}
                <div className="imgp">
                  <div
                    className="loading"
                    ref={(el) => (load.current[i.id] = el)}
                  ></div>
                  <img
                    src={i.image_url}
                    alt={i.title}
                    onLoad={() => (load.current[i.id].style.opacity = 0)}
                  />
                </div>
                <div className="btp">
                  <a href={i.title}>live</a>
                  <a href={i.urlgit}>github</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyProject;
