import DevicePixel from "./DevicePixel";

window.addEventListener("load", (event) => {
  const devicePixel = new DevicePixel(window.devicePixelRatio);
});
