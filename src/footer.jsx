function Footer() {
  return (
    <div>
      <div className="my-5" style={{ position:'absolute',width:'100%'}}>
        <footer className="text-center text-lg-start" style={{ backgroundColor: "rgb(13, 18, 32)" }}>
          <div className="container d-flex justify-content-center py-5">
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "blue" }}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "red" }}>
              <i className="fab fa-youtube"></i>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#2423f5" }}>
              <i className="fab fa-instagram"></i>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#23b9f5" }}>
              <i className="fab fa-twitter"></i>
            </button>
          </div>
          <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2025 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
