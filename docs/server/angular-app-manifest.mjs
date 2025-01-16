
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 1383, hash: 'ffdf22a1c3d5b12db8fcec6b576c240a9db7972147aa30a4b178dcf9a397bb2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '446edce63ddaacef29cf2cdb41fb2d48a6e4600131ac18ff8106dde222e6cf81', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 70350, hash: 'd11deee55de098bb6c7c9fce6cca0d034845169796cf822525ebe5e863a64f42', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YKRVUV73.css': {size: 753, hash: 'cztsJeOqaJs', text: () => import('./assets-chunks/styles-YKRVUV73_css.mjs').then(m => m.default)}
  },
};
