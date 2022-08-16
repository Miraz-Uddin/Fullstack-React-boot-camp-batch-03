const loadJQuery = (callback) => {
  const existingScript = document.getElementById("jquery");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "assets/vendor/jquery/jquery.min.js";
    script.id = "jquery";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadJQuery;
