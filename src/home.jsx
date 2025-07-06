import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useEffect } from "react";
function Home({ img, admin, supabase }) {
  const g = useRef(null);
  const imginp = useRef(null);
  const o = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  async function saveimg() {
    const file = imginp.current.files[0];
    if (!file) {
      alert("رجاءً ارفع صورة");
      return;
    }

    const filePath = `public/${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from("imgpro")
      .upload(filePath, file);
    if (error) {
      console.error("خطأ في رفع الصورة:", error);
      alert("فشل رفع الصورة!");
      return;
    }
    const imageUrl = supabase.storage.from("imgpro").getPublicUrl(filePath)
      .data.publicUrl;
    const { data: dd, error: de } = await supabase
      .from("imgpro")
      .update({ url: imageUrl })
      .eq("id", 30);
    const { data: sData, error: serror } = await supabase
      .from("imgpro")
      .select("url");
  }
  return (
    <div>
      <div className="home" id="dd">
        <div className="img fade-left" data-aos="fade-left" id="img">
          <div className="loading" id="load"></div>
          <img
            src={img.map((item) => item.url)}
            alt="kjh"
            ref={g}
            onLoad={() => {
              load.style.opacity = "0";
              load.style.zIndex = "0";
            }}
          />
          <div className="btnnn" ref={o}>
            <button
              id="btmm"
              onClick={() => {
                o.current.style.display = "none";
                saveimg();
              }}
            >
              save image
            </button>
            <button
              id="btmn"
              onClick={() => {
                o.current.style.display = "none";
                g.current.src = `${img.map((item) => item.url)}`;
                formimg.reset();
              }}
            >
              cancel
            </button>
          </div>
          {admin && (
            <form id="formimg">
              <input
                ref={imginp}
                type="file"
                id="imgch"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    o.current.style.display = "flex";
                    g.current.src = `${URL.createObjectURL(e.target.files[0])}`;
                  }
                }}
              />
            </form>
          )}
        </div>
        <div className="pro">
          <h1 id="ffdf" data-aos="fade-right" data-aos-delay="250">
            Hello my friend!
          </h1>
          <p id="ffdf2" data-aos="fade-right" data-aos-delay="500">
            My name is Ammar
          </p>
          <p id="ffdf3" data-aos="fade-right" data-aos-delay="750">
            I'm Front-end Developer
          </p>
          <div
            id="ffdf4"
            className="w"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <p>I learned</p>
            <div className="h">
              <a
                href="#"
                className="typewrite"
                data-period="2000"
                data-type='[ "HTMl", "CSS", "JAVA SCRIPT.", "REACT.JS","GIT" ]'
              >
                <span className="wrap"></span>
              </a>
            </div>
          </div>
          <div className="text1" data-aos="fade-right" data-aos-delay="1250">
            <div className="text2">
              <div className="text3">
                <a href="https://www.facebook.com/ammar.shabaan.104">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <span>Facebook</span>
            </div>
            <div className="text2">
              <div className="text3">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <span>YouTube</span>
            </div>
            <div className="text2">
              <div className="text3">
                <a href="https://github.com/AmmAr-47-coder">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <span>Github</span>
            </div>
            <div className="text2">
              <div className="text3">
                <a href="https://t.me/AmmAr_9_11">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
              <span>Telegram</span>
            </div>
            <div className="text2">
              <div className="text3">
                <a href="https://wa.me/201018441798">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <span>Whatsapp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
