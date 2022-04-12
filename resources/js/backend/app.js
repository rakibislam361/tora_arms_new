try {
    window.Popper = require("popper.js").default;
    window.$ = window.jQuery = require("jquery");
    window.Swal = require("sweetalert2");
    require("bootstrap");
} catch (e) {
    console.log(e);
}

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Boilerplate
require("./adminLte");
require("./demo");
require("./manage_operation");
require("../plugins");
