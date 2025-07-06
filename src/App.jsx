import { useState, useEffect } from "react";
import Navbar from "./navbar";
import "./index.css";
import Home from "./home";
import Backgrond from "./backgrond";
import Aboutme from "./about-me";
import Loading from "./loading";
import MySkills from "./mySkills";
import MyProject from "./myproject";
import ContactMe from "./Contact-me";
import Footer from "./footer";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = "https://iprlbkddmgolrnkhqwrh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwcmxia2RkbWdvbHJua2hxd3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MDA1ODIsImV4cCI6MjA2MTM3NjU4Mn0.x5ueV-3t0uzsS9ifzQRO9m8dT5Iv8OF2qu0_n3M-Dwk";
const supabase = createClient(supabaseUrl, supabaseKey);
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [datat, setDatat] = useState([]);
  const [datap, setDatap] = useState([]);
  const [datam, setDatam] = useState([]);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    async function pass() {
      const { data, error } = await supabase
        .from("password")
        .select("id, password");
      if (error) {
        setDatap(data[0].password);
      } else {
        setDatap(data[0].password);
      }
    }
    pass();
    async function mass() {
      const { data, error } = await supabase
        .from("contant")
        .select("id, name, email, massge");
      if (error) {
        setDatam(data);
      } else {
        setDatam(data);
      }
    }
    mass();
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("imgpro").select("url");
      if (error) {
        setData(error);
      } else {
        setData(data);
      }
      const { data: textdata, error: texterror } = await supabase
        .from("text")
        .select("text");
      if (texterror) {
        setDatat(texterror);
      } else {
        setDatat(textdata);
      }
    };

    fetchPosts();
  }, [supabase]);
  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };
    setTimeout(() => handlePageLoad(), 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <Backgrond />
          <Loading />
        </>
      ) : (
        <>
          <Backgrond />

          <Home supabase={supabase} img={data} admin={admin} />
          <Aboutme
            img={data}
            supabase={supabase}
            admin={admin}
            textdata={datat}
          />
          <MySkills />
          <MyProject supabase={supabase} admin={admin} />
          <ContactMe supabase={supabase} />
          <Footer />
          <Navbar admin={admin} supabase={supabase} data={datam} setAdmin={setAdmin} p={datap} />
        </>
      )}
    </div>
  );
}

export default App;
