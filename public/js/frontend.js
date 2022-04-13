(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/frontend"],{

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = (__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"]);
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/frontend/app.js":
/*!**************************************!*\
  !*** ./resources/js/frontend/app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");

__webpack_require__(/*! ./custom */ "./resources/js/frontend/custom.js");

/***/ }),

/***/ "./resources/js/frontend/custom.js":
/*!*****************************************!*\
  !*** ./resources/js/frontend/custom.js ***!
  \*****************************************/
/***/ (() => {

(function ($) {
  var current_fs, next_fs, previous_fs; //fieldsets

  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  var div_id = 1;
  setProgressBar(current);
  $("body").on("click", ".next", function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next(); //Add Class Active

    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active"); //show the next fieldset

    next_fs.show(); //hide the current fieldset with style

    current_fs.animate({
      opacity: 0
    }, {
      step: function step(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        current_fs.css({
          display: "none",
          position: "relative"
        });
        next_fs.css({
          opacity: opacity
        });
      },
      duration: 500
    });
    setProgressBar(++current);
  }).on('change', "#district_permanent", function () {
    var upazilla = JSON.parse($("#upazilla").val());
    var selected_district = $(this).children("option:selected").val();
    var upazilla_name = '';
    upazilla.forEach(function (element) {
      if (element.district_id == selected_district) {
        upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
      }
    });
    $('#police_station_permanent').html(upazilla_name);
  }).on('change', "#district_present", function () {
    var upazilla = JSON.parse($("#upazilla").val());
    var selected_district = $(this).children("option:selected").val();
    var upazilla_name = '';
    upazilla.forEach(function (element) {
      if (element.district_id == selected_district) {
        upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
      }
    });
    $('#police_station_present').html(upazilla_name);
  }).on("click", ".previous", function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev(); //Remove class active

    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active"); //show the previous fieldset

    previous_fs.show(); //hide the current fieldset with style

    current_fs.animate({
      opacity: 0
    }, {
      step: function step(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        current_fs.css({
          display: "none",
          position: "relative"
        });
        previous_fs.css({
          opacity: opacity
        });
      },
      duration: 500
    });
    setProgressBar(--current);
  }).on('change', '#same_as', function () {
    var village = $("#village_present").val();
    var post = $("#post_office_present").val();
    var district = $("#district_present").val();
    var policestation = $("#police_station_present").html();
    $("#village_permanent").val(village);
    $("#post_office_permanent").val(post);
    $("#district_permanent").val(district);
    $("#police_station_permanent").html(policestation);
    $("#police_station_permanent").val($("#police_station_permanent").val());
  }).on("keyup", '.phon_validation', function () {
    var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
        val = this.value;

    if (!valid) {
      console.log("Invalid input!");
      this.value = val.substring(0, val.length - 1);
    }
  }).on("click", ".education_fields", function () {
    div_id++;
    var rdiv = 'removeclass' + div_id;
    $('#education_fields').append("\n                <div class=\"row ".concat(rdiv, "\">\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" class=\"form-control\" name=\"degree_name[]\" placeholder=\"Degree name\">\n                    </div>\n                    <div class=\"col-md-3 col-sm-12\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" name=\"grade[]\" id=\"grade\" value=\"\"\n                                placeholder=\"4.5 \">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-12\">\n                        {{ html()->select('elementary_passing_year[]', collect($years)->prepend('Select', ''), old('elementary_passing_year'))->class('form-control') }}\n                    </div>\n                    <div class=\"col-md-2 col-sm-12\">\n                        <div class=\"input-group-btn\">\n                            <button class=\"btn btn-danger remove_div\" type=\"button\" value=\"").concat(div_id, "\">\n                                <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\">\n                                </span>Remove</button>\n                        </div>\n                    </div>\n                </div>\n            <div class=\"clear\"></div>"));
  }).on("click", ".remove_div", function () {
    var div_id = $(this).val();
    $('.removeclass' + div_id).remove();
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/***/ (() => {

/**
 * Place any jQuery/helper plugins in here.
 */
(function ($) {
  /**
   * Checkbox tree for permission selecting
   */
  var permissionTree = $(".permission-tree :checkbox");
  permissionTree.on("click change", function () {
    if ($(this).is(":checked")) {
      $(this).siblings("ul").find('input[type="checkbox"]').attr("checked", true).attr("disabled", true);
    } else {
      $(this).siblings("ul").find('input[type="checkbox"]').removeAttr("checked").removeAttr("disabled");
    }
  });
  permissionTree.each(function () {
    if ($(this).is(":checked")) {
      $(this).siblings("ul").find('input[type="checkbox"]').attr("checked", true).attr("disabled", true);
    }
  });
  /**
   * Disable submit inputs in the given form
   *
   * @param form
   */

  function disableSubmitButtons(form) {
    form.find('input[type="submit"]').attr("disabled", true);
    form.find('button[type="submit"]').attr("disabled", true);
  }
  /**
   * Enable the submit inputs in a given form
   *
   * @param form
   */


  function enableSubmitButtons(form) {
    form.find('input[type="submit"]').removeAttr("disabled");
    form.find('button[type="submit"]').removeAttr("disabled");
  }
  /**
   * Disable all submit buttons once clicked
   */


  $("form").submit(function () {
    disableSubmitButtons($(this));
    return true;
  });
  /**
   * Add a confirmation to a delete button/form
   */

  $("body").on("click", "a[data-method=delete]", function (e) {
    e.preventDefault();
    var button = $(this);
    var href = button.attr("href");
    Swal.fire({
      text: "Are you sure you want to delete this item?",
      showCancelButton: true,
      confirmButtonText: "Confirm Delete",
      cancelButtonText: "Cancel",
      icon: "warning"
    }).then(function (result) {
      if (result.value) {
        axios["delete"](href).then(function (response) {
          var res = response.data;

          if (res.status) {
            Swal.fire({
              icon: res.icon,
              text: res.msg
            });
            button.closest("tr").remove();
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          } else {
            Swal.fire({
              icon: res.icon,
              text: res.msg
            });
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          }
        });
      }
    });
  }).on("submit", "form[name=confirm-item]", function (e) {
    var _this = this;

    e.preventDefault();
    Swal.fire({
      title: "Are you sure you want to do this?",
      showCancelButton: true,
      confirmButtonText: "Continue",
      cancelButtonText: "Cancel",
      icon: "warning"
    }).then(function (result) {
      if (result.value) {
        _this.submit();
      } else {
        enableSubmitButtons($(_this));
      }
    });
  }).on("click", "a[name=confirm-item]", function (e) {
    var _this2 = this;

    /**
     * Add an 'are you sure' pop-up to any button/link
     */
    e.preventDefault();
    Swal.fire({
      title: "Are you sure you want to do this?",
      showCancelButton: true,
      confirmButtonText: "Continue",
      cancelButtonText: "Cancel",
      icon: "info"
    }).then(function (result) {
      result.value && window.location.assign($(_this2).attr("href"));
    });
  }); // Remember tab on page load

  $('a[data-toggle="tab"], a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    var hash = $(e.target).attr("href");
    history.pushState ? history.pushState(null, null, hash) : location.hash = hash;
  });
  var hash = window.location.hash;

  if (hash) {
    $('.nav-link[href="' + hash + '"]').tab("show");
  } // Enable tooltips everywhere


  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);

/***/ }),

/***/ "./resources/sass/frontend/app.scss":
/*!******************************************!*\
  !*** ./resources/sass/frontend/app.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/backend/app.scss":
/*!*****************************************!*\
  !*** ./resources/sass/backend/app.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/backend/extend.scss":
/*!********************************************!*\
  !*** ./resources/sass/backend/extend.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/backend","css/frontend","css/admin/extend","/js/vendor"], () => (__webpack_exec__("./resources/js/frontend/app.js"), __webpack_exec__("./resources/sass/frontend/app.scss"), __webpack_exec__("./resources/sass/backend/app.scss"), __webpack_exec__("./resources/sass/backend/extend.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2N1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9mcm9udGVuZC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9iYWNrZW5kL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2JhY2tlbmQvZXh0ZW5kLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxudHJ5IHtcbiAgIHdpbmRvdy5Qb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKS5kZWZhdWx0O1xuICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbiAgIHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xufSBjYXRjaCAoZSkge1xufVxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxuLy8gfSk7XG4iLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxuXG5yZXF1aXJlKCcuLi9ib290c3RyYXAnKTtcblxuXG5yZXF1aXJlKCcuLi9wbHVnaW5zJyk7XG5yZXF1aXJlKCcuL2N1c3RvbScpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgdmFyIGN1cnJlbnRfZnMsIG5leHRfZnMsIHByZXZpb3VzX2ZzOyAvL2ZpZWxkc2V0c1xuICAgIHZhciBvcGFjaXR5O1xuICAgIHZhciBjdXJyZW50ID0gMTtcbiAgICB2YXIgc3RlcHMgPSAkKFwiZmllbGRzZXRcIikubGVuZ3RoO1xuICAgIHZhciBkaXZfaWQgPSAxO1xuXG4gICAgc2V0UHJvZ3Jlc3NCYXIoY3VycmVudCk7XG5cbiAgICAkKFwiYm9keVwiKVxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5uZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRfZnMgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgbmV4dF9mcyA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xuICAgICAgICAgICAgLy9BZGQgQ2xhc3MgQWN0aXZlXG4gICAgICAgICAgICAkKFwiI3Byb2dyZXNzYmFyIGxpXCIpXG4gICAgICAgICAgICAgICAgLmVxKCQoXCJmaWVsZHNldFwiKS5pbmRleChuZXh0X2ZzKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIC8vc2hvdyB0aGUgbmV4dCBmaWVsZHNldFxuICAgICAgICAgICAgbmV4dF9mcy5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vaGlkZSB0aGUgY3VycmVudCBmaWVsZHNldCB3aXRoIHN0eWxlXG4gICAgICAgICAgICBjdXJyZW50X2ZzLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbiAobm93KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBtYWtpbmcgZmllbHNldCBhcHBlYXIgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSAxIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfZnMuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfZnMuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRQcm9ncmVzc0JhcigrK2N1cnJlbnQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NoYW5nZScsIFwiI2Rpc3RyaWN0X3Blcm1hbmVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXBhemlsbGEgPSBKU09OLnBhcnNlKCQoXCIjdXBhemlsbGFcIikudmFsKCkpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX2Rpc3RyaWN0ID0gJCh0aGlzKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciB1cGF6aWxsYV9uYW1lID0gJyc7XG4gICAgICAgICAgICB1cGF6aWxsYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmRpc3RyaWN0X2lkID09IHNlbGVjdGVkX2Rpc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVwYXppbGxhX25hbWUgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgZWxlbWVudC5pZCArICdcIj4nICsgZWxlbWVudC5uYW1lICsgJzwvb3B0aW9uPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJyNwb2xpY2Vfc3RhdGlvbl9wZXJtYW5lbnQnKS5odG1sKHVwYXppbGxhX25hbWUpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2hhbmdlJywgXCIjZGlzdHJpY3RfcHJlc2VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXBhemlsbGEgPSBKU09OLnBhcnNlKCQoXCIjdXBhemlsbGFcIikudmFsKCkpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX2Rpc3RyaWN0ID0gJCh0aGlzKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciB1cGF6aWxsYV9uYW1lID0gJyc7XG5cbiAgICAgICAgICAgIHVwYXppbGxhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGlzdHJpY3RfaWQgPT0gc2VsZWN0ZWRfZGlzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBhemlsbGFfbmFtZSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBlbGVtZW50LmlkICsgJ1wiPicgKyBlbGVtZW50Lm5hbWUgKyAnPC9vcHRpb24+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3BvbGljZV9zdGF0aW9uX3ByZXNlbnQnKS5odG1sKHVwYXppbGxhX25hbWUpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5wcmV2aW91c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdXJyZW50X2ZzID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICAgICAgICAgIHByZXZpb3VzX2ZzID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCk7XG4gICAgICAgICAgICAvL1JlbW92ZSBjbGFzcyBhY3RpdmVcbiAgICAgICAgICAgICQoXCIjcHJvZ3Jlc3NiYXIgbGlcIilcbiAgICAgICAgICAgICAgICAuZXEoJChcImZpZWxkc2V0XCIpLmluZGV4KGN1cnJlbnRfZnMpKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgLy9zaG93IHRoZSBwcmV2aW91cyBmaWVsZHNldFxuICAgICAgICAgICAgcHJldmlvdXNfZnMuc2hvdygpO1xuXG4gICAgICAgICAgICAvL2hpZGUgdGhlIGN1cnJlbnQgZmllbGRzZXQgd2l0aCBzdHlsZVxuICAgICAgICAgICAgY3VycmVudF9mcy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24gKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgbWFraW5nIGZpZWxzZXQgYXBwZWFyIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gMSAtIG5vdztcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2ZzLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c19mcy5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKC0tY3VycmVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2hhbmdlJywgJyNzYW1lX2FzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZpbGxhZ2UgPSAkKFwiI3ZpbGxhZ2VfcHJlc2VudFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBwb3N0ID0gJChcIiNwb3N0X29mZmljZV9wcmVzZW50XCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGRpc3RyaWN0ID0gJChcIiNkaXN0cmljdF9wcmVzZW50XCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHBvbGljZXN0YXRpb24gPSAkKFwiI3BvbGljZV9zdGF0aW9uX3ByZXNlbnRcIikuaHRtbCgpO1xuXG4gICAgICAgICAgICAkKFwiI3ZpbGxhZ2VfcGVybWFuZW50XCIpLnZhbCh2aWxsYWdlKTtcbiAgICAgICAgICAgICQoXCIjcG9zdF9vZmZpY2VfcGVybWFuZW50XCIpLnZhbChwb3N0KTtcbiAgICAgICAgICAgICQoXCIjZGlzdHJpY3RfcGVybWFuZW50XCIpLnZhbChkaXN0cmljdCk7XG4gICAgICAgICAgICAkKFwiI3BvbGljZV9zdGF0aW9uX3Blcm1hbmVudFwiKS5odG1sKHBvbGljZXN0YXRpb24pO1xuICAgICAgICAgICAgJChcIiNwb2xpY2Vfc3RhdGlvbl9wZXJtYW5lbnRcIikudmFsKCQoXCIjcG9saWNlX3N0YXRpb25fcGVybWFuZW50XCIpLnZhbCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwia2V5dXBcIiwgJy5waG9uX3ZhbGlkYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSAvXlxcZHswLDExfShcXC5cXGR7MCwyfSk/JC8udGVzdCh0aGlzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGlucHV0IVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsLnN1YnN0cmluZygwLCB2YWwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLmVkdWNhdGlvbl9maWVsZHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGl2X2lkKys7XG4gICAgICAgICAgICB2YXIgcmRpdiA9ICdyZW1vdmVjbGFzcycgKyBkaXZfaWQ7XG4gICAgICAgICAgICAkKCcjZWR1Y2F0aW9uX2ZpZWxkcycpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyAke3JkaXZ9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVncmVlX25hbWVbXVwiIHBsYWNlaG9sZGVyPVwiRGVncmVlIG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZ3JhZGVbXVwiIGlkPVwiZ3JhZGVcIiB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNC41IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBodG1sKCktPnNlbGVjdCgnZWxlbWVudGFyeV9wYXNzaW5nX3llYXJbXScsIGNvbGxlY3QoJHllYXJzKS0+cHJlcGVuZCgnU2VsZWN0JywgJycpLCBvbGQoJ2VsZW1lbnRhcnlfcGFzc2luZ195ZWFyJykpLT5jbGFzcygnZm9ybS1jb250cm9sJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgcmVtb3ZlX2RpdlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIiR7ZGl2X2lkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyXCI+PC9kaXY+YCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnJlbW92ZV9kaXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRpdl9pZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAkKCcucmVtb3ZlY2xhc3MnICsgZGl2X2lkKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9ncmVzc0JhcihjdXJTdGVwKSB7XG4gICAgICAgIHZhciBwZXJjZW50ID0gcGFyc2VGbG9hdCgxMDAgLyBzdGVwcykgKiBjdXJTdGVwO1xuICAgICAgICBwZXJjZW50ID0gcGVyY2VudC50b0ZpeGVkKCk7XG4gICAgICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHBlcmNlbnQgKyBcIiVcIik7XG4gICAgfVxuXG4gICAgJChcIi5zdWJtaXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cblxufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogUGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLlxuICovXG4oZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDaGVja2JveCB0cmVlIGZvciBwZXJtaXNzaW9uIHNlbGVjdGluZ1xuICAgICAqL1xuICAgIGxldCBwZXJtaXNzaW9uVHJlZSA9ICQoXCIucGVybWlzc2lvbi10cmVlIDpjaGVja2JveFwiKTtcblxuICAgIHBlcm1pc3Npb25UcmVlLm9uKFwiY2xpY2sgY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcInVsXCIpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjaGVja2VkXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKFwiY2hlY2tlZFwiKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHBlcm1pc3Npb25UcmVlLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwidWxcIilcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cihcImNoZWNrZWRcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHN1Ym1pdCBpbnB1dHMgaW4gdGhlIGdpdmVuIGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBzdWJtaXQgaW5wdXRzIGluIGEgZ2l2ZW4gZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbmFibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWxsIHN1Ym1pdCBidXR0b25zIG9uY2UgY2xpY2tlZFxuICAgICAqL1xuICAgICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbmZpcm1hdGlvbiB0byBhIGRlbGV0ZSBidXR0b24vZm9ybVxuICAgICAqL1xuICAgICQoXCJib2R5XCIpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiYVtkYXRhLW1ldGhvZD1kZWxldGVdXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGJ1dHRvbi5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkNvbmZpcm0gRGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGhyZWYpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogcmVzLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsb3Nlc3QoXCJ0clwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiByZXMuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwic3VibWl0XCIsIFwiZm9ybVtuYW1lPWNvbmZpcm0taXRlbV1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjbGlja1wiLCBcImFbbmFtZT1jb25maXJtLWl0ZW1dXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBhbiAnYXJlIHlvdSBzdXJlJyBwb3AtdXAgdG8gYW55IGJ1dHRvbi9saW5rXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImluZm9cIixcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiB3aW5kb3cubG9jYXRpb24uYXNzaWduKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gUmVtZW1iZXIgdGFiIG9uIHBhZ2UgbG9hZFxuICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIGFbZGF0YS10b2dnbGU9XCJwaWxsXCJdJykub24oXG4gICAgICAgIFwic2hvd24uYnMudGFiXCIsXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgaGFzaCA9ICQoZS50YXJnZXQpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUgP1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGhhc2gpIDpcbiAgICAgICAgICAgICAgICAobG9jYXRpb24uaGFzaCA9IGhhc2gpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgJCgnLm5hdi1saW5rW2hyZWY9XCInICsgaGFzaCArICdcIl0nKS50YWIoXCJzaG93XCIpO1xuICAgIH1cblxuICAgIC8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbn0pKGpRdWVyeSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sIm5hbWVzIjpbIndpbmRvdyIsIl8iLCJyZXF1aXJlIiwiUG9wcGVyIiwiJCIsImpRdWVyeSIsImUiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImN1cnJlbnRfZnMiLCJuZXh0X2ZzIiwicHJldmlvdXNfZnMiLCJvcGFjaXR5IiwiY3VycmVudCIsInN0ZXBzIiwibGVuZ3RoIiwiZGl2X2lkIiwic2V0UHJvZ3Jlc3NCYXIiLCJvbiIsInBhcmVudCIsIm5leHQiLCJlcSIsImluZGV4IiwiYWRkQ2xhc3MiLCJzaG93IiwiYW5pbWF0ZSIsInN0ZXAiLCJub3ciLCJjc3MiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsInVwYXppbGxhIiwiSlNPTiIsInBhcnNlIiwidmFsIiwic2VsZWN0ZWRfZGlzdHJpY3QiLCJjaGlsZHJlbiIsInVwYXppbGxhX25hbWUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRpc3RyaWN0X2lkIiwiaWQiLCJuYW1lIiwiaHRtbCIsInByZXYiLCJyZW1vdmVDbGFzcyIsInZpbGxhZ2UiLCJwb3N0IiwiZGlzdHJpY3QiLCJwb2xpY2VzdGF0aW9uIiwidmFsaWQiLCJ0ZXN0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3Vic3RyaW5nIiwicmRpdiIsImFwcGVuZCIsInJlbW92ZSIsImN1clN0ZXAiLCJwZXJjZW50IiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGljayIsInBlcm1pc3Npb25UcmVlIiwiaXMiLCJzaWJsaW5ncyIsImZpbmQiLCJhdHRyIiwicmVtb3ZlQXR0ciIsImVhY2giLCJkaXNhYmxlU3VibWl0QnV0dG9ucyIsImZvcm0iLCJlbmFibGVTdWJtaXRCdXR0b25zIiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJocmVmIiwiU3dhbCIsImZpcmUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImljb24iLCJ0aGVuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwibXNnIiwiY2xvc2VzdCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInRpdGxlIiwiYXNzaWduIiwiaGFzaCIsInRhcmdldCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0YWIiLCJ0b29sdGlwIl0sInNvdXJjZVJvb3QiOiIifQ==