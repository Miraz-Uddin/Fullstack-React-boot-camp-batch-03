const loadBootstrap = (callback) => {
  const existingScript = document.getElementById("bootstrap");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
    script.id = "bootstrap";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadBootstrap;
