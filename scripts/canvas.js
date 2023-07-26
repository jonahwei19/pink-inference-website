module.exports = function startAnimation(frag) {
  return new Promise(async (resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const GlslCanvas = (await import('./glslCanvas.min.js')).default;
      const sandbox = new GlslCanvas(canvas);

      document.getElementById("hero").appendChild(canvas);

      sandbox.load(frag);
      sandbox.setUniform("seed", Math.random());

      const sizer = function () {
        const ww = window.innerWidth;
        const wh = window.innerHeight;
        const dpi = window.devicePixelRatio;
        const s = Math.max(ww, wh);
        
        canvas.width = s * dpi;
        canvas.height = s * dpi;
        canvas.style.width = s + 'px';
        canvas.style.height = s + 'px';
      }

      sizer();

      window.addEventListener('resize', sizer);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
