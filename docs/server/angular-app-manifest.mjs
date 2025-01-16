
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/desafio-smartfit/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/desafio-smartfit"
  }
],
  assets: {
    'index.csr.html': {size: 1400, hash: '08eb7801167380e46eb743f1cfe48df59b0ab41cbe1022414b58a84668b1423a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1042, hash: 'ac019d42d916fd2a9eac7d85d7ca1c6027a331fd72afd8e10ae7a4c5ae66b507', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 70367, hash: '0a936ff79e934705d9fd327568bfa655a4360c956e42f6985ea8bdd4830f4858', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YKRVUV73.css': {size: 753, hash: 'cztsJeOqaJs', text: () => import('./assets-chunks/styles-YKRVUV73_css.mjs').then(m => m.default)}
  },
};
