(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/backend"],{

/***/ "./resources/js/backend/adminLte.js":
/*!******************************************!*\
  !*** ./resources/js/backend/adminLte.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * AdminLTE v3.0.5 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (exports) {
  'use strict';
  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */

  var ControlSidebar = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'ControlSidebar';
    var DATA_KEY = 'lte.controlsidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: "collapsed" + EVENT_KEY,
      EXPANDED: "expanded" + EVENT_KEY
    };
    var Selector = {
      CONTROL_SIDEBAR: '.control-sidebar',
      CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
      DATA_TOGGLE: '[data-widget="control-sidebar"]',
      CONTENT: '.content-wrapper',
      HEADER: '.main-header',
      FOOTER: '.main-footer'
    };
    var ClassName = {
      CONTROL_SIDEBAR_ANIMATE: 'control-sidebar-animate',
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open',
      CONTROL_SIDEBAR_SLIDE: 'control-sidebar-slide-open',
      LAYOUT_FIXED: 'layout-fixed',
      NAVBAR_FIXED: 'layout-navbar-fixed',
      NAVBAR_SM_FIXED: 'layout-sm-navbar-fixed',
      NAVBAR_MD_FIXED: 'layout-md-navbar-fixed',
      NAVBAR_LG_FIXED: 'layout-lg-navbar-fixed',
      NAVBAR_XL_FIXED: 'layout-xl-navbar-fixed',
      FOOTER_FIXED: 'layout-footer-fixed',
      FOOTER_SM_FIXED: 'layout-sm-footer-fixed',
      FOOTER_MD_FIXED: 'layout-md-footer-fixed',
      FOOTER_LG_FIXED: 'layout-lg-footer-fixed',
      FOOTER_XL_FIXED: 'layout-xl-footer-fixed'
    };
    var Default = {
      controlsidebarSlide: true,
      scrollbarTheme: 'os-theme-light',
      scrollbarAutoHide: 'l'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var ControlSidebar = /*#__PURE__*/function () {
      function ControlSidebar(element, config) {
        this._element = element;
        this._config = config;

        this._init();
      } // Public


      var _proto = ControlSidebar.prototype;

      _proto.collapse = function collapse() {
        // Show the control sidebar
        if (this._config.controlsidebarSlide) {
          $('html').addClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
            $(Selector.CONTROL_SIDEBAR).hide();
            $('html').removeClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
            $(this).dequeue();
          });
        } else {
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      _proto.show = function show() {
        // Collapse the control sidebar
        if (this._config.controlsidebarSlide) {
          $('html').addClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
          $(Selector.CONTROL_SIDEBAR).show().delay(10).queue(function () {
            $('body').addClass(ClassName.CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
              $('html').removeClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
              $(this).dequeue();
            });
            $(this).dequeue();
          });
        } else {
          $('body').addClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }

        var expandedEvent = $.Event(Event.EXPANDED);
        $(this._element).trigger(expandedEvent);
      };

      _proto.toggle = function toggle() {
        var shouldClose = $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE);

        if (shouldClose) {
          // Close the control sidebar
          this.collapse();
        } else {
          // Open the control sidebar
          this.show();
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this;

        this._fixHeight();

        this._fixScrollHeight();

        $(window).resize(function () {
          _this._fixHeight();

          _this._fixScrollHeight();
        });
        $(window).scroll(function () {
          if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE)) {
            _this._fixScrollHeight();
          }
        });
      };

      _proto._fixScrollHeight = function _fixScrollHeight() {
        var heights = {
          scroll: $(document).height(),
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight()
        };
        var positions = {
          bottom: Math.abs(heights.window + $(window).scrollTop() - heights.scroll),
          top: $(window).scrollTop()
        };
        var navbarFixed = false;
        var footerFixed = false;

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          if ($('body').hasClass(ClassName.NAVBAR_FIXED) || $('body').hasClass(ClassName.NAVBAR_SM_FIXED) || $('body').hasClass(ClassName.NAVBAR_MD_FIXED) || $('body').hasClass(ClassName.NAVBAR_LG_FIXED) || $('body').hasClass(ClassName.NAVBAR_XL_FIXED)) {
            if ($(Selector.HEADER).css("position") === "fixed") {
              navbarFixed = true;
            }
          }

          if ($('body').hasClass(ClassName.FOOTER_FIXED) || $('body').hasClass(ClassName.FOOTER_SM_FIXED) || $('body').hasClass(ClassName.FOOTER_MD_FIXED) || $('body').hasClass(ClassName.FOOTER_LG_FIXED) || $('body').hasClass(ClassName.FOOTER_XL_FIXED)) {
            if ($(Selector.FOOTER).css("position") === "fixed") {
              footerFixed = true;
            }
          }

          if (positions.top === 0 && positions.bottom === 0) {
            $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer);
            $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.header + heights.footer));
          } else if (positions.bottom <= heights.footer) {
            if (footerFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer - positions.bottom);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.footer - positions.bottom));
            } else {
              $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer);
            }
          } else if (positions.top <= heights.header) {
            if (navbarFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header - positions.top);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.header - positions.top));
            } else {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            }
          } else {
            if (navbarFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('top', 0);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window);
            } else {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            }
          }
        }
      };

      _proto._fixHeight = function _fixHeight() {
        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight()
        };

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          var sidebarHeight = heights.window - heights.header;

          if ($('body').hasClass(ClassName.FOOTER_FIXED) || $('body').hasClass(ClassName.FOOTER_SM_FIXED) || $('body').hasClass(ClassName.FOOTER_MD_FIXED) || $('body').hasClass(ClassName.FOOTER_LG_FIXED) || $('body').hasClass(ClassName.FOOTER_XL_FIXED)) {
            if ($(Selector.FOOTER).css("position") === "fixed") {
              sidebarHeight = heights.window - heights.header - heights.footer;
            }
          }

          $(Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', sidebarHeight);

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      } // Static
      ;

      ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new ControlSidebar(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (data[operation] === 'undefined') {
            throw new Error(operation + " is not a function");
          }

          data[operation]();
        });
      };

      return ControlSidebar;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      ControlSidebar._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = ControlSidebar._jQueryInterface;
    $.fn[NAME].Constructor = ControlSidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ControlSidebar._jQueryInterface;
    };

    return ControlSidebar;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */


  var Layout = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Layout';
    var DATA_KEY = 'lte.layout';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      HEADER: '.main-header',
      MAIN_SIDEBAR: '.main-sidebar',
      SIDEBAR: '.main-sidebar .sidebar',
      CONTENT: '.content-wrapper',
      BRAND: '.brand-link',
      CONTENT_HEADER: '.content-header',
      WRAPPER: '.wrapper',
      CONTROL_SIDEBAR: '.control-sidebar',
      CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
      CONTROL_SIDEBAR_BTN: '[data-widget="control-sidebar"]',
      LAYOUT_FIXED: '.layout-fixed',
      FOOTER: '.main-footer',
      PUSHMENU_BTN: '[data-widget="pushmenu"]',
      LOGIN_BOX: '.login-box',
      REGISTER_BOX: '.register-box'
    };
    var ClassName = {
      HOLD: 'hold-transition',
      SIDEBAR: 'main-sidebar',
      CONTENT_FIXED: 'content-fixed',
      SIDEBAR_FOCUSED: 'sidebar-focused',
      LAYOUT_FIXED: 'layout-fixed',
      NAVBAR_FIXED: 'layout-navbar-fixed',
      FOOTER_FIXED: 'layout-footer-fixed',
      LOGIN_PAGE: 'login-page',
      REGISTER_PAGE: 'register-page',
      CONTROL_SIDEBAR_SLIDE_OPEN: 'control-sidebar-slide-open',
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open'
    };
    var Default = {
      scrollbarTheme: 'os-theme-light',
      scrollbarAutoHide: 'l',
      panelAutoHeight: true,
      loginRegisterAutoHeight: true
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Layout = /*#__PURE__*/function () {
      function Layout(element, config) {
        this._config = config;
        this._element = element;

        this._init();
      } // Public


      var _proto = Layout.prototype;

      _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
        if (extra === void 0) {
          extra = null;
        }

        var control_sidebar = 0;

        if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || extra == 'control_sidebar') {
          control_sidebar = $(Selector.CONTROL_SIDEBAR_CONTENT).height();
        }

        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).length !== 0 ? $(Selector.HEADER).outerHeight() : 0,
          footer: $(Selector.FOOTER).length !== 0 ? $(Selector.FOOTER).outerHeight() : 0,
          sidebar: $(Selector.SIDEBAR).length !== 0 ? $(Selector.SIDEBAR).height() : 0,
          control_sidebar: control_sidebar
        };

        var max = this._max(heights);

        var offset = this._config.panelAutoHeight;

        if (offset === true) {
          offset = 0;
        }

        if (offset !== false) {
          if (max == heights.control_sidebar) {
            $(Selector.CONTENT).css('min-height', max + offset);
          } else if (max == heights.window) {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header - heights.footer);
          } else {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header);
          }

          if (this._isFooterFixed()) {
            $(Selector.CONTENT).css('min-height', parseFloat($(Selector.CONTENT).css('min-height')) + heights.footer);
          }
        }

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          if (offset !== false) {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header - heights.footer);
          }

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.SIDEBAR).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      };

      _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
        if ($(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).length === 0) {
          $('body, html').css('height', 'auto');
        } else if ($(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).length !== 0) {
          var box_height = $(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).height();

          if ($('body').css('min-height') !== box_height) {
            $('body').css('min-height', box_height);
          }
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this; // Activate layout height watcher


        this.fixLayoutHeight();

        if (this._config.loginRegisterAutoHeight === true) {
          this.fixLoginRegisterHeight();
        } else if (Number.isInteger(this._config.loginRegisterAutoHeight)) {
          setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
        }

        $(Selector.SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
          _this.fixLayoutHeight();
        }).on('expanded.lte.controlsidebar', function () {
          _this.fixLayoutHeight('control_sidebar');
        });
        $(window).resize(function () {
          _this.fixLayoutHeight();
        });
        setTimeout(function () {
          $('body.hold-transition').removeClass('hold-transition');
        }, 50);
      };

      _proto._max = function _max(numbers) {
        // Calculate the maximum number in a list
        var max = 0;
        Object.keys(numbers).forEach(function (key) {
          if (numbers[key] > max) {
            max = numbers[key];
          }
        });
        return max;
      };

      _proto._isFooterFixed = function _isFooterFixed() {
        return $('.main-footer').css('position') === 'fixed';
      } // Static
      ;

      Layout._jQueryInterface = function _jQueryInterface(config) {
        if (config === void 0) {
          config = '';
        }

        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Layout($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init' || config === '') {
            data['_init']();
          } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
            data[config]();
          }
        });
      };

      return Layout;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      Layout._jQueryInterface.call($('body'));
    });
    $(Selector.SIDEBAR + ' a').on('focusin', function () {
      $(Selector.MAIN_SIDEBAR).addClass(ClassName.SIDEBAR_FOCUSED);
    });
    $(Selector.SIDEBAR + ' a').on('focusout', function () {
      $(Selector.MAIN_SIDEBAR).removeClass(ClassName.SIDEBAR_FOCUSED);
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Layout._jQueryInterface;
    $.fn[NAME].Constructor = Layout;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Layout._jQueryInterface;
    };

    return Layout;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */


  var PushMenu = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'PushMenu';
    var DATA_KEY = 'lte.pushmenu';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: "collapsed" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY
    };
    var Default = {
      autoCollapseSize: 992,
      enableRemember: false,
      noTransitionAfterReload: true
    };
    var Selector = {
      TOGGLE_BUTTON: '[data-widget="pushmenu"]',
      SIDEBAR_MINI: '.sidebar-mini',
      SIDEBAR_COLLAPSED: '.sidebar-collapse',
      BODY: 'body',
      OVERLAY: '#sidebar-overlay',
      WRAPPER: '.wrapper'
    };
    var ClassName = {
      COLLAPSED: 'sidebar-collapse',
      OPEN: 'sidebar-open',
      CLOSED: 'sidebar-closed'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var PushMenu = /*#__PURE__*/function () {
      function PushMenu(element, options) {
        this._element = element;
        this._options = $.extend({}, Default, options);

        if (!$(Selector.OVERLAY).length) {
          this._addOverlay();
        }

        this._init();
      } // Public


      var _proto = PushMenu.prototype;

      _proto.expand = function expand() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).addClass(ClassName.OPEN);
          }
        }

        $(Selector.BODY).removeClass(ClassName.COLLAPSED).removeClass(ClassName.CLOSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember" + EVENT_KEY, ClassName.OPEN);
        }

        var shownEvent = $.Event(Event.SHOWN);
        $(this._element).trigger(shownEvent);
      };

      _proto.collapse = function collapse() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).removeClass(ClassName.OPEN).addClass(ClassName.CLOSED);
          }
        }

        $(Selector.BODY).addClass(ClassName.COLLAPSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember" + EVENT_KEY, ClassName.COLLAPSED);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      _proto.toggle = function toggle() {
        if (!$(Selector.BODY).hasClass(ClassName.COLLAPSED)) {
          this.collapse();
        } else {
          this.expand();
        }
      };

      _proto.autoCollapse = function autoCollapse(resize) {
        if (resize === void 0) {
          resize = false;
        }

        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            if (!$(Selector.BODY).hasClass(ClassName.OPEN)) {
              this.collapse();
            }
          } else if (resize == true) {
            if ($(Selector.BODY).hasClass(ClassName.OPEN)) {
              $(Selector.BODY).removeClass(ClassName.OPEN);
            } else if ($(Selector.BODY).hasClass(ClassName.CLOSED)) {
              this.expand();
            }
          }
        }
      };

      _proto.remember = function remember() {
        if (this._options.enableRemember) {
          var toggleState = localStorage.getItem("remember" + EVENT_KEY);

          if (toggleState == ClassName.COLLAPSED) {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').addClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").addClass(ClassName.COLLAPSED);
            }
          } else {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').removeClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").removeClass(ClassName.COLLAPSED);
            }
          }
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this;

        this.remember();
        this.autoCollapse();
        $(window).resize(function () {
          _this.autoCollapse(true);
        });
      };

      _proto._addOverlay = function _addOverlay() {
        var _this2 = this;

        var overlay = $('<div />', {
          id: 'sidebar-overlay'
        });
        overlay.on('click', function () {
          _this2.collapse();
        });
        $(Selector.WRAPPER).append(overlay);
      } // Static
      ;

      PushMenu._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new PushMenu(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (typeof operation === 'string' && operation.match(/collapse|expand|toggle/)) {
            data[operation]();
          }
        });
      };

      return PushMenu;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.TOGGLE_BUTTON, function (event) {
      event.preventDefault();
      var button = event.currentTarget;

      if ($(button).data('widget') !== 'pushmenu') {
        button = $(button).closest(Selector.TOGGLE_BUTTON);
      }

      PushMenu._jQueryInterface.call($(button), 'toggle');
    });
    $(window).on('load', function () {
      PushMenu._jQueryInterface.call($(Selector.TOGGLE_BUTTON));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = PushMenu._jQueryInterface;
    $.fn[NAME].Constructor = PushMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return PushMenu._jQueryInterface;
    };

    return PushMenu;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */


  var Treeview = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Treeview';
    var DATA_KEY = 'lte.treeview';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      SELECTED: "selected" + EVENT_KEY,
      EXPANDED: "expanded" + EVENT_KEY,
      COLLAPSED: "collapsed" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY
    };
    var Selector = {
      LI: '.nav-item',
      LINK: '.nav-link',
      TREEVIEW_MENU: '.nav-treeview',
      OPEN: '.menu-open',
      DATA_WIDGET: '[data-widget="treeview"]'
    };
    var ClassName = {
      LI: 'nav-item',
      LINK: 'nav-link',
      TREEVIEW_MENU: 'nav-treeview',
      OPEN: 'menu-open',
      SIDEBAR_COLLAPSED: 'sidebar-collapse'
    };
    var Default = {
      trigger: Selector.DATA_WIDGET + " " + Selector.LINK,
      animationSpeed: 300,
      accordion: true,
      expandSidebar: false,
      sidebarButtonSelector: '[data-widget="pushmenu"]'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Treeview = /*#__PURE__*/function () {
      function Treeview(element, config) {
        this._config = config;
        this._element = element;
      } // Public


      var _proto = Treeview.prototype;

      _proto.init = function init() {
        this._setupListeners();
      };

      _proto.expand = function expand(treeviewMenu, parentLi) {
        var _this = this;

        var expandedEvent = $.Event(Event.EXPANDED);

        if (this._config.accordion) {
          var openMenuLi = parentLi.siblings(Selector.OPEN).first();
          var openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first();
          this.collapse(openTreeview, openMenuLi);
        }

        treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
          parentLi.addClass(ClassName.OPEN);
          $(_this._element).trigger(expandedEvent);
        });

        if (this._config.expandSidebar) {
          this._expandSidebar();
        }
      };

      _proto.collapse = function collapse(treeviewMenu, parentLi) {
        var _this2 = this;

        var collapsedEvent = $.Event(Event.COLLAPSED);
        treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
          parentLi.removeClass(ClassName.OPEN);
          $(_this2._element).trigger(collapsedEvent);
          treeviewMenu.find(Selector.OPEN + " > " + Selector.TREEVIEW_MENU).slideUp();
          treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN);
        });
      };

      _proto.toggle = function toggle(event) {
        var $relativeTarget = $(event.currentTarget);
        var $parent = $relativeTarget.parent();
        var treeviewMenu = $parent.find('> ' + Selector.TREEVIEW_MENU);

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
          if (!$parent.is(Selector.LI)) {
            treeviewMenu = $parent.parent().find('> ' + Selector.TREEVIEW_MENU);
          }

          if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
            return;
          }
        }

        event.preventDefault();
        var parentLi = $relativeTarget.parents(Selector.LI).first();
        var isOpen = parentLi.hasClass(ClassName.OPEN);

        if (isOpen) {
          this.collapse($(treeviewMenu), parentLi);
        } else {
          this.expand($(treeviewMenu), parentLi);
        }
      } // Private
      ;

      _proto._setupListeners = function _setupListeners() {
        var _this3 = this;

        $(document).on('click', this._config.trigger, function (event) {
          _this3.toggle(event);
        });
      };

      _proto._expandSidebar = function _expandSidebar() {
        if ($('body').hasClass(ClassName.SIDEBAR_COLLAPSED)) {
          $(this._config.sidebarButtonSelector).PushMenu('expand');
        }
      } // Static
      ;

      Treeview._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Treeview($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return Treeview;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_WIDGET).each(function () {
        Treeview._jQueryInterface.call($(this), 'init');
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Treeview._jQueryInterface;
    $.fn[NAME].Constructor = Treeview;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Treeview._jQueryInterface;
    };

    return Treeview;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE DirectChat.js
   * License MIT
   * --------------------------------------------
   */


  var DirectChat = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'DirectChat';
    var DATA_KEY = 'lte.directchat';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      TOGGLED: "toggled{EVENT_KEY}"
    };
    var Selector = {
      DATA_TOGGLE: '[data-widget="chat-pane-toggle"]',
      DIRECT_CHAT: '.direct-chat'
    };
    var ClassName = {
      DIRECT_CHAT_OPEN: 'direct-chat-contacts-open'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var DirectChat = /*#__PURE__*/function () {
      function DirectChat(element, config) {
        this._element = element;
      }

      var _proto = DirectChat.prototype;

      _proto.toggle = function toggle() {
        $(this._element).parents(Selector.DIRECT_CHAT).first().toggleClass(ClassName.DIRECT_CHAT_OPEN);
        var toggledEvent = $.Event(Event.TOGGLED);
        $(this._element).trigger(toggledEvent);
      } // Static
      ;

      DirectChat._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new DirectChat($(this));
            $(this).data(DATA_KEY, data);
          }

          data[config]();
        });
      };

      return DirectChat;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      if (event) event.preventDefault();

      DirectChat._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = DirectChat._jQueryInterface;
    $.fn[NAME].Constructor = DirectChat;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return DirectChat._jQueryInterface;
    };

    return DirectChat;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE TodoList.js
   * License MIT
   * --------------------------------------------
   */


  var TodoList = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'TodoList';
    var DATA_KEY = 'lte.todolist';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      DATA_TOGGLE: '[data-widget="todo-list"]'
    };
    var ClassName = {
      TODO_LIST_DONE: 'done'
    };
    var Default = {
      onCheck: function onCheck(item) {
        return item;
      },
      onUnCheck: function onUnCheck(item) {
        return item;
      }
    };
    /**
     * Class Definition
     * ====================================================
     */

    var TodoList = /*#__PURE__*/function () {
      function TodoList(element, config) {
        this._config = config;
        this._element = element;

        this._init();
      } // Public


      var _proto = TodoList.prototype;

      _proto.toggle = function toggle(item) {
        item.parents('li').toggleClass(ClassName.TODO_LIST_DONE);

        if (!$(item).prop('checked')) {
          this.unCheck($(item));
          return;
        }

        this.check(item);
      };

      _proto.check = function check(item) {
        this._config.onCheck.call(item);
      };

      _proto.unCheck = function unCheck(item) {
        this._config.onUnCheck.call(item);
      } // Private
      ;

      _proto._init = function _init() {
        var that = this;
        $(Selector.DATA_TOGGLE).find('input:checkbox:checked').parents('li').toggleClass(ClassName.TODO_LIST_DONE);
        $(Selector.DATA_TOGGLE).on('change', 'input:checkbox', function (event) {
          that.toggle($(event.target));
        });
      } // Static
      ;

      TodoList._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new TodoList($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return TodoList;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      TodoList._jQueryInterface.call($(Selector.DATA_TOGGLE));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = TodoList._jQueryInterface;
    $.fn[NAME].Constructor = TodoList;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TodoList._jQueryInterface;
    };

    return TodoList;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE CardWidget.js
   * License MIT
   * --------------------------------------------
   */


  var CardWidget = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'CardWidget';
    var DATA_KEY = 'lte.cardwidget';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      EXPANDED: "expanded" + EVENT_KEY,
      COLLAPSED: "collapsed" + EVENT_KEY,
      MAXIMIZED: "maximized" + EVENT_KEY,
      MINIMIZED: "minimized" + EVENT_KEY,
      REMOVED: "removed" + EVENT_KEY
    };
    var ClassName = {
      CARD: 'card',
      COLLAPSED: 'collapsed-card',
      COLLAPSING: 'collapsing-card',
      EXPANDING: 'expanding-card',
      WAS_COLLAPSED: 'was-collapsed',
      MAXIMIZED: 'maximized-card'
    };
    var Selector = {
      DATA_REMOVE: '[data-card-widget="remove"]',
      DATA_COLLAPSE: '[data-card-widget="collapse"]',
      DATA_MAXIMIZE: '[data-card-widget="maximize"]',
      CARD: "." + ClassName.CARD,
      CARD_HEADER: '.card-header',
      CARD_BODY: '.card-body',
      CARD_FOOTER: '.card-footer',
      COLLAPSED: "." + ClassName.COLLAPSED
    };
    var Default = {
      animationSpeed: 'normal',
      collapseTrigger: Selector.DATA_COLLAPSE,
      removeTrigger: Selector.DATA_REMOVE,
      maximizeTrigger: Selector.DATA_MAXIMIZE,
      collapseIcon: 'fa-minus',
      expandIcon: 'fa-plus',
      maximizeIcon: 'fa-expand',
      minimizeIcon: 'fa-compress'
    };

    var CardWidget = /*#__PURE__*/function () {
      function CardWidget(element, settings) {
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();

        if (element.hasClass(ClassName.CARD)) {
          this._parent = element;
        }

        this._settings = $.extend({}, Default, settings);
      }

      var _proto = CardWidget.prototype;

      _proto.collapse = function collapse() {
        var _this = this;

        this._parent.addClass(ClassName.COLLAPSING).children(Selector.CARD_BODY + ", " + Selector.CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
          _this._parent.addClass(ClassName.COLLAPSED).removeClass(ClassName.COLLAPSING);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

        var collapsed = $.Event(Event.COLLAPSED);

        this._element.trigger(collapsed, this._parent);
      };

      _proto.expand = function expand() {
        var _this2 = this;

        this._parent.addClass(ClassName.EXPANDING).children(Selector.CARD_BODY + ", " + Selector.CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
          _this2._parent.removeClass(ClassName.COLLAPSED).removeClass(ClassName.EXPANDING);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

        var expanded = $.Event(Event.EXPANDED);

        this._element.trigger(expanded, this._parent);
      };

      _proto.remove = function remove() {
        this._parent.slideUp();

        var removed = $.Event(Event.REMOVED);

        this._element.trigger(removed, this._parent);
      };

      _proto.toggle = function toggle() {
        if (this._parent.hasClass(ClassName.COLLAPSED)) {
          this.expand();
          return;
        }

        this.collapse();
      };

      _proto.maximize = function maximize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

        this._parent.css({
          'height': this._parent.height(),
          'width': this._parent.width(),
          'transition': 'all .15s'
        }).delay(150).queue(function () {
          $(this).addClass(ClassName.MAXIMIZED);
          $('html').addClass(ClassName.MAXIMIZED);

          if ($(this).hasClass(ClassName.COLLAPSED)) {
            $(this).addClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var maximized = $.Event(Event.MAXIMIZED);

        this._element.trigger(maximized, this._parent);
      };

      _proto.minimize = function minimize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

        this._parent.css('cssText', 'height:' + this._parent[0].style.height + ' !important;' + 'width:' + this._parent[0].style.width + ' !important; transition: all .15s;').delay(10).queue(function () {
          $(this).removeClass(ClassName.MAXIMIZED);
          $('html').removeClass(ClassName.MAXIMIZED);
          $(this).css({
            'height': 'inherit',
            'width': 'inherit'
          });

          if ($(this).hasClass(ClassName.WAS_COLLAPSED)) {
            $(this).removeClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var MINIMIZED = $.Event(Event.MINIMIZED);

        this._element.trigger(MINIMIZED, this._parent);
      };

      _proto.toggleMaximize = function toggleMaximize() {
        if (this._parent.hasClass(ClassName.MAXIMIZED)) {
          this.minimize();
          return;
        }

        this.maximize();
      } // Private
      ;

      _proto._init = function _init(card) {
        var _this3 = this;

        this._parent = card;
        $(this).find(this._settings.collapseTrigger).click(function () {
          _this3.toggle();
        });
        $(this).find(this._settings.maximizeTrigger).click(function () {
          _this3.toggleMaximize();
        });
        $(this).find(this._settings.removeTrigger).click(function () {
          _this3.remove();
        });
      } // Static
      ;

      CardWidget._jQueryInterface = function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardWidget($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)) {
          data[config]();
        } else if (_typeof(config) === 'object') {
          data._init($(this));
        }
      };

      return CardWidget;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_COLLAPSE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'toggle');
    });
    $(document).on('click', Selector.DATA_REMOVE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'remove');
    });
    $(document).on('click', Selector.DATA_MAXIMIZE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'toggleMaximize');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = CardWidget._jQueryInterface;
    $.fn[NAME].Constructor = CardWidget;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return CardWidget._jQueryInterface;
    };

    return CardWidget;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE CardRefresh.js
   * License MIT
   * --------------------------------------------
   */


  var CardRefresh = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'CardRefresh';
    var DATA_KEY = 'lte.cardrefresh';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      LOADED: "loaded" + EVENT_KEY,
      OVERLAY_ADDED: "overlay.added" + EVENT_KEY,
      OVERLAY_REMOVED: "overlay.removed" + EVENT_KEY
    };
    var ClassName = {
      CARD: 'card'
    };
    var Selector = {
      CARD: "." + ClassName.CARD,
      DATA_REFRESH: '[data-card-widget="card-refresh"]'
    };
    var Default = {
      source: '',
      sourceSelector: '',
      params: {},
      trigger: Selector.DATA_REFRESH,
      content: '.card-body',
      loadInContent: true,
      loadOnInit: true,
      responseType: '',
      overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
      onLoadStart: function onLoadStart() {},
      onLoadDone: function onLoadDone(response) {
        return response;
      }
    };

    var CardRefresh = /*#__PURE__*/function () {
      function CardRefresh(element, settings) {
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();
        this._settings = $.extend({}, Default, settings);
        this._overlay = $(this._settings.overlayTemplate);

        if (element.hasClass(ClassName.CARD)) {
          this._parent = element;
        }

        if (this._settings.source === '') {
          throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
        }
      }

      var _proto = CardRefresh.prototype;

      _proto.load = function load() {
        this._addOverlay();

        this._settings.onLoadStart.call($(this));

        $.get(this._settings.source, this._settings.params, function (response) {
          if (this._settings.loadInContent) {
            if (this._settings.sourceSelector != '') {
              response = $(response).find(this._settings.sourceSelector).html();
            }

            this._parent.find(this._settings.content).html(response);
          }

          this._settings.onLoadDone.call($(this), response);

          this._removeOverlay();
        }.bind(this), this._settings.responseType !== '' && this._settings.responseType);
        var loadedEvent = $.Event(Event.LOADED);
        $(this._element).trigger(loadedEvent);
      };

      _proto._addOverlay = function _addOverlay() {
        this._parent.append(this._overlay);

        var overlayAddedEvent = $.Event(Event.OVERLAY_ADDED);
        $(this._element).trigger(overlayAddedEvent);
      };

      _proto._removeOverlay = function _removeOverlay() {
        this._parent.find(this._overlay).remove();

        var overlayRemovedEvent = $.Event(Event.OVERLAY_REMOVED);
        $(this._element).trigger(overlayRemovedEvent);
      }; // Private


      _proto._init = function _init(card) {
        var _this = this;

        $(this).find(this._settings.trigger).on('click', function () {
          _this.load();
        });

        if (this._settings.loadOnInit) {
          this.load();
        }
      } // Static
      ;

      CardRefresh._jQueryInterface = function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardRefresh($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/load/)) {
          data[config]();
        } else {
          data._init($(this));
        }
      };

      return CardRefresh;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_REFRESH, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardRefresh._jQueryInterface.call($(this), 'load');
    });
    $(document).ready(function () {
      $(Selector.DATA_REFRESH).each(function () {
        CardRefresh._jQueryInterface.call($(this));
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = CardRefresh._jQueryInterface;
    $.fn[NAME].Constructor = CardRefresh;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return CardRefresh._jQueryInterface;
    };

    return CardRefresh;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Dropdown.js
   * License MIT
   * --------------------------------------------
   */


  var Dropdown = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Dropdown';
    var DATA_KEY = 'lte.dropdown';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      NAVBAR: '.navbar',
      DROPDOWN_MENU: '.dropdown-menu',
      DROPDOWN_MENU_ACTIVE: '.dropdown-menu.show',
      DROPDOWN_TOGGLE: '[data-toggle="dropdown"]'
    };
    var ClassName = {
      DROPDOWN_HOVER: 'dropdown-hover',
      DROPDOWN_RIGHT: 'dropdown-menu-right'
    };
    var Default = {};
    /**
     * Class Definition
     * ====================================================
     */

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(element, config) {
        this._config = config;
        this._element = element;
      } // Public


      var _proto = Dropdown.prototype;

      _proto.toggleSubmenu = function toggleSubmenu() {
        this._element.siblings().show().toggleClass("show");

        if (!this._element.next().hasClass('show')) {
          this._element.parents('.dropdown-menu').first().find('.show').removeClass("show").hide();
        }

        this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show").hide();
        });
      };

      _proto.fixPosition = function fixPosition() {
        var elm = $(Selector.DROPDOWN_MENU_ACTIVE);

        if (elm.length !== 0) {
          if (elm.hasClass(ClassName.DROPDOWN_RIGHT)) {
            elm.css('left', 'inherit');
            elm.css('right', 0);
          } else {
            elm.css('left', 0);
            elm.css('right', 'inherit');
          }

          var offset = elm.offset();
          var width = elm.width();
          var windowWidth = $(window).width();
          var visiblePart = windowWidth - offset.left;

          if (offset.left < 0) {
            elm.css('left', 'inherit');
            elm.css('right', offset.left - 5);
          } else {
            if (visiblePart < width) {
              elm.css('left', 'inherit');
              elm.css('right', 0);
            }
          }
        }
      } // Static
      ;

      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Dropdown($(this), _config);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggleSubmenu' || config == 'fixPosition') {
            data[config]();
          }
        });
      };

      return Dropdown;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(Selector.DROPDOWN_MENU + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($(this), 'toggleSubmenu');
    });
    $(Selector.NAVBAR + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
      event.preventDefault();
      setTimeout(function () {
        Dropdown._jQueryInterface.call($(this), 'fixPosition');
      }, 1);
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Toasts.js
   * License MIT
   * --------------------------------------------
   */


  var Toasts = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Toasts';
    var DATA_KEY = 'lte.toasts';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      INIT: "init" + EVENT_KEY,
      CREATED: "created" + EVENT_KEY,
      REMOVED: "removed" + EVENT_KEY
    };
    var Selector = {
      BODY: 'toast-body',
      CONTAINER_TOP_RIGHT: '#toastsContainerTopRight',
      CONTAINER_TOP_LEFT: '#toastsContainerTopLeft',
      CONTAINER_BOTTOM_RIGHT: '#toastsContainerBottomRight',
      CONTAINER_BOTTOM_LEFT: '#toastsContainerBottomLeft'
    };
    var ClassName = {
      TOP_RIGHT: 'toasts-top-right',
      TOP_LEFT: 'toasts-top-left',
      BOTTOM_RIGHT: 'toasts-bottom-right',
      BOTTOM_LEFT: 'toasts-bottom-left',
      FADE: 'fade'
    };
    var Position = {
      TOP_RIGHT: 'topRight',
      TOP_LEFT: 'topLeft',
      BOTTOM_RIGHT: 'bottomRight',
      BOTTOM_LEFT: 'bottomLeft'
    };
    var Default = {
      position: Position.TOP_RIGHT,
      fixed: true,
      autohide: false,
      autoremove: true,
      delay: 1000,
      fade: true,
      icon: null,
      image: null,
      imageAlt: null,
      imageHeight: '25px',
      title: null,
      subtitle: null,
      close: true,
      body: null,
      "class": null
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Toasts = /*#__PURE__*/function () {
      function Toasts(element, config) {
        this._config = config;

        this._prepareContainer();

        var initEvent = $.Event(Event.INIT);
        $('body').trigger(initEvent);
      } // Public


      var _proto = Toasts.prototype;

      _proto.create = function create() {
        var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
        toast.data('autohide', this._config.autohide);
        toast.data('animation', this._config.fade);

        if (this._config["class"]) {
          toast.addClass(this._config["class"]);
        }

        if (this._config.delay && this._config.delay != 500) {
          toast.data('delay', this._config.delay);
        }

        var toast_header = $('<div class="toast-header">');

        if (this._config.image != null) {
          var toast_image = $('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

          if (this._config.imageHeight != null) {
            toast_image.height(this._config.imageHeight).width('auto');
          }

          toast_header.append(toast_image);
        }

        if (this._config.icon != null) {
          toast_header.append($('<i />').addClass('mr-2').addClass(this._config.icon));
        }

        if (this._config.title != null) {
          toast_header.append($('<strong />').addClass('mr-auto').html(this._config.title));
        }

        if (this._config.subtitle != null) {
          toast_header.append($('<small />').html(this._config.subtitle));
        }

        if (this._config.close == true) {
          var toast_close = $('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

          if (this._config.title == null) {
            toast_close.toggleClass('ml-2 ml-auto');
          }

          toast_header.append(toast_close);
        }

        toast.append(toast_header);

        if (this._config.body != null) {
          toast.append($('<div class="toast-body" />').html(this._config.body));
        }

        $(this._getContainerId()).prepend(toast);
        var createdEvent = $.Event(Event.CREATED);
        $('body').trigger(createdEvent);
        toast.toast('show');

        if (this._config.autoremove) {
          toast.on('hidden.bs.toast', function () {
            $(this).delay(200).remove();
            var removedEvent = $.Event(Event.REMOVED);
            $('body').trigger(removedEvent);
          });
        }
      } // Static
      ;

      _proto._getContainerId = function _getContainerId() {
        if (this._config.position == Position.TOP_RIGHT) {
          return Selector.CONTAINER_TOP_RIGHT;
        } else if (this._config.position == Position.TOP_LEFT) {
          return Selector.CONTAINER_TOP_LEFT;
        } else if (this._config.position == Position.BOTTOM_RIGHT) {
          return Selector.CONTAINER_BOTTOM_RIGHT;
        } else if (this._config.position == Position.BOTTOM_LEFT) {
          return Selector.CONTAINER_BOTTOM_LEFT;
        }
      };

      _proto._prepareContainer = function _prepareContainer() {
        if ($(this._getContainerId()).length === 0) {
          var container = $('<div />').attr('id', this._getContainerId().replace('#', ''));

          if (this._config.position == Position.TOP_RIGHT) {
            container.addClass(ClassName.TOP_RIGHT);
          } else if (this._config.position == Position.TOP_LEFT) {
            container.addClass(ClassName.TOP_LEFT);
          } else if (this._config.position == Position.BOTTOM_RIGHT) {
            container.addClass(ClassName.BOTTOM_RIGHT);
          } else if (this._config.position == Position.BOTTOM_LEFT) {
            container.addClass(ClassName.BOTTOM_LEFT);
          }

          $('body').append(container);
        }

        if (this._config.fixed) {
          $(this._getContainerId()).addClass('fixed');
        } else {
          $(this._getContainerId()).removeClass('fixed');
        }
      } // Static
      ;

      Toasts._jQueryInterface = function _jQueryInterface(option, config) {
        return this.each(function () {
          var _options = $.extend({}, Default, config);

          var toast = new Toasts($(this), _options);

          if (option === 'create') {
            toast[option]();
          }
        });
      };

      return Toasts;
    }();
    /**
     * jQuery API
     * ====================================================
     */


    $.fn[NAME] = Toasts._jQueryInterface;
    $.fn[NAME].Constructor = Toasts;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Toasts._jQueryInterface;
    };

    return Toasts;
  }(jQuery);

  exports.CardRefresh = CardRefresh;
  exports.CardWidget = CardWidget;
  exports.ControlSidebar = ControlSidebar;
  exports.DirectChat = DirectChat;
  exports.Dropdown = Dropdown;
  exports.Layout = Layout;
  exports.PushMenu = PushMenu;
  exports.Toasts = Toasts;
  exports.TodoList = TodoList;
  exports.Treeview = Treeview;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

try {
  window.Popper = (__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"]);
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
  window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {
  console.log(e);
}

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // Boilerplate

__webpack_require__(/*! ./adminLte */ "./resources/js/backend/adminLte.js");

__webpack_require__(/*! ./demo */ "./resources/js/backend/demo.js");

__webpack_require__(/*! ./manage_operation */ "./resources/js/backend/manage_operation.js");

__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");

/***/ }),

/***/ "./resources/js/backend/demo.js":
/*!**************************************!*\
  !*** ./resources/js/backend/demo.js ***!
  \**************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict';

  var $sidebar = $('.control-sidebar');
  var $container = $('<div />', {
    "class": 'p-3 control-sidebar-content'
  });
  $sidebar.append($container);
  var navbar_dark_skins = ['navbar-primary', 'navbar-secondary', 'navbar-info', 'navbar-success', 'navbar-danger', 'navbar-indigo', 'navbar-purple', 'navbar-pink', 'navbar-navy', 'navbar-lightblue', 'navbar-teal', 'navbar-cyan', 'navbar-dark', 'navbar-gray-dark', 'navbar-gray'];
  var navbar_light_skins = ['navbar-light', 'navbar-warning', 'navbar-white', 'navbar-orange'];
  $container.append('<h5>Customize AdminLTE</h5><hr class="mb-2"/>');
  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0');
    } else {
      $('.main-header').removeClass('border-bottom-0');
    }
  });
  var $no_border_container = $('<div />', {
    'class': 'mb-1'
  }).append($no_border_checkbox).append('<span>No Navbar border</span>');
  $container.append($no_border_container);
  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm');
    } else {
      $('body').removeClass('text-sm');
    }
  });
  var $text_sm_body_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_body_checkbox).append('<span>Body small text</span>');
  $container.append($text_sm_body_container);
  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm');
    } else {
      $('.main-header').removeClass('text-sm');
    }
  });
  var $text_sm_header_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_header_checkbox).append('<span>Navbar small text</span>');
  $container.append($text_sm_header_container);
  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm');
    } else {
      $('.nav-sidebar').removeClass('text-sm');
    }
  });
  var $text_sm_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>');
  $container.append($text_sm_sidebar_container);
  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm');
    } else {
      $('.main-footer').removeClass('text-sm');
    }
  });
  var $text_sm_footer_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_footer_checkbox).append('<span>Footer small text</span>');
  $container.append($text_sm_footer_container);
  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat');
    } else {
      $('.nav-sidebar').removeClass('nav-flat');
    }
  });
  var $flat_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>');
  $container.append($flat_sidebar_container);
  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy');
    } else {
      $('.nav-sidebar').removeClass('nav-legacy');
    }
  });
  var $legacy_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>');
  $container.append($legacy_sidebar_container);
  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact');
    } else {
      $('.nav-sidebar').removeClass('nav-compact');
    }
  });
  var $compact_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>');
  $container.append($compact_sidebar_container);
  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent');
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent');
    }
  });
  var $child_indent_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>');
  $container.append($child_indent_sidebar_container);
  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand');
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand');
    }
  });
  var $no_expand_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>');
  $container.append($no_expand_sidebar_container);
  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm');
    } else {
      $('.brand-link').removeClass('text-sm');
    }
  });
  var $text_sm_brand_container = $('<div />', {
    'class': 'mb-4'
  }).append($text_sm_brand_checkbox).append('<span>Brand small text</span>');
  $container.append($text_sm_brand_container);
  $container.append('<h6>Navbar Variants</h6>');
  var $navbar_variants = $('<div />', {
    'class': 'd-flex'
  });
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins);
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color');
    var $main_header = $('.main-header');
    $main_header.removeClass('navbar-dark').removeClass('navbar-light');
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color);
    });

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark');
    } else {
      $main_header.addClass('navbar-light');
    }

    $main_header.addClass(color);
  });
  $navbar_variants.append($navbar_variants_colors);
  $container.append($navbar_variants);
  var sidebar_colors = ['bg-primary', 'bg-warning', 'bg-info', 'bg-danger', 'bg-success', 'bg-indigo', 'bg-lightblue', 'bg-navy', 'bg-purple', 'bg-fuchsia', 'bg-pink', 'bg-maroon', 'bg-orange', 'bg-lime', 'bg-teal', 'bg-olive'];
  var accent_colors = ['accent-primary', 'accent-warning', 'accent-info', 'accent-danger', 'accent-success', 'accent-indigo', 'accent-lightblue', 'accent-navy', 'accent-purple', 'accent-fuchsia', 'accent-pink', 'accent-maroon', 'accent-orange', 'accent-lime', 'accent-teal', 'accent-olive'];
  var sidebar_skins = ['sidebar-dark-primary', 'sidebar-dark-warning', 'sidebar-dark-info', 'sidebar-dark-danger', 'sidebar-dark-success', 'sidebar-dark-indigo', 'sidebar-dark-lightblue', 'sidebar-dark-navy', 'sidebar-dark-purple', 'sidebar-dark-fuchsia', 'sidebar-dark-pink', 'sidebar-dark-maroon', 'sidebar-dark-orange', 'sidebar-dark-lime', 'sidebar-dark-teal', 'sidebar-dark-olive', 'sidebar-light-primary', 'sidebar-light-warning', 'sidebar-light-info', 'sidebar-light-danger', 'sidebar-light-success', 'sidebar-light-indigo', 'sidebar-light-lightblue', 'sidebar-light-navy', 'sidebar-light-purple', 'sidebar-light-fuchsia', 'sidebar-light-pink', 'sidebar-light-maroon', 'sidebar-light-orange', 'sidebar-light-lime', 'sidebar-light-teal', 'sidebar-light-olive'];
  $container.append('<h6>Accent Color Variants</h6>');
  var $accent_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($accent_variants);
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color');
    var accent_class = color;
    var $body = $('body');
    accent_colors.map(function (skin) {
      $body.removeClass(skin);
    });
    $body.addClass(accent_class);
  }));
  $container.append('<h6>Dark Sidebar Variants</h6>');
  var $sidebar_variants_dark = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants_dark);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  $container.append('<h6>Light Sidebar Variants</h6>');
  var $sidebar_variants_light = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants_light);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  var logo_skins = navbar_all_colors;
  $container.append('<h6>Brand Logo Variants</h6>');
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($logo_variants);
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('clear').on('click', function () {
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
  });
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color');
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
    $logo.addClass(color);
  }).append($clear_btn));

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    });
    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (_typeof(color) === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      });
      $block.append($color);
      $color.data('color', color);
      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      });
      $color.hover(function () {
        $(this).css({
          opacity: 1
        }).removeClass('elevation-2').addClass('elevation-4');
      }, function () {
        $(this).css({
          opacity: 0.8
        }).removeClass('elevation-4').addClass('elevation-2');
      });

      if (callback) {
        $color.on('click', callback);
      }
    });
    return $block;
  }

  $('.product-image-thumb').on('click', function () {
    var image_element = $(this).find('img');
    $('.product-image').prop('src', $(image_element).attr('src'));
    $('.product-image-thumb.active').removeClass('active');
    $(this).addClass('active');
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/backend/manage_operation.js":
/*!**************************************************!*\
  !*** ./resources/js/backend/manage_operation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! axios */ "./node_modules/axios/index.js"),
    axios = _require["default"];

var _require2 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"),
    defaultsDeep = _require2.defaultsDeep;

function popupCenter(url, title, w, h) {
  // Fixes dual-screen position Most browsers      Firefox
  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  var systemZoom = width / window.screen.availWidth;
  var left = (width - w) / 2 / systemZoom + dualScreenLeft;
  var top = (height - h) / 2 / systemZoom + dualScreenTop;
  var newWindow = window.open(url, title, "scrollbars=yes, width=".concat(w / systemZoom, ", height=").concat(h / systemZoom, ", top=").concat(top, ",left=").concat(left));
  if (window.focus) newWindow.focus();
}

function swal_alert(alert_icon, msg) {
  Swal.fire({
    icon: alert_icon,
    text: msg
  });
}

$(document).ready(function () {
  $(".dropify").dropify();
  $('.js-example-basic-single').select2();
  $('.balance_table').removeAttr('width').DataTable({
    dom: 'Bfrtip',
    order: [[0, "desc"]],
    ordering: false,
    buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
  });
});

(function ($) {
  $("body").on("click", ".btn_patient_print", function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    popupCenter(href, "Patient Invoice", 800, 700);
  }).on("click", ".btn_barcode_show", function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    popupCenter(href, "Patient Invoice", 800, 700);
  }).on("click", ".btn_view_report", function (event) {
    event.preventDefault();
    var href = $(this).attr("href"); // popupCenter(href, "Patient Invoice", 800, 700);

    swal_alert("warning", "development progress");
  }).on("click", ".btn_update_status", function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    $("#patient_report_status_form").attr("action", href);
    $("#changeStatusModalCenter").modal("show");
  }).on("click", ".btn_assistant_signature", function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    Swal.fire({
      icon: "warning",
      text: "Do you want to signature this report?",
      showCancelButton: true,
      confirmButtonText: "Confirm"
    }).then(function (result) {
      if (result.value) {
        axios.post(href, {}).then(function (res) {
          var resData = res.data;
          swal_alert(resData.icon, resData.msg);
        })["catch"](function (error) {
          console.log(error);
        }).then(function () {
          console.log("done");
          setTimeout(function () {
            window.location.reload();
          }, 500);
        });
      }
    });
  }).on("click", ".btn_head_signature", function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    Swal.fire({
      icon: "warning",
      text: "Do you want to signature this report?",
      showCancelButton: true,
      confirmButtonText: "Confirm"
    }).then(function (result) {
      if (result.value) {
        axios.post(href, {}).then(function (res) {
          var resData = res.data;
          swal_alert(resData.icon, resData.msg);
        })["catch"](function (error) {
          console.log(error);
        }).then(function () {
          console.log("done");
          setTimeout(function () {
            window.location.reload();
          }, 500);
        });
      }
    });
  }).on("submit", "#patient_report_status_form", function (event) {
    event.preventDefault();
    var changeStatusModalCenter = $("#changeStatusModalCenter");
    var action = $(this).attr("action");
    var formData = $(this).serialize();
    axios.post(action, formData).then(function (res) {
      console.log(res.data);
    })["catch"](function (error) {
      console.log(error);
    }).then(function () {
      changeStatusModalCenter.find(".status_submit_button").removeAttr("disabled");
      changeStatusModalCenter.modal("hide");
      setTimeout(function () {
        window.location.reload();
      }, 500);
    });
  }).on("submit", "#site_settings_form", function (event) {
    event.preventDefault();
    var modal = $("#siteSettingModel");
    var url = $("#url").val(); // var formData = $(this).serialize();

    var formData = new FormData();
    var app_name = $("#app_name").val();
    var app_name_short = $("#app_name_short").val();
    var app_email = $("#app_email").val();
    var app_url = $("#app_url").val();
    var footer_text = $("#footer_text").val();
    var company_address = $("#company_address").val();
    var company_details = $("#company_details").val();
    var logo = document.querySelector("#app_logo");
    var fabicon = document.querySelector("#fabicon");
    formData.append('app_logo', logo.files[0]);
    formData.append('fabicon', fabicon.files[0]);
    formData.append('app_name', app_name);
    formData.append('app_name_short', app_name_short);
    formData.append('app_email', app_email);
    formData.append('app_url', app_url);
    formData.append('footer_text', footer_text);
    formData.append('company_address', company_address);
    formData.append('company_details', company_details);
    axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(function (res) {
      modal.hide();
      Swal.fire({
        icon: "success",
        text: res.data.success,
        showCancelButton: true
      });
      setTimeout(function () {
        window.location.reload();
      }, 500);
    })["catch"](function (error) {
      console.log(error);
    });
  }).on("change", ".status-change", function (event) {
    event.preventDefault();
    var selector = $(this).val();
    var memberId = $(this).attr('data-key');
    var route = $('#status_update_route').val();
    Swal.fire({
      icon: "warning",
      text: "Do you really want to change status?",
      showCancelButton: true,
      confirmButtonText: "Confirm"
    }).then(function (result) {
      if (result.isConfirmed == true) {
        $.ajax({
          type: "POST",
          url: route,
          data: {
            'id': memberId,
            'status': selector,
            '_token': $('meta[name=csrf-token]').attr('content')
          },
          success: function success(response) {
            console.log('response', response);
            Swal.fire({
              icon: "success",
              text: "Status changed successfully"
            });
            setTimeout(function () {
              window.location.reload();
            }, 2000);
          },
          error: function error(data) {
            console.log(data);
          }
        });
      }
    });
  }).on("change", "#status-change-transection", function () {
    var selector = $(this).val();
    var trId = $(this).data('key');
    var route = $('#status_update_route_transection').val();
    Swal.fire({
      icon: "warning",
      text: "Do you really want to change status?",
      showCancelButton: true,
      confirmButtonText: "Confirm"
    }).then(function (result) {
      if (result.isConfirmed == true) {
        $.ajax({
          type: "POST",
          url: route,
          data: {
            'id': trId,
            'status': selector,
            '_token': $('meta[name=csrf-token]').attr('content')
          },
          success: function success(response) {
            Swal.fire({
              icon: "success",
              text: "Status changed successfully"
            });
            setTimeout(function () {
              window.location.reload();
            }, 2000);
          },
          error: function error(data) {
            console.log(data);
          }
        });
      }
    });
  }).on("change", ".status-change-agent", function () {
    var selector = $(this).val();
    var trId = $(this).data('key');
    var route = $('#status_update_route_agent').val();
    Swal.fire({
      icon: "warning",
      text: "Do you really want to change status?",
      showCancelButton: true,
      confirmButtonText: "Confirm"
    }).then(function (result) {
      if (result.isConfirmed == true) {
        $.ajax({
          type: "POST",
          url: route,
          data: {
            'id': trId,
            'status': selector,
            '_token': $('meta[name=csrf-token]').attr('content')
          },
          success: function success(response) {
            Swal.fire({
              icon: "success",
              text: "Status changed successfully"
            });
            setTimeout(function () {
              window.location.reload();
            }, 2000);
          },
          error: function error(data) {
            console.log(data);
          }
        });
      }
    });
  }).on("change", ".checkbox-all", function () {
    var thisElement = $(this);
    var allItem = $(".checkbox-all");
    var item = $(".checkbox-item");

    if (thisElement.is(':checked')) {
      item.prop('checked', true);
      allItem.prop('checked', true);
    } else {
      item.prop('checked', false);
      allItem.prop('checked', false);
    }
  }).on("change", ".checkbox-item", function () {
    var tbodyItems = $(this).closest('tbody').find(".checkbox-item");
    var checkedItem = $(this).closest('tbody').find(".checkbox-item:checked");
    var allItem = $(".checkbox-all");

    if (tbodyItems.length === checkedItem.length) {
      allItem.prop('checked', true);
    } else {
      allItem.prop('checked', false);
    }
  }).on("change", ".checkbox-item, .checkbox-all", function () {
    var checkedItem = $('tbody').find(".checkbox-item:checked");
    var generate = $(".generate-email");

    if (checkedItem.length > 0) {
      generate.removeClass('disabled');
    } else {
      generate.addClass('disabled');
    }
  }).on("click", ".generate-email", function () {
    var checkedItem = $('tbody').find(".checkbox-item:checked");

    if (checkedItem.length > 0) {
      var members = [];
      checkedItem.each(function () {
        members.push($(this).val());
      });
      var emailSubmitForm = $("#emailSubmitForm");
      var loader = $(".loader");
      loader.show();
      axios.post('/admin/member/generate-email', {
        members: members
      }).then(function (response) {
        var resData = response.data;
        console.log(resData);

        if (resData.status) {
          emailSubmitForm.find('.modal-body').html(resData.forms);
          emailSubmitForm.modal('show');
        } else {
          Swal.fire({
            icon: "warning",
            text: 'Members not found, Try Again!',
            showCancelButton: true
          });
        }
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        loader.hide();
      });
    } else {
      Swal.fire({
        icon: "warning",
        text: 'Please select item first',
        showCancelButton: true
      });
    }
  }).on("change", ".company-select", function (e) {
    e.preventDefault();
    var option = $(this).val();
    axios.post('/admin/company-select', {
      data: option
    }).then(function (response) {
      var resData = response.data.email;
      $('#email').val(resData);
    })["catch"](function (error) {
      console.log(error);
      $('#emailSendToCompany').val('');
    }).then(function () {});
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
  }).on("keyup", '#phon_validation', function () {
    var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
        val = this.value;

    if (!valid) {
      console.log("Invalid input!");
      this.value = val.substring(0, val.length - 1);
    }
  }).on("keyup", '.exam_grade', function () {
    var valid = /^\d{0,2}(\.\d{0,2})?$/.test(this.value),
        val = this.value;

    if (!valid) {
      console.log("Invalid input!");
      this.value = val.substring(0, val.length - 1);
    }
  }).on('change', "#police_clearance_issue", function () {
    var issue_date = new Date($("#police_clearance_issue").val());
    var nextDate = new Date(issue_date.setDate(issue_date.getDate() + 180));
    var today = new Date();
    var time = Math.abs(today - nextDate);
    var day = Math.ceil(time / (1000 * 60 * 60 * 24));
    nextDate = "".concat(nextDate.getDate(), " ").concat(nextDate.toLocaleString('default', {
      month: 'long'
    }), " ").concat(nextDate.getFullYear());
    var fields = "<div class=\"col-md-6 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"clearance_expire_date\" class=\"form-label\">Expire date</label>\n                                <input type=\"text\" class=\"form-control\" name=\"police_clearance_expired\"\n                                    id=\"clearance_expire_date\" value=\"".concat(nextDate, "\" readonly>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"clearance_remaining\" class=\"form-label\">Remaining day</label>\n                                <input type=\"text\" class=\"form-control\" name=\"polisce_clearance_remaning\"\n                                    id = \"police_clearance\"\n                                    value = \"").concat(day, "\"\n                                    readonly >\n                            </div>\n                        </div>");
    $("#police_clearanc").html(fields);
  }).on("keyup", '.transection_amount', function () {
    var valid = /^\d{0,20}(\.\d{0,20})?$/.test(this.value),
        val = this.value;

    if (!valid) {
      this.value = val.substring(0, val.length - 1);
    }
  }).on("keyup", '.phon_validation', function () {
    var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
        val = this.value;

    if (!valid) {
      console.log("Invalid input!");
      this.value = val.substring(0, val.length - 1);
    }
  }).on("change", "#payment_type", function () {
    var change = $(this).val();
    $value = "";

    if (change == "bank") {
      $value = "<div class=\"col-md-6 col-sm-12\">\n                        <label for=\"transection_or_ac_number\" class=\"form-label\">Account No</label>\n                        <input type=\"text\" class=\"form-control\" name=\"transection_or_ac_number\"\n                            id=\"transection_or_ac_number\" value=\"\" placeholder=\"Account number\">\n                        </div>\n                        <div class=\"col-md-6 col-sm-12\">\n                        <label for=\"mobile\" class=\"form-label\">Account holder name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"mobile\" id=\"name\"\n                            value=\"\" placeholder=\"Name\">\n                        </div>\n                        ";
    }

    if (change == "bkash" || change == "roket" || change == "nagad") {
      $value = "<div class=\"col-md-6 col-sm-12\">\n                            <label for=\"transection_or_ac_number\" class=\"form-label\">Transection ID</label>\n                            <input type=\"text\" class=\"form-control\" name=\"transection_or_ac_number\"\n                                id=\"transection_or_ac_number\" value=\"\" placeholder=\"Transection number\">\n                        </div>\n                         <div class = \"col-md-6\">\n                            <label for=\"mobile\" class=\"form-label\">Mobile number</label>\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\">+88</div>\n                                </div>\n                                <input type=\"text\" class=\"form-control phon_validation\" name=\"mobile\" id=\"mobile\" value=\"\"\n                                    placeholder=\"Mobile number\">\n                            </div>\n                        </div>\n                    ";
    }

    if (change == "cash") {
      $value = "";
    }

    $("#account_phone_feild").html($value);
  }).on("click", ".add-more", function () {
    var content = $(this).attr("data");
    var expanseModal = $("#expenseModal");

    var _token = $('meta[name="csrf-token"]').attr('content');

    var addAccount = $("#add_account").val();
    var addExpenseType = $("#add_expense_id").val();
    var paymentMethod = $("#payment_method").val();
    var payer = $("#payer").val();
    var modalContent;
    var modalTitle;
    var dynamicRoute;

    if (content === "add-account") {
      modalContent = "<input type=\"hidden\" name=\"_token\" id=\"token\" value=\"".concat(_token, "\" />\n                                    <div class=\"form-group\">\n                                        <label for=\"account_title\">Account Title</label>\n                                        <input type=\"text\" name=\"account_title\" id=\"account_title\" class=\"form-control\" />\n                                    </div> <!-- form-group -->\n                                    <div class=\"form-group\">\n                                        <label for=\"opening_date\">Opening Date</label>\n                                        <input type=\"date\" name=\"opening_date\" id=\"opening_date\" class=\"form-control\" />\n                                    </div> <!-- form-group -->\n                                    <div class=\"form-group\">\n                                        <label for=\"account_number\">Account Number</label>\n                                        <input type=\"text\" name=\"account_number\" id=\"account_number\" class=\"form-control\" />\n                                    </div> <!-- form-group -->\n                                    <div class=\"form-group\">\n                                        <label for=\"opening_balance\">Opening balance</label>\n                                        <input type=\"text\" name=\"opening_balance\" id=\"opening_balance\" class=\"form-control\" />\n                                    </div> <!-- form-group -->\n                                    <div class=\"form-group\">\n                                        <label for=\"note\" class=\"col-form-label\">Extra Note</label>\n                                        <textarea class=\"form-control\" name=\"note\" id=\"note\"></textarea>\n                                    </div>\n                                      <div class=\"form-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                                </div>");
      modalTitle = "Add New Account";
      dynamicRoute = addAccount;
    } else if (content === "expense-type") {
      modalContent = "<input type=\"hidden\" name=\"_token\" id=\"token\" value=\"".concat(_token, "\" />\n                                    <div class=\"form-group\">\n                                        <label for=\"expanse_name\" class=\"col-form-label\">Name:</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"expanse_name\" id=\"expanse_name\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"expanse_type\" class=\"col-form-label\">Transection Type:</label>\n                                        <select class=\"form-control\" name=\"expanse_type\" id=\"expanse_type\">\n                                            <option value=\"income\">Income</option>\n                                            <option value=\"expense\">Expense</option>\n                                            <option value=\"donation\">Donation</option>\n                                            <option value=\"subscription\">Subscription</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                                </div>");
      modalTitle = "Add Transection type";
      dynamicRoute = addExpenseType;
    } else if (content === "payment-method") {
      modalContent = "<input type=\"hidden\" name=\"_token\" id=\"token\" value=\"".concat(_token, "\" />\n                                <div class=\"form-group\">\n                                    <label for=\"recipient-name\" class=\"col-form-label\">Payment Method:</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"payment_name\" id=\"recipient-name\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                                </div>");
      modalTitle = "Add Payment";
      dynamicRoute = paymentMethod;
    } else if (content === "add-payer") {
      modalContent = "<input type=\"hidden\" name=\"_token\" id=\"token\" value=\"".concat(_token, "\" />\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"col-form-label\">Payer Name:</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"payer_name\">\n                                </div>\n                                <div class = \"form-group\">\n                                    <label for=\"name\" class=\"col-form-label\">Phone:</label>\n                                    <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                            <div class=\"input-group-text\">+88</div>\n                                        </div>\n                                        <input type=\"text\" name=\"phone\" class=\"form-control phon_validation\" id=\"phone\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                                </div>");
      modalTitle = "Add Payer";
      dynamicRoute = payer;
    } else {}

    expanseModal.find('.expanse-modal-form').html(modalContent);
    expanseModal.find('.expanse-modal-form').attr('action', dynamicRoute);
    expanseModal.find('#expenseModalLabel').text(modalTitle);
    expanseModal.find('#token').val(_token);
    expanseModal.modal("show");
  }).on("submit", ".expanse-modal-form", function (e) {
    e.preventDefault();
    var expenseModal = $("#expenseModal");
    var action = $(this).attr('action');
    var formData = $(this).serialize();
    var expense_id = $("#expense_id");
    var payment_method = $("#payment_method");
    var payer = $("#payer");
    var account_id = $("#account_id");
    var component = $(".js-example-basic-single").attr("data-select2-id");
    console.log(component);
    axios.post(action, formData).then(function (res) {
      setTimeout(function () {
        window.location.reload();
      }, 2000); // if (expense_id == "expense_id") {
      //     expense_id.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
      // } else if (payment_method == "payment_method") {
      //     payment_method.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
      // } else if (payer == "payer") {
      //     payer.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
      // } else if (account_id == "account_id") {
      //     account_id.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
      // }

      expenseModal.modal("hide");
    })["catch"](function (error) {
      console.log(error);
    });
  }).on("keyup", '.bankaccount_number', function () {
    var valid = /^\d{0,15}(\.\d{0,2})?$/.test(this.value),
        val = this.value;

    if (!valid) {
      console.log("Invalid input!");
      this.value = val.substring(0, val.length - 1);
    }
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
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/backend/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW5MdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvbWFuYWdlX29wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWRtaW5MVEUgdjMuMC41IChodHRwczovL2FkbWlubHRlLmlvKVxuICogQ29weXJpZ2h0IDIwMTQtMjAyMCBDb2xvcmxpYiA8aHR0cDovL2NvbG9ybGliLmNvbT5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0NvbG9ybGliSFEvQWRtaW5MVEUvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLmFkbWlubHRlID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgQ29udHJvbFNpZGViYXIuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBDb250cm9sU2lkZWJhciA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ0NvbnRyb2xTaWRlYmFyJztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLmNvbnRyb2xzaWRlYmFyJztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDT0xMQVBTRUQ6IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVksXG4gICAgICBFWFBBTkRFRDogXCJleHBhbmRlZFwiICsgRVZFTlRfS0VZXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBDT05UUk9MX1NJREVCQVI6ICcuY29udHJvbC1zaWRlYmFyJyxcbiAgICAgIENPTlRST0xfU0lERUJBUl9DT05URU5UOiAnLmNvbnRyb2wtc2lkZWJhci1jb250ZW50JyxcbiAgICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJyxcbiAgICAgIENPTlRFTlQ6ICcuY29udGVudC13cmFwcGVyJyxcbiAgICAgIEhFQURFUjogJy5tYWluLWhlYWRlcicsXG4gICAgICBGT09URVI6ICcubWFpbi1mb290ZXInXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQ09OVFJPTF9TSURFQkFSX0FOSU1BVEU6ICdjb250cm9sLXNpZGViYXItYW5pbWF0ZScsXG4gICAgICBDT05UUk9MX1NJREVCQVJfT1BFTjogJ2NvbnRyb2wtc2lkZWJhci1vcGVuJyxcbiAgICAgIENPTlRST0xfU0lERUJBUl9TTElERTogJ2NvbnRyb2wtc2lkZWJhci1zbGlkZS1vcGVuJyxcbiAgICAgIExBWU9VVF9GSVhFRDogJ2xheW91dC1maXhlZCcsXG4gICAgICBOQVZCQVJfRklYRUQ6ICdsYXlvdXQtbmF2YmFyLWZpeGVkJyxcbiAgICAgIE5BVkJBUl9TTV9GSVhFRDogJ2xheW91dC1zbS1uYXZiYXItZml4ZWQnLFxuICAgICAgTkFWQkFSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLW5hdmJhci1maXhlZCcsXG4gICAgICBOQVZCQVJfTEdfRklYRUQ6ICdsYXlvdXQtbGctbmF2YmFyLWZpeGVkJyxcbiAgICAgIE5BVkJBUl9YTF9GSVhFRDogJ2xheW91dC14bC1uYXZiYXItZml4ZWQnLFxuICAgICAgRk9PVEVSX0ZJWEVEOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgICBGT09URVJfU01fRklYRUQ6ICdsYXlvdXQtc20tZm9vdGVyLWZpeGVkJyxcbiAgICAgIEZPT1RFUl9NRF9GSVhFRDogJ2xheW91dC1tZC1mb290ZXItZml4ZWQnLFxuICAgICAgRk9PVEVSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLWZvb3Rlci1maXhlZCcsXG4gICAgICBGT09URVJfWExfRklYRUQ6ICdsYXlvdXQteGwtZm9vdGVyLWZpeGVkJ1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBjb250cm9sc2lkZWJhclNsaWRlOiB0cnVlLFxuICAgICAgc2Nyb2xsYmFyVGhlbWU6ICdvcy10aGVtZS1saWdodCcsXG4gICAgICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgdmFyIENvbnRyb2xTaWRlYmFyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIENvbnRyb2xTaWRlYmFyKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgIH0gLy8gUHVibGljXG5cblxuICAgICAgdmFyIF9wcm90byA9IENvbnRyb2xTaWRlYmFyLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNvbGxhcHNlID0gZnVuY3Rpb24gY29sbGFwc2UoKSB7XG4gICAgICAgIC8vIFNob3cgdGhlIGNvbnRyb2wgc2lkZWJhclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKTtcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuaGlkZSgpO1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSk7XG4gICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb2xsYXBzZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGNvbGxhcHNlZEV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgLy8gQ29sbGFwc2UgdGhlIGNvbnRyb2wgc2lkZWJhclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuc2hvdygpLmRlbGF5KDEwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpO1xuICAgICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuRVhQQU5ERUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICB2YXIgc2hvdWxkQ2xvc2UgPSAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSk7XG5cbiAgICAgICAgaWYgKHNob3VsZENsb3NlKSB7XG4gICAgICAgICAgLy8gQ2xvc2UgdGhlIGNvbnRyb2wgc2lkZWJhclxuICAgICAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPcGVuIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2ZpeEhlaWdodCgpO1xuXG4gICAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLl9maXhIZWlnaHQoKTtcblxuICAgICAgICAgIF90aGlzLl9maXhTY3JvbGxIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkpIHtcbiAgICAgICAgICAgIF90aGlzLl9maXhTY3JvbGxIZWlnaHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9maXhTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbiBfZml4U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgICB2YXIgaGVpZ2h0cyA9IHtcbiAgICAgICAgICBzY3JvbGw6ICQoZG9jdW1lbnQpLmhlaWdodCgpLFxuICAgICAgICAgIHdpbmRvdzogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgZm9vdGVyOiAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcG9zaXRpb25zID0ge1xuICAgICAgICAgIGJvdHRvbTogTWF0aC5hYnMoaGVpZ2h0cy53aW5kb3cgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBoZWlnaHRzLnNjcm9sbCksXG4gICAgICAgICAgdG9wOiAkKHdpbmRvdykuc2Nyb2xsVG9wKClcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG5hdmJhckZpeGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBmb290ZXJGaXhlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkxBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5OQVZCQVJfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1NNX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLk5BVkJBUl9NRF9GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5OQVZCQVJfTEdfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1hMX0ZJWEVEKSkge1xuICAgICAgICAgICAgaWYgKCQoU2VsZWN0b3IuSEVBREVSKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgIG5hdmJhckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZPT1RFUl9NRF9GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfTEdfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKSkge1xuICAgICAgICAgICAgaWYgKCQoU2VsZWN0b3IuRk9PVEVSKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgIGZvb3RlckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocG9zaXRpb25zLnRvcCA9PT0gMCAmJiBwb3NpdGlvbnMuYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3Rlcik7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlcik7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciArIGhlaWdodHMuZm9vdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMuYm90dG9tIDw9IGhlaWdodHMuZm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAoZm9vdGVyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ2JvdHRvbScsIGhlaWdodHMuZm9vdGVyIC0gcG9zaXRpb25zLmJvdHRvbSk7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJywgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuZm9vdGVyIC0gcG9zaXRpb25zLmJvdHRvbSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb25zLnRvcCA8PSBoZWlnaHRzLmhlYWRlcikge1xuICAgICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApO1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCd0b3AnLCAwKTtcbiAgICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnLCAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9maXhIZWlnaHQgPSBmdW5jdGlvbiBfZml4SGVpZ2h0KCkge1xuICAgICAgICB2YXIgaGVpZ2h0cyA9IHtcbiAgICAgICAgICB3aW5kb3c6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgICBoZWFkZXI6ICQoU2VsZWN0b3IuSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLm91dGVySGVpZ2h0KClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5MQVlPVVRfRklYRUQpKSB7XG4gICAgICAgICAgdmFyIHNpZGViYXJIZWlnaHQgPSBoZWlnaHRzLndpbmRvdyAtIGhlaWdodHMuaGVhZGVyO1xuXG4gICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZPT1RFUl9TTV9GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfTURfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZPT1RFUl9YTF9GSVhFRCkpIHtcbiAgICAgICAgICAgIGlmICgkKFNlbGVjdG9yLkZPT1RFUikuY3NzKFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIikge1xuICAgICAgICAgICAgICBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmNzcygnaGVpZ2h0Jywgc2lkZWJhckhlaWdodCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mICQuZm4ub3ZlcmxheVNjcm9sbGJhcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5vdmVybGF5U2Nyb2xsYmFycyh7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhclRoZW1lLFxuICAgICAgICAgICAgICBzaXplQXV0b0NhcGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHNjcm9sbGJhcnM6IHtcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLFxuICAgICAgICAgICAgICAgIGNsaWNrU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2Uob3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIHZhciBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQ29udHJvbFNpZGViYXIodGhpcywgX29wdGlvbnMpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF0YVtvcGVyYXRpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9wZXJhdGlvbiArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250cm9sU2lkZWJhcjtcbiAgICB9KCk7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbnRyb2xTaWRlYmFyO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29udHJvbFNpZGViYXI7XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgTGF5b3V0LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgTGF5b3V0ID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnTGF5b3V0JztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLmxheW91dCc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgSEVBREVSOiAnLm1haW4taGVhZGVyJyxcbiAgICAgIE1BSU5fU0lERUJBUjogJy5tYWluLXNpZGViYXInLFxuICAgICAgU0lERUJBUjogJy5tYWluLXNpZGViYXIgLnNpZGViYXInLFxuICAgICAgQ09OVEVOVDogJy5jb250ZW50LXdyYXBwZXInLFxuICAgICAgQlJBTkQ6ICcuYnJhbmQtbGluaycsXG4gICAgICBDT05URU5UX0hFQURFUjogJy5jb250ZW50LWhlYWRlcicsXG4gICAgICBXUkFQUEVSOiAnLndyYXBwZXInLFxuICAgICAgQ09OVFJPTF9TSURFQkFSOiAnLmNvbnRyb2wtc2lkZWJhcicsXG4gICAgICBDT05UUk9MX1NJREVCQVJfQ09OVEVOVDogJy5jb250cm9sLXNpZGViYXItY29udGVudCcsXG4gICAgICBDT05UUk9MX1NJREVCQVJfQlROOiAnW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJyxcbiAgICAgIExBWU9VVF9GSVhFRDogJy5sYXlvdXQtZml4ZWQnLFxuICAgICAgRk9PVEVSOiAnLm1haW4tZm9vdGVyJyxcbiAgICAgIFBVU0hNRU5VX0JUTjogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJyxcbiAgICAgIExPR0lOX0JPWDogJy5sb2dpbi1ib3gnLFxuICAgICAgUkVHSVNURVJfQk9YOiAnLnJlZ2lzdGVyLWJveCdcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBIT0xEOiAnaG9sZC10cmFuc2l0aW9uJyxcbiAgICAgIFNJREVCQVI6ICdtYWluLXNpZGViYXInLFxuICAgICAgQ09OVEVOVF9GSVhFRDogJ2NvbnRlbnQtZml4ZWQnLFxuICAgICAgU0lERUJBUl9GT0NVU0VEOiAnc2lkZWJhci1mb2N1c2VkJyxcbiAgICAgIExBWU9VVF9GSVhFRDogJ2xheW91dC1maXhlZCcsXG4gICAgICBOQVZCQVJfRklYRUQ6ICdsYXlvdXQtbmF2YmFyLWZpeGVkJyxcbiAgICAgIEZPT1RFUl9GSVhFRDogJ2xheW91dC1mb290ZXItZml4ZWQnLFxuICAgICAgTE9HSU5fUEFHRTogJ2xvZ2luLXBhZ2UnLFxuICAgICAgUkVHSVNURVJfUEFHRTogJ3JlZ2lzdGVyLXBhZ2UnLFxuICAgICAgQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU46ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3BlbicsXG4gICAgICBDT05UUk9MX1NJREVCQVJfT1BFTjogJ2NvbnRyb2wtc2lkZWJhci1vcGVuJ1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBzY3JvbGxiYXJUaGVtZTogJ29zLXRoZW1lLWxpZ2h0JyxcbiAgICAgIHNjcm9sbGJhckF1dG9IaWRlOiAnbCcsXG4gICAgICBwYW5lbEF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICBsb2dpblJlZ2lzdGVyQXV0b0hlaWdodDogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBMYXlvdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gTGF5b3V0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgIH0gLy8gUHVibGljXG5cblxuICAgICAgdmFyIF9wcm90byA9IExheW91dC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5maXhMYXlvdXRIZWlnaHQgPSBmdW5jdGlvbiBmaXhMYXlvdXRIZWlnaHQoZXh0cmEpIHtcbiAgICAgICAgaWYgKGV4dHJhID09PSB2b2lkIDApIHtcbiAgICAgICAgICBleHRyYSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29udHJvbF9zaWRlYmFyID0gMDtcblxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfU0xJREVfT1BFTikgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfT1BFTikgfHwgZXh0cmEgPT0gJ2NvbnRyb2xfc2lkZWJhcicpIHtcbiAgICAgICAgICBjb250cm9sX3NpZGViYXIgPSAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5oZWlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoZWlnaHRzID0ge1xuICAgICAgICAgIHdpbmRvdzogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLmxlbmd0aCAhPT0gMCA/ICQoU2VsZWN0b3IuSEVBREVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgICAgICBmb290ZXI6ICQoU2VsZWN0b3IuRk9PVEVSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKSA6IDAsXG4gICAgICAgICAgc2lkZWJhcjogJChTZWxlY3Rvci5TSURFQkFSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLlNJREVCQVIpLmhlaWdodCgpIDogMCxcbiAgICAgICAgICBjb250cm9sX3NpZGViYXI6IGNvbnRyb2xfc2lkZWJhclxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtYXggPSB0aGlzLl9tYXgoaGVpZ2h0cyk7XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHQ7XG5cbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChtYXggPT0gaGVpZ2h0cy5jb250cm9sX3NpZGViYXIpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVEVOVCkuY3NzKCdtaW4taGVpZ2h0JywgbWF4ICsgb2Zmc2V0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1heCA9PSBoZWlnaHRzLndpbmRvdykge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCBtYXggKyBvZmZzZXQgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCBtYXggKyBvZmZzZXQgLSBoZWlnaHRzLmhlYWRlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX2lzRm9vdGVyRml4ZWQoKSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCBwYXJzZUZsb2F0KCQoU2VsZWN0b3IuQ09OVEVOVCkuY3NzKCdtaW4taGVpZ2h0JykpICsgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkxBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCBtYXggKyBvZmZzZXQgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mICQuZm4ub3ZlcmxheVNjcm9sbGJhcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLlNJREVCQVIpLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyVGhlbWUsXG4gICAgICAgICAgICAgIHNpemVBdXRvQ2FwYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsXG4gICAgICAgICAgICAgICAgY2xpY2tTY3JvbGxpbmc6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZml4TG9naW5SZWdpc3RlckhlaWdodCA9IGZ1bmN0aW9uIGZpeExvZ2luUmVnaXN0ZXJIZWlnaHQoKSB7XG4gICAgICAgIGlmICgkKFNlbGVjdG9yLkxPR0lOX0JPWCArICcsICcgKyBTZWxlY3Rvci5SRUdJU1RFUl9CT1gpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoJChTZWxlY3Rvci5MT0dJTl9CT1ggKyAnLCAnICsgU2VsZWN0b3IuUkVHSVNURVJfQk9YKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICB2YXIgYm94X2hlaWdodCA9ICQoU2VsZWN0b3IuTE9HSU5fQk9YICsgJywgJyArIFNlbGVjdG9yLlJFR0lTVEVSX0JPWCkuaGVpZ2h0KCk7XG5cbiAgICAgICAgICBpZiAoJCgnYm9keScpLmNzcygnbWluLWhlaWdodCcpICE9PSBib3hfaGVpZ2h0KSB7XG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKCdtaW4taGVpZ2h0JywgYm94X2hlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gQWN0aXZhdGUgbGF5b3V0IGhlaWdodCB3YXRjaGVyXG4gICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCgpO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0KSkge1xuICAgICAgICAgIHNldEludGVydmFsKHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCwgdGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoU2VsZWN0b3IuU0lERUJBUikub24oJ2NvbGxhcHNlZC5sdGUudHJlZXZpZXcgZXhwYW5kZWQubHRlLnRyZWV2aWV3JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmZpeExheW91dEhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChTZWxlY3Rvci5QVVNITUVOVV9CVE4pLm9uKCdjb2xsYXBzZWQubHRlLnB1c2htZW51IHNob3duLmx0ZS5wdXNobWVudScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0JUTikub24oJ2NvbGxhcHNlZC5sdGUuY29udHJvbHNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICAgIH0pLm9uKCdleHBhbmRlZC5sdGUuY29udHJvbHNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCdjb250cm9sX3NpZGViYXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmZpeExheW91dEhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnYm9keS5ob2xkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJyk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fbWF4ID0gZnVuY3Rpb24gX21heChudW1iZXJzKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XG4gICAgICAgIHZhciBtYXggPSAwO1xuICAgICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAobnVtYmVyc1trZXldID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSBudW1iZXJzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5faXNGb290ZXJGaXhlZCA9IGZ1bmN0aW9uIF9pc0Zvb3RlckZpeGVkKCkge1xuICAgICAgICByZXR1cm4gJCgnLm1haW4tZm9vdGVyJykuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25maWcgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIHZhciBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgTGF5b3V0KCQodGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnIHx8IGNvbmZpZyA9PT0gJycpIHtcbiAgICAgICAgICAgIGRhdGFbJ19pbml0J10oKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZyA9PT0gJ2ZpeExheW91dEhlaWdodCcgfHwgY29uZmlnID09PSAnZml4TG9naW5SZWdpc3RlckhlaWdodCcpIHtcbiAgICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gTGF5b3V0O1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKCdib2R5JykpO1xuICAgIH0pO1xuICAgICQoU2VsZWN0b3IuU0lERUJBUiArICcgYScpLm9uKCdmb2N1c2luJywgZnVuY3Rpb24gKCkge1xuICAgICAgJChTZWxlY3Rvci5NQUlOX1NJREVCQVIpLmFkZENsYXNzKENsYXNzTmFtZS5TSURFQkFSX0ZPQ1VTRUQpO1xuICAgIH0pO1xuICAgICQoU2VsZWN0b3IuU0lERUJBUiArICcgYScpLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoU2VsZWN0b3IuTUFJTl9TSURFQkFSKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9GT0NVU0VEKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IExheW91dC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBMYXlvdXQ7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIExheW91dC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF5b3V0O1xuICB9KGpRdWVyeSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFB1c2hNZW51LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgUHVzaE1lbnUgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdQdXNoTWVudSc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2x0ZS5wdXNobWVudSc7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ09MTEFQU0VEOiBcImNvbGxhcHNlZFwiICsgRVZFTlRfS0VZLFxuICAgICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWVxuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBhdXRvQ29sbGFwc2VTaXplOiA5OTIsXG4gICAgICBlbmFibGVSZW1lbWJlcjogZmFsc2UsXG4gICAgICBub1RyYW5zaXRpb25BZnRlclJlbG9hZDogdHJ1ZVxuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgVE9HR0xFX0JVVFRPTjogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJyxcbiAgICAgIFNJREVCQVJfTUlOSTogJy5zaWRlYmFyLW1pbmknLFxuICAgICAgU0lERUJBUl9DT0xMQVBTRUQ6ICcuc2lkZWJhci1jb2xsYXBzZScsXG4gICAgICBCT0RZOiAnYm9keScsXG4gICAgICBPVkVSTEFZOiAnI3NpZGViYXItb3ZlcmxheScsXG4gICAgICBXUkFQUEVSOiAnLndyYXBwZXInXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQ09MTEFQU0VEOiAnc2lkZWJhci1jb2xsYXBzZScsXG4gICAgICBPUEVOOiAnc2lkZWJhci1vcGVuJyxcbiAgICAgIENMT1NFRDogJ3NpZGViYXItY2xvc2VkJ1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBQdXNoTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBQdXNoTWVudShlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghJChTZWxlY3Rvci5PVkVSTEFZKS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9hZGRPdmVybGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBQdXNoTWVudS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5leHBhbmQgPSBmdW5jdGlvbiBleHBhbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DTE9TRUQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlclwiICsgRVZFTlRfS0VZLCBDbGFzc05hbWUuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPV04pO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pLmFkZENsYXNzKENsYXNzTmFtZS5DTE9TRUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoU2VsZWN0b3IuQk9EWSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyXCIgKyBFVkVOVF9LRVksIENsYXNzTmFtZS5DT0xMQVBTRUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbGxhcHNlZEV2ZW50ID0gJC5FdmVudChFdmVudC5DT0xMQVBTRUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoY29sbGFwc2VkRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCEkKFNlbGVjdG9yLkJPRFkpLmhhc0NsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5hdXRvQ29sbGFwc2UgPSBmdW5jdGlvbiBhdXRvQ29sbGFwc2UocmVzaXplKSB7XG4gICAgICAgIGlmIChyZXNpemUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICAgIGlmICghJChTZWxlY3Rvci5CT0RZKS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTikpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzaXplID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgkKFNlbGVjdG9yLkJPRFkpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKSkge1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJChTZWxlY3Rvci5CT0RZKS5oYXNDbGFzcyhDbGFzc05hbWUuQ0xPU0VEKSkge1xuICAgICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbWVtYmVyID0gZnVuY3Rpb24gcmVtZW1iZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyKSB7XG4gICAgICAgICAgdmFyIHRvZ2dsZVN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlclwiICsgRVZFTlRfS0VZKTtcblxuICAgICAgICAgIGlmICh0b2dnbGVTdGF0ZSA9PSBDbGFzc05hbWUuQ09MTEFQU0VEKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcygnaG9sZC10cmFuc2l0aW9uJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkuZGVsYXkoNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMubm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQpIHtcbiAgICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLmRlbGF5KDUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZW1lbWJlcigpO1xuICAgICAgICB0aGlzLmF1dG9Db2xsYXBzZSgpO1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5hdXRvQ29sbGFwc2UodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRPdmVybGF5ID0gZnVuY3Rpb24gX2FkZE92ZXJsYXkoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBvdmVybGF5ID0gJCgnPGRpdiAvPicsIHtcbiAgICAgICAgICBpZDogJ3NpZGViYXItb3ZlcmxheSdcbiAgICAgICAgfSk7XG4gICAgICAgIG92ZXJsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5jb2xsYXBzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChTZWxlY3Rvci5XUkFQUEVSKS5hcHBlbmQob3ZlcmxheSk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBQdXNoTWVudSh0aGlzLCBfb3B0aW9ucyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHx0b2dnbGUvKSkge1xuICAgICAgICAgICAgZGF0YVtvcGVyYXRpb25dKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBQdXNoTWVudTtcbiAgICB9KCk7XG4gICAgLyoqXG4gICAgICogRGF0YSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLlRPR0dMRV9CVVRUT04sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICBpZiAoJChidXR0b24pLmRhdGEoJ3dpZGdldCcpICE9PSAncHVzaG1lbnUnKSB7XG4gICAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pO1xuICAgICAgfVxuXG4gICAgICBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChidXR0b24pLCAndG9nZ2xlJyk7XG4gICAgfSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoU2VsZWN0b3IuVE9HR0xFX0JVVFRPTikpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gUHVzaE1lbnU7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBQdXNoTWVudTtcbiAgfShqUXVlcnkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBUcmVldmlldy5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIFRyZWV2aWV3ID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnVHJlZXZpZXcnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUudHJlZXZpZXcnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIFNFTEVDVEVEOiBcInNlbGVjdGVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBFWFBBTkRFRDogXCJleHBhbmRlZFwiICsgRVZFTlRfS0VZLFxuICAgICAgQ09MTEFQU0VEOiBcImNvbGxhcHNlZFwiICsgRVZFTlRfS0VZLFxuICAgICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVlcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIExJOiAnLm5hdi1pdGVtJyxcbiAgICAgIExJTks6ICcubmF2LWxpbmsnLFxuICAgICAgVFJFRVZJRVdfTUVOVTogJy5uYXYtdHJlZXZpZXcnLFxuICAgICAgT1BFTjogJy5tZW51LW9wZW4nLFxuICAgICAgREFUQV9XSURHRVQ6ICdbZGF0YS13aWRnZXQ9XCJ0cmVldmlld1wiXSdcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBMSTogJ25hdi1pdGVtJyxcbiAgICAgIExJTks6ICduYXYtbGluaycsXG4gICAgICBUUkVFVklFV19NRU5VOiAnbmF2LXRyZWV2aWV3JyxcbiAgICAgIE9QRU46ICdtZW51LW9wZW4nLFxuICAgICAgU0lERUJBUl9DT0xMQVBTRUQ6ICdzaWRlYmFyLWNvbGxhcHNlJ1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICB0cmlnZ2VyOiBTZWxlY3Rvci5EQVRBX1dJREdFVCArIFwiIFwiICsgU2VsZWN0b3IuTElOSyxcbiAgICAgIGFuaW1hdGlvblNwZWVkOiAzMDAsXG4gICAgICBhY2NvcmRpb246IHRydWUsXG4gICAgICBleHBhbmRTaWRlYmFyOiBmYWxzZSxcbiAgICAgIHNpZGViYXJCdXR0b25TZWxlY3RvcjogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJ1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBUcmVldmlldyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBUcmVldmlldyhlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIH0gLy8gUHVibGljXG5cblxuICAgICAgdmFyIF9wcm90byA9IFRyZWV2aWV3LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9zZXR1cExpc3RlbmVycygpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmV4cGFuZCA9IGZ1bmN0aW9uIGV4cGFuZCh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV4cGFuZGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkVYUEFOREVEKTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmFjY29yZGlvbikge1xuICAgICAgICAgIHZhciBvcGVuTWVudUxpID0gcGFyZW50TGkuc2libGluZ3MoU2VsZWN0b3IuT1BFTikuZmlyc3QoKTtcbiAgICAgICAgICB2YXIgb3BlblRyZWV2aWV3ID0gb3Blbk1lbnVMaS5maW5kKFNlbGVjdG9yLlRSRUVWSUVXX01FTlUpLmZpcnN0KCk7XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZShvcGVuVHJlZXZpZXcsIG9wZW5NZW51TGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZXZpZXdNZW51LnN0b3AoKS5zbGlkZURvd24odGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGFyZW50TGkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZXhwYW5kU2lkZWJhcikge1xuICAgICAgICAgIHRoaXMuX2V4cGFuZFNpZGViYXIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbGxhcHNlID0gZnVuY3Rpb24gY29sbGFwc2UodHJlZXZpZXdNZW51LCBwYXJlbnRMaSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNPTExBUFNFRCk7XG4gICAgICAgIHRyZWV2aWV3TWVudS5zdG9wKCkuc2xpZGVVcCh0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwYXJlbnRMaS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICAgJChfdGhpczIuX2VsZW1lbnQpLnRyaWdnZXIoY29sbGFwc2VkRXZlbnQpO1xuICAgICAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNlbGVjdG9yLk9QRU4gKyBcIiA+IFwiICsgU2VsZWN0b3IuVFJFRVZJRVdfTUVOVSkuc2xpZGVVcCgpO1xuICAgICAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNlbGVjdG9yLk9QRU4pLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIHZhciAkcmVsYXRpdmVUYXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB2YXIgJHBhcmVudCA9ICRyZWxhdGl2ZVRhcmdldC5wYXJlbnQoKTtcbiAgICAgICAgdmFyIHRyZWV2aWV3TWVudSA9ICRwYXJlbnQuZmluZCgnPiAnICsgU2VsZWN0b3IuVFJFRVZJRVdfTUVOVSk7XG5cbiAgICAgICAgaWYgKCF0cmVldmlld01lbnUuaXMoU2VsZWN0b3IuVFJFRVZJRVdfTUVOVSkpIHtcbiAgICAgICAgICBpZiAoISRwYXJlbnQuaXMoU2VsZWN0b3IuTEkpKSB7XG4gICAgICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoJz4gJyArIFNlbGVjdG9yLlRSRUVWSUVXX01FTlUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghdHJlZXZpZXdNZW51LmlzKFNlbGVjdG9yLlRSRUVWSUVXX01FTlUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHBhcmVudExpID0gJHJlbGF0aXZlVGFyZ2V0LnBhcmVudHMoU2VsZWN0b3IuTEkpLmZpcnN0KCk7XG4gICAgICAgIHZhciBpc09wZW4gPSBwYXJlbnRMaS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTik7XG5cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgIHRoaXMuY29sbGFwc2UoJCh0cmVldmlld01lbnUpLCBwYXJlbnRMaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5leHBhbmQoJCh0cmVldmlld01lbnUpLCBwYXJlbnRMaSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX3NldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldHVwTGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLl9jb25maWcudHJpZ2dlciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgX3RoaXMzLnRvZ2dsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9leHBhbmRTaWRlYmFyID0gZnVuY3Rpb24gX2V4cGFuZFNpZGViYXIoKSB7XG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfQ09MTEFQU0VEKSkge1xuICAgICAgICAgICQodGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb25maWcgPT09ICdpbml0Jykge1xuICAgICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBUcmVldmlldztcbiAgICB9KCk7XG4gICAgLyoqXG4gICAgICogRGF0YSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cblxuICAgICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFNlbGVjdG9yLkRBVEFfV0lER0VUKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdpbml0Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRyZWV2aWV3O1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHJlZXZpZXc7XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIERpcmVjdENoYXQgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdEaXJlY3RDaGF0JztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLmRpcmVjdGNoYXQnO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIFRPR0dMRUQ6IFwidG9nZ2xlZHtFVkVOVF9LRVl9XCJcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtd2lkZ2V0PVwiY2hhdC1wYW5lLXRvZ2dsZVwiXScsXG4gICAgICBESVJFQ1RfQ0hBVDogJy5kaXJlY3QtY2hhdCdcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBESVJFQ1RfQ0hBVF9PUEVOOiAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3BlbidcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICB2YXIgRGlyZWN0Q2hhdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBEaXJlY3RDaGF0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IERpcmVjdENoYXQucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnBhcmVudHMoU2VsZWN0b3IuRElSRUNUX0NIQVQpLmZpcnN0KCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkRJUkVDVF9DSEFUX09QRU4pO1xuICAgICAgICB2YXIgdG9nZ2xlZEV2ZW50ID0gJC5FdmVudChFdmVudC5UT0dHTEVEKTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHRvZ2dsZWRFdmVudCk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgRGlyZWN0Q2hhdCgkKHRoaXMpKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIERpcmVjdENoYXQ7XG4gICAgfSgpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEaXJlY3RDaGF0O1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBEaXJlY3RDaGF0O1xuICB9KGpRdWVyeSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFRvZG9MaXN0LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgVG9kb0xpc3QgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdUb2RvTGlzdCc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2x0ZS50b2RvbGlzdCc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgVE9ET19MSVNUX0RPTkU6ICdkb25lJ1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBvbkNoZWNrOiBmdW5jdGlvbiBvbkNoZWNrKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9LFxuICAgICAgb25VbkNoZWNrOiBmdW5jdGlvbiBvblVuQ2hlY2soaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICB2YXIgVG9kb0xpc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gVG9kb0xpc3QoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgfSAvLyBQdWJsaWNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gVG9kb0xpc3QucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5UT0RPX0xJU1RfRE9ORSk7XG5cbiAgICAgICAgaWYgKCEkKGl0ZW0pLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIHRoaXMudW5DaGVjaygkKGl0ZW0pKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrKGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNoZWNrID0gZnVuY3Rpb24gY2hlY2soaXRlbSkge1xuICAgICAgICB0aGlzLl9jb25maWcub25DaGVjay5jYWxsKGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnVuQ2hlY2sgPSBmdW5jdGlvbiB1bkNoZWNrKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pO1xuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICQoU2VsZWN0b3IuREFUQV9UT0dHTEUpLmZpbmQoJ2lucHV0OmNoZWNrYm94OmNoZWNrZWQnKS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5UT0RPX0xJU1RfRE9ORSk7XG4gICAgICAgICQoU2VsZWN0b3IuREFUQV9UT0dHTEUpLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6Y2hlY2tib3gnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGF0LnRvZ2dsZSgkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICB2YXIgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IFRvZG9MaXN0KCQodGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnKSB7XG4gICAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFRvZG9MaXN0O1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvZG9MaXN0O1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gVG9kb0xpc3Q7XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgQ2FyZFdpZGdldC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIENhcmRXaWRnZXQgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdDYXJkV2lkZ2V0JztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLmNhcmR3aWRnZXQnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIEVYUEFOREVEOiBcImV4cGFuZGVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBDT0xMQVBTRUQ6IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVksXG4gICAgICBNQVhJTUlaRUQ6IFwibWF4aW1pemVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBNSU5JTUlaRUQ6IFwibWluaW1pemVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBSRU1PVkVEOiBcInJlbW92ZWRcIiArIEVWRU5UX0tFWVxuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIENBUkQ6ICdjYXJkJyxcbiAgICAgIENPTExBUFNFRDogJ2NvbGxhcHNlZC1jYXJkJyxcbiAgICAgIENPTExBUFNJTkc6ICdjb2xsYXBzaW5nLWNhcmQnLFxuICAgICAgRVhQQU5ESU5HOiAnZXhwYW5kaW5nLWNhcmQnLFxuICAgICAgV0FTX0NPTExBUFNFRDogJ3dhcy1jb2xsYXBzZWQnLFxuICAgICAgTUFYSU1JWkVEOiAnbWF4aW1pemVkLWNhcmQnXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBEQVRBX1JFTU9WRTogJ1tkYXRhLWNhcmQtd2lkZ2V0PVwicmVtb3ZlXCJdJyxcbiAgICAgIERBVEFfQ09MTEFQU0U6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCJdJyxcbiAgICAgIERBVEFfTUFYSU1JWkU6ICdbZGF0YS1jYXJkLXdpZGdldD1cIm1heGltaXplXCJdJyxcbiAgICAgIENBUkQ6IFwiLlwiICsgQ2xhc3NOYW1lLkNBUkQsXG4gICAgICBDQVJEX0hFQURFUjogJy5jYXJkLWhlYWRlcicsXG4gICAgICBDQVJEX0JPRFk6ICcuY2FyZC1ib2R5JyxcbiAgICAgIENBUkRfRk9PVEVSOiAnLmNhcmQtZm9vdGVyJyxcbiAgICAgIENPTExBUFNFRDogXCIuXCIgKyBDbGFzc05hbWUuQ09MTEFQU0VEXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIGFuaW1hdGlvblNwZWVkOiAnbm9ybWFsJyxcbiAgICAgIGNvbGxhcHNlVHJpZ2dlcjogU2VsZWN0b3IuREFUQV9DT0xMQVBTRSxcbiAgICAgIHJlbW92ZVRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfUkVNT1ZFLFxuICAgICAgbWF4aW1pemVUcmlnZ2VyOiBTZWxlY3Rvci5EQVRBX01BWElNSVpFLFxuICAgICAgY29sbGFwc2VJY29uOiAnZmEtbWludXMnLFxuICAgICAgZXhwYW5kSWNvbjogJ2ZhLXBsdXMnLFxuICAgICAgbWF4aW1pemVJY29uOiAnZmEtZXhwYW5kJyxcbiAgICAgIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzJ1xuICAgIH07XG5cbiAgICB2YXIgQ2FyZFdpZGdldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBDYXJkV2lkZ2V0KGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU2VsZWN0b3IuQ0FSRCkuZmlyc3QoKTtcblxuICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDbGFzc05hbWUuQ0FSRCkpIHtcbiAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgc2V0dGluZ3MpO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gQ2FyZFdpZGdldC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5jb2xsYXBzZSA9IGZ1bmN0aW9uIGNvbGxhcHNlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORykuY2hpbGRyZW4oU2VsZWN0b3IuQ0FSRF9CT0RZICsgXCIsIFwiICsgU2VsZWN0b3IuQ0FSRF9GT09URVIpLnNsaWRlVXAodGhpcy5fc2V0dGluZ3MuYW5pbWF0aW9uU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5fcGFyZW50LmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50LmZpbmQoJz4gJyArIFNlbGVjdG9yLkNBUkRfSEVBREVSICsgJyAnICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbikuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29uKTtcblxuICAgICAgICB2YXIgY29sbGFwc2VkID0gJC5FdmVudChFdmVudC5DT0xMQVBTRUQpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcihjb2xsYXBzZWQsIHRoaXMuX3BhcmVudCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZXhwYW5kID0gZnVuY3Rpb24gZXhwYW5kKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ2xhc3NOYW1lLkVYUEFORElORykuY2hpbGRyZW4oU2VsZWN0b3IuQ0FSRF9CT0RZICsgXCIsIFwiICsgU2VsZWN0b3IuQ0FSRF9GT09URVIpLnNsaWRlRG93bih0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fcGFyZW50LnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5FWFBBTkRJTkcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCgnPiAnICsgU2VsZWN0b3IuQ0FSRF9IRUFERVIgKyAnICcgKyB0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbikuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5leHBhbmRJY29uKTtcblxuICAgICAgICB2YXIgZXhwYW5kZWQgPSAkLkV2ZW50KEV2ZW50LkVYUEFOREVEKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoZXhwYW5kZWQsIHRoaXMuX3BhcmVudCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuc2xpZGVVcCgpO1xuXG4gICAgICAgIHZhciByZW1vdmVkID0gJC5FdmVudChFdmVudC5SRU1PVkVEKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIocmVtb3ZlZCwgdGhpcy5fcGFyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5tYXhpbWl6ZSA9IGZ1bmN0aW9uIG1heGltaXplKCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbik7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50LmNzcyh7XG4gICAgICAgICAgJ2hlaWdodCc6IHRoaXMuX3BhcmVudC5oZWlnaHQoKSxcbiAgICAgICAgICAnd2lkdGgnOiB0aGlzLl9wYXJlbnQud2lkdGgoKSxcbiAgICAgICAgICAndHJhbnNpdGlvbic6ICdhbGwgLjE1cydcbiAgICAgICAgfSkuZGVsYXkoMTUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhDbGFzc05hbWUuTUFYSU1JWkVEKTtcbiAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRCk7XG5cbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtYXhpbWl6ZWQgPSAkLkV2ZW50KEV2ZW50Lk1BWElNSVpFRCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKG1heGltaXplZCwgdGhpcy5fcGFyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5taW5pbWl6ZSA9IGZ1bmN0aW9uIG1pbmltaXplKCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MubWluaW1pemVJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbik7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50LmNzcygnY3NzVGV4dCcsICdoZWlnaHQ6JyArIHRoaXMuX3BhcmVudFswXS5zdHlsZS5oZWlnaHQgKyAnICFpbXBvcnRhbnQ7JyArICd3aWR0aDonICsgdGhpcy5fcGFyZW50WzBdLnN0eWxlLndpZHRoICsgJyAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOiBhbGwgLjE1czsnKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRCk7XG4gICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdoZWlnaHQnOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnaW5oZXJpdCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5XQVNfQ09MTEFQU0VEKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBNSU5JTUlaRUQgPSAkLkV2ZW50KEV2ZW50Lk1JTklNSVpFRCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKE1JTklNSVpFRCwgdGhpcy5fcGFyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by50b2dnbGVNYXhpbWl6ZSA9IGZ1bmN0aW9uIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgICBpZiAodGhpcy5fcGFyZW50Lmhhc0NsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpKSB7XG4gICAgICAgICAgdGhpcy5taW5pbWl6ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWF4aW1pemUoKTtcbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdChjYXJkKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGNhcmQ7XG4gICAgICAgICQodGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnRvZ2dsZU1heGltaXplKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MucmVtb3ZlVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgdmFyIF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENhcmRXaWRnZXQoJCh0aGlzKSwgX29wdGlvbnMpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBkYXRhIDogY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHxyZW1vdmV8dG9nZ2xlfG1heGltaXplfG1pbmltaXplfHRvZ2dsZU1heGltaXplLykpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGRhdGEuX2luaXQoJCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDYXJkV2lkZ2V0O1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9DT0xMQVBTRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfUkVNT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAncmVtb3ZlJyk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9NQVhJTUlaRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZU1heGltaXplJyk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogalF1ZXJ5IEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcmRXaWRnZXQ7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENhcmRXaWRnZXQ7XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgQ2FyZFJlZnJlc2guanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBDYXJkUmVmcmVzaCA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ0NhcmRSZWZyZXNoJztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLmNhcmRyZWZyZXNoJztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBMT0FERUQ6IFwibG9hZGVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBPVkVSTEFZX0FEREVEOiBcIm92ZXJsYXkuYWRkZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIE9WRVJMQVlfUkVNT1ZFRDogXCJvdmVybGF5LnJlbW92ZWRcIiArIEVWRU5UX0tFWVxuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIENBUkQ6ICdjYXJkJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQ0FSRDogXCIuXCIgKyBDbGFzc05hbWUuQ0FSRCxcbiAgICAgIERBVEFfUkVGUkVTSDogJ1tkYXRhLWNhcmQtd2lkZ2V0PVwiY2FyZC1yZWZyZXNoXCJdJ1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBzb3VyY2U6ICcnLFxuICAgICAgc291cmNlU2VsZWN0b3I6ICcnLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIHRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfUkVGUkVTSCxcbiAgICAgIGNvbnRlbnQ6ICcuY2FyZC1ib2R5JyxcbiAgICAgIGxvYWRJbkNvbnRlbnQ6IHRydWUsXG4gICAgICBsb2FkT25Jbml0OiB0cnVlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnJyxcbiAgICAgIG92ZXJsYXlUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PGkgY2xhc3M9XCJmYXMgZmEtMnggZmEtc3luYy1hbHQgZmEtc3BpblwiPjwvaT48L2Rpdj4nLFxuICAgICAgb25Mb2FkU3RhcnQ6IGZ1bmN0aW9uIG9uTG9hZFN0YXJ0KCkge30sXG4gICAgICBvbkxvYWREb25lOiBmdW5jdGlvbiBvbkxvYWREb25lKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIENhcmRSZWZyZXNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIENhcmRSZWZyZXNoKGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU2VsZWN0b3IuQ0FSRCkuZmlyc3QoKTtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9vdmVybGF5ID0gJCh0aGlzLl9zZXR0aW5ncy5vdmVybGF5VGVtcGxhdGUpO1xuXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKENsYXNzTmFtZS5DQVJEKSkge1xuICAgICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc291cmNlID09PSAnJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU291cmNlIHVybCB3YXMgbm90IGRlZmluZWQuIFBsZWFzZSBzcGVjaWZ5IGEgdXJsIGluIHlvdXIgQ2FyZFJlZnJlc2ggc291cmNlIG9wdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gQ2FyZFJlZnJlc2gucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8ubG9hZCA9IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKTtcblxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWRTdGFydC5jYWxsKCQodGhpcykpO1xuXG4gICAgICAgICQuZ2V0KHRoaXMuX3NldHRpbmdzLnNvdXJjZSwgdGhpcy5fc2V0dGluZ3MucGFyYW1zLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZEluQ29udGVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yICE9ICcnKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gJChyZXNwb25zZSkuZmluZCh0aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvcikuaHRtbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWREb25lLmNhbGwoJCh0aGlzKSwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgdGhpcy5fcmVtb3ZlT3ZlcmxheSgpO1xuICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSAhPT0gJycgJiYgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlKTtcbiAgICAgICAgdmFyIGxvYWRlZEV2ZW50ID0gJC5FdmVudChFdmVudC5MT0FERUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIobG9hZGVkRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRPdmVybGF5ID0gZnVuY3Rpb24gX2FkZE92ZXJsYXkoKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5hcHBlbmQodGhpcy5fb3ZlcmxheSk7XG5cbiAgICAgICAgdmFyIG92ZXJsYXlBZGRlZEV2ZW50ID0gJC5FdmVudChFdmVudC5PVkVSTEFZX0FEREVEKTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKG92ZXJsYXlBZGRlZEV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fcmVtb3ZlT3ZlcmxheSA9IGZ1bmN0aW9uIF9yZW1vdmVPdmVybGF5KCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKTtcblxuICAgICAgICB2YXIgb3ZlcmxheVJlbW92ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuT1ZFUkxBWV9SRU1PVkVEKTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKG92ZXJsYXlSZW1vdmVkRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoY2FyZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQodGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy50cmlnZ2VyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMubG9hZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZE9uSW5pdCkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIHZhciBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDYXJkUmVmcmVzaCgkKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGEgOiBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvbG9hZC8pKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENhcmRSZWZyZXNoO1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9SRUZSRVNILCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2xvYWQnKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAkKFNlbGVjdG9yLkRBVEFfUkVGUkVTSCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2FyZFJlZnJlc2g7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBDYXJkUmVmcmVzaDtcbiAgfShqUXVlcnkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBEcm9wZG93bi5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIERyb3Bkb3duID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnRHJvcGRvd24nO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUuZHJvcGRvd24nO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIE5BVkJBUjogJy5uYXZiYXInLFxuICAgICAgRFJPUERPV05fTUVOVTogJy5kcm9wZG93bi1tZW51JyxcbiAgICAgIERST1BET1dOX01FTlVfQUNUSVZFOiAnLmRyb3Bkb3duLW1lbnUuc2hvdycsXG4gICAgICBEUk9QRE9XTl9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSdcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBEUk9QRE9XTl9IT1ZFUjogJ2Ryb3Bkb3duLWhvdmVyJyxcbiAgICAgIERST1BET1dOX1JJR0hUOiAnZHJvcGRvd24tbWVudS1yaWdodCdcbiAgICB9O1xuICAgIHZhciBEZWZhdWx0ID0ge307XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBEcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIH0gLy8gUHVibGljXG5cblxuICAgICAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnRvZ2dsZVN1Ym1lbnUgPSBmdW5jdGlvbiB0b2dnbGVTdWJtZW51KCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNpYmxpbmdzKCkuc2hvdygpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmV4dCgpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudHMoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5maW5kKCcuc2hvdycpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudHMoJ2xpLm5hdi1pdGVtLmRyb3Bkb3duLnNob3cnKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAkKCcuZHJvcGRvd24tc3VibWVudSAuc2hvdycpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmZpeFBvc2l0aW9uID0gZnVuY3Rpb24gZml4UG9zaXRpb24oKSB7XG4gICAgICAgIHZhciBlbG0gPSAkKFNlbGVjdG9yLkRST1BET1dOX01FTlVfQUNUSVZFKTtcblxuICAgICAgICBpZiAoZWxtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGlmIChlbG0uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX1JJR0hUKSkge1xuICAgICAgICAgICAgZWxtLmNzcygnbGVmdCcsICdpbmhlcml0Jyk7XG4gICAgICAgICAgICBlbG0uY3NzKCdyaWdodCcsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY3NzKCdsZWZ0JywgMCk7XG4gICAgICAgICAgICBlbG0uY3NzKCdyaWdodCcsICdpbmhlcml0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG9mZnNldCA9IGVsbS5vZmZzZXQoKTtcbiAgICAgICAgICB2YXIgd2lkdGggPSBlbG0ud2lkdGgoKTtcbiAgICAgICAgICB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICB2YXIgdmlzaWJsZVBhcnQgPSB3aW5kb3dXaWR0aCAtIG9mZnNldC5sZWZ0O1xuXG4gICAgICAgICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgZWxtLmNzcygnbGVmdCcsICdpbmhlcml0Jyk7XG4gICAgICAgICAgICBlbG0uY3NzKCdyaWdodCcsIG9mZnNldC5sZWZ0IC0gNSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2aXNpYmxlUGFydCA8IHdpZHRoKSB7XG4gICAgICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpO1xuICAgICAgICAgICAgICBlbG0uY3NzKCdyaWdodCcsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIHZhciBfY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bigkKHRoaXMpLCBfY29uZmlnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZVN1Ym1lbnUnIHx8IGNvbmZpZyA9PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIERyb3Bkb3duO1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJChTZWxlY3Rvci5EUk9QRE9XTl9NRU5VICsgJyAnICsgU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZVN1Ym1lbnUnKTtcbiAgICB9KTtcbiAgICAkKFNlbGVjdG9yLk5BVkJBUiArICcgJyArIFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdmaXhQb3NpdGlvbicpO1xuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogalF1ZXJ5IEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93bjtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERyb3Bkb3duO1xuICB9KGpRdWVyeSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFRvYXN0cy5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIFRvYXN0cyA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ1RvYXN0cyc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2x0ZS50b2FzdHMnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIElOSVQ6IFwiaW5pdFwiICsgRVZFTlRfS0VZLFxuICAgICAgQ1JFQVRFRDogXCJjcmVhdGVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBSRU1PVkVEOiBcInJlbW92ZWRcIiArIEVWRU5UX0tFWVxuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQk9EWTogJ3RvYXN0LWJvZHknLFxuICAgICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJyN0b2FzdHNDb250YWluZXJUb3BSaWdodCcsXG4gICAgICBDT05UQUlORVJfVE9QX0xFRlQ6ICcjdG9hc3RzQ29udGFpbmVyVG9wTGVmdCcsXG4gICAgICBDT05UQUlORVJfQk9UVE9NX1JJR0hUOiAnI3RvYXN0c0NvbnRhaW5lckJvdHRvbVJpZ2h0JyxcbiAgICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJyN0b2FzdHNDb250YWluZXJCb3R0b21MZWZ0J1xuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIFRPUF9SSUdIVDogJ3RvYXN0cy10b3AtcmlnaHQnLFxuICAgICAgVE9QX0xFRlQ6ICd0b2FzdHMtdG9wLWxlZnQnLFxuICAgICAgQk9UVE9NX1JJR0hUOiAndG9hc3RzLWJvdHRvbS1yaWdodCcsXG4gICAgICBCT1RUT01fTEVGVDogJ3RvYXN0cy1ib3R0b20tbGVmdCcsXG4gICAgICBGQURFOiAnZmFkZSdcbiAgICB9O1xuICAgIHZhciBQb3NpdGlvbiA9IHtcbiAgICAgIFRPUF9SSUdIVDogJ3RvcFJpZ2h0JyxcbiAgICAgIFRPUF9MRUZUOiAndG9wTGVmdCcsXG4gICAgICBCT1RUT01fUklHSFQ6ICdib3R0b21SaWdodCcsXG4gICAgICBCT1RUT01fTEVGVDogJ2JvdHRvbUxlZnQnXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgIGF1dG9oaWRlOiBmYWxzZSxcbiAgICAgIGF1dG9yZW1vdmU6IHRydWUsXG4gICAgICBkZWxheTogMTAwMCxcbiAgICAgIGZhZGU6IHRydWUsXG4gICAgICBpY29uOiBudWxsLFxuICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICBpbWFnZUFsdDogbnVsbCxcbiAgICAgIGltYWdlSGVpZ2h0OiAnMjVweCcsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHN1YnRpdGxlOiBudWxsLFxuICAgICAgY2xvc2U6IHRydWUsXG4gICAgICBib2R5OiBudWxsLFxuICAgICAgY2xhc3M6IG51bGxcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICB2YXIgVG9hc3RzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFRvYXN0cyhlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIHRoaXMuX3ByZXBhcmVDb250YWluZXIoKTtcblxuICAgICAgICB2YXIgaW5pdEV2ZW50ID0gJC5FdmVudChFdmVudC5JTklUKTtcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoaW5pdEV2ZW50KTtcbiAgICAgIH0gLy8gUHVibGljXG5cblxuICAgICAgdmFyIF9wcm90byA9IFRvYXN0cy5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHZhciB0b2FzdCA9ICQoJzxkaXYgY2xhc3M9XCJ0b2FzdFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiLz4nKTtcbiAgICAgICAgdG9hc3QuZGF0YSgnYXV0b2hpZGUnLCB0aGlzLl9jb25maWcuYXV0b2hpZGUpO1xuICAgICAgICB0b2FzdC5kYXRhKCdhbmltYXRpb24nLCB0aGlzLl9jb25maWcuZmFkZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbGFzcykge1xuICAgICAgICAgIHRvYXN0LmFkZENsYXNzKHRoaXMuX2NvbmZpZy5jbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmRlbGF5ICYmIHRoaXMuX2NvbmZpZy5kZWxheSAhPSA1MDApIHtcbiAgICAgICAgICB0b2FzdC5kYXRhKCdkZWxheScsIHRoaXMuX2NvbmZpZy5kZWxheSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9hc3RfaGVhZGVyID0gJCgnPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPicpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciB0b2FzdF9pbWFnZSA9ICQoJzxpbWcgLz4nKS5hZGRDbGFzcygncm91bmRlZCBtci0yJykuYXR0cignc3JjJywgdGhpcy5fY29uZmlnLmltYWdlKS5hdHRyKCdhbHQnLCB0aGlzLl9jb25maWcuaW1hZ2VBbHQpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0b2FzdF9pbWFnZS5oZWlnaHQodGhpcy5fY29uZmlnLmltYWdlSGVpZ2h0KS53aWR0aCgnYXV0bycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvYXN0X2hlYWRlci5hcHBlbmQodG9hc3RfaW1hZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ21yLTInKS5hZGRDbGFzcyh0aGlzLl9jb25maWcuaWNvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aXRsZSAhPSBudWxsKSB7XG4gICAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8c3Ryb25nIC8+JykuYWRkQ2xhc3MoJ21yLWF1dG8nKS5odG1sKHRoaXMuX2NvbmZpZy50aXRsZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zdWJ0aXRsZSAhPSBudWxsKSB7XG4gICAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8c21hbGwgLz4nKS5odG1sKHRoaXMuX2NvbmZpZy5zdWJ0aXRsZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHRvYXN0X2Nsb3NlID0gJCgnPGJ1dHRvbiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIC8+JykuYXR0cigndHlwZScsICdidXR0b24nKS5hZGRDbGFzcygnbWwtMiBtYi0xIGNsb3NlJykuYXR0cignYXJpYS1sYWJlbCcsICdDbG9zZScpLmFwcGVuZCgnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdG9hc3RfY2xvc2UudG9nZ2xlQ2xhc3MoJ21sLTIgbWwtYXV0bycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvYXN0X2hlYWRlci5hcHBlbmQodG9hc3RfY2xvc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9hc3QuYXBwZW5kKHRvYXN0X2hlYWRlcik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib2R5ICE9IG51bGwpIHtcbiAgICAgICAgICB0b2FzdC5hcHBlbmQoJCgnPGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIiAvPicpLmh0bWwodGhpcy5fY29uZmlnLmJvZHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fZ2V0Q29udGFpbmVySWQoKSkucHJlcGVuZCh0b2FzdCk7XG4gICAgICAgIHZhciBjcmVhdGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNSRUFURUQpO1xuICAgICAgICAkKCdib2R5JykudHJpZ2dlcihjcmVhdGVkRXZlbnQpO1xuICAgICAgICB0b2FzdC50b2FzdCgnc2hvdycpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b3JlbW92ZSkge1xuICAgICAgICAgIHRvYXN0Lm9uKCdoaWRkZW4uYnMudG9hc3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmRlbGF5KDIwMCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB2YXIgcmVtb3ZlZEV2ZW50ID0gJC5FdmVudChFdmVudC5SRU1PVkVEKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKHJlbW92ZWRFdmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5fZ2V0Q29udGFpbmVySWQgPSBmdW5jdGlvbiBfZ2V0Q29udGFpbmVySWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uVE9QX1JJR0hUKSB7XG4gICAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9UT1BfUklHSFQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLlRPUF9MRUZUKSB7XG4gICAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9UT1BfTEVGVDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX1JJR0hUKSB7XG4gICAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9CT1RUT01fUklHSFQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLkJPVFRPTV9MRUZUKSB7XG4gICAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9CT1RUT01fTEVGVDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9wcmVwYXJlQ29udGFpbmVyID0gZnVuY3Rpb24gX3ByZXBhcmVDb250YWluZXIoKSB7XG4gICAgICAgIGlmICgkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKCc8ZGl2IC8+JykuYXR0cignaWQnLCB0aGlzLl9nZXRDb250YWluZXJJZCgpLnJlcGxhY2UoJyMnLCAnJykpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfUklHSFQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX1JJR0hUKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENsYXNzTmFtZS5UT1BfTEVGVCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX1JJR0hUKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoQ2xhc3NOYW1lLkJPVFRPTV9SSUdIVCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX0xFRlQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZml4ZWQpIHtcbiAgICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcy5fZ2V0Q29udGFpbmVySWQoKSkucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShvcHRpb24sIGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKTtcblxuICAgICAgICAgIHZhciB0b2FzdCA9IG5ldyBUb2FzdHMoJCh0aGlzKSwgX29wdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgIHRvYXN0W29wdGlvbl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFRvYXN0cztcbiAgICB9KCk7XG4gICAgLyoqXG4gICAgICogalF1ZXJ5IEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJC5mbltOQU1FXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdHM7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gVG9hc3RzO1xuICB9KGpRdWVyeSk7XG5cbiAgZXhwb3J0cy5DYXJkUmVmcmVzaCA9IENhcmRSZWZyZXNoO1xuICBleHBvcnRzLkNhcmRXaWRnZXQgPSBDYXJkV2lkZ2V0O1xuICBleHBvcnRzLkNvbnRyb2xTaWRlYmFyID0gQ29udHJvbFNpZGViYXI7XG4gIGV4cG9ydHMuRGlyZWN0Q2hhdCA9IERpcmVjdENoYXQ7XG4gIGV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93bjtcbiAgZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXQ7XG4gIGV4cG9ydHMuUHVzaE1lbnUgPSBQdXNoTWVudTtcbiAgZXhwb3J0cy5Ub2FzdHMgPSBUb2FzdHM7XG4gIGV4cG9ydHMuVG9kb0xpc3QgPSBUb2RvTGlzdDtcbiAgZXhwb3J0cy5UcmVldmlldyA9IFRyZWV2aWV3O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZG1pbmx0ZS5qcy5tYXBcbiIsInRyeSB7XG4gICAgd2luZG93LlBvcHBlciA9IHJlcXVpcmUoXCJwb3BwZXIuanNcIikuZGVmYXVsdDtcbiAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHdpbmRvdy5Td2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xuICAgIHJlcXVpcmUoXCJib290c3RyYXBcIik7XG59IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG59XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8vIEJvaWxlcnBsYXRlXG5yZXF1aXJlKFwiLi9hZG1pbkx0ZVwiKTtcbnJlcXVpcmUoXCIuL2RlbW9cIik7XG5yZXF1aXJlKFwiLi9tYW5hZ2Vfb3BlcmF0aW9uXCIpO1xucmVxdWlyZShcIi4uL3BsdWdpbnNcIik7XG4iLCIvKipcbiAqIEFkbWluTFRFIERlbW8gTWVudVxuICogLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBZb3Ugc2hvdWxkIG5vdCB1c2UgdGhpcyBmaWxlIGluIHByb2R1Y3Rpb24uXG4gKiBUaGlzIGZpbGUgaXMgZm9yIGRlbW8gcHVycG9zZXMgb25seS5cbiAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIHZhciAkc2lkZWJhciAgID0gJCgnLmNvbnRyb2wtc2lkZWJhcicpXG4gIHZhciAkY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ3AtMyBjb250cm9sLXNpZGViYXItY29udGVudCdcbiAgfSlcblxuICAkc2lkZWJhci5hcHBlbmQoJGNvbnRhaW5lcilcblxuICB2YXIgbmF2YmFyX2Rhcmtfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1wcmltYXJ5JyxcbiAgICAnbmF2YmFyLXNlY29uZGFyeScsXG4gICAgJ25hdmJhci1pbmZvJyxcbiAgICAnbmF2YmFyLXN1Y2Nlc3MnLFxuICAgICduYXZiYXItZGFuZ2VyJyxcbiAgICAnbmF2YmFyLWluZGlnbycsXG4gICAgJ25hdmJhci1wdXJwbGUnLFxuICAgICduYXZiYXItcGluaycsXG4gICAgJ25hdmJhci1uYXZ5JyxcbiAgICAnbmF2YmFyLWxpZ2h0Ymx1ZScsXG4gICAgJ25hdmJhci10ZWFsJyxcbiAgICAnbmF2YmFyLWN5YW4nLFxuICAgICduYXZiYXItZGFyaycsXG4gICAgJ25hdmJhci1ncmF5LWRhcmsnLFxuICAgICduYXZiYXItZ3JheScsXG4gIF1cblxuICB2YXIgbmF2YmFyX2xpZ2h0X3NraW5zID0gW1xuICAgICduYXZiYXItbGlnaHQnLFxuICAgICduYXZiYXItd2FybmluZycsXG4gICAgJ25hdmJhci13aGl0ZScsXG4gICAgJ25hdmJhci1vcmFuZ2UnLFxuICBdXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoXG4gICAgJzxoNT5DdXN0b21pemUgQWRtaW5MVEU8L2g1PjxociBjbGFzcz1cIm1iLTJcIi8+J1xuICApXG5cbiAgdmFyICRub19ib3JkZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWhlYWRlcicpLmhhc0NsYXNzKCdib3JkZXItYm90dG9tLTAnKSxcbiAgICAnY2xhc3MnOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnYm9yZGVyLWJvdHRvbS0wJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpXG4gICAgfVxuICB9KVxuICB2YXIgJG5vX2JvcmRlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkbm9fYm9yZGVyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5vIE5hdmJhciBib3JkZXI8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5vX2JvcmRlcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2JvZHlfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21fYm9keV9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkdGV4dF9zbV9ib2R5X2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkJvZHkgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9ib2R5X2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21faGVhZGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1oZWFkZXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2hlYWRlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TmF2YmFyIHNtYWxsIHRleHQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21faGVhZGVyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICAnY2xhc3MnOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1mb290ZXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWZvb3RlcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4tZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2Zvb3Rlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkdGV4dF9zbV9mb290ZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Rm9vdGVyIHNtYWxsIHRleHQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lcilcblxuICB2YXIgJGZsYXRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1mbGF0JyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1mbGF0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1mbGF0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkZmxhdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRmbGF0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgZmxhdCBzdHlsZTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkZmxhdF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWxlZ2FjeScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtbGVnYWN5JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH1cbiAgfSlcbiAgdmFyICRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkbGVnYWN5X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgbGVnYWN5IHN0eWxlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRjb21wYWN0X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtY29tcGFjdCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY29tcGFjdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY29tcGFjdCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGNvbXBhY3Rfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkY29tcGFjdF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgbmF2IGNvbXBhY3Q8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGNvbXBhY3Rfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jaGlsZC1pbmRlbnQnKSxcbiAgICAnY2xhc3MnOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY2hpbGQtaW5kZW50JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgbmF2IGNoaWxkIGluZGVudDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLXNpZGViYXInKS5oYXNDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKSxcbiAgICAnY2xhc3MnOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1zaWRlYmFyJykuYWRkQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4tc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW5vLWV4cGFuZCcpXG4gICAgfVxuICB9KVxuICB2YXIgJG5vX2V4cGFuZF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5NYWluIFNpZGViYXIgZGlzYWJsZSBob3Zlci9mb2N1cyBhdXRvIGV4cGFuZDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9icmFuZF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLmJyYW5kLWxpbmsnKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5icmFuZC1saW5rJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuYnJhbmQtbGluaycpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9icmFuZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi00J30pLmFwcGVuZCgkdGV4dF9zbV9icmFuZF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5CcmFuZCBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lcilcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2Pk5hdmJhciBWYXJpYW50czwvaDY+JylcblxuICB2YXIgJG5hdmJhcl92YXJpYW50cyAgICAgICAgPSAkKCc8ZGl2IC8+Jywge1xuICAgICdjbGFzcyc6ICdkLWZsZXgnXG4gIH0pXG4gIHZhciBuYXZiYXJfYWxsX2NvbG9ycyAgICAgICA9IG5hdmJhcl9kYXJrX3NraW5zLmNvbmNhdChuYXZiYXJfbGlnaHRfc2tpbnMpXG4gIHZhciAkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycyA9IGNyZWF0ZVNraW5CbG9jayhuYXZiYXJfYWxsX2NvbG9ycywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJG1haW5faGVhZGVyID0gJCgnLm1haW4taGVhZGVyJylcbiAgICAkbWFpbl9oZWFkZXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1kYXJrJykucmVtb3ZlQ2xhc3MoJ25hdmJhci1saWdodCcpXG4gICAgbmF2YmFyX2FsbF9jb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgJG1haW5faGVhZGVyLnJlbW92ZUNsYXNzKGNvbG9yKVxuICAgIH0pXG5cbiAgICBpZiAobmF2YmFyX2Rhcmtfc2tpbnMuaW5kZXhPZihjb2xvcikgPiAtMSkge1xuICAgICAgJG1haW5faGVhZGVyLmFkZENsYXNzKCduYXZiYXItZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgICRtYWluX2hlYWRlci5hZGRDbGFzcygnbmF2YmFyLWxpZ2h0JylcbiAgICB9XG5cbiAgICAkbWFpbl9oZWFkZXIuYWRkQ2xhc3MoY29sb3IpXG4gIH0pXG5cbiAgJG5hdmJhcl92YXJpYW50cy5hcHBlbmQoJG5hdmJhcl92YXJpYW50c19jb2xvcnMpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5hdmJhcl92YXJpYW50cylcblxuICB2YXIgc2lkZWJhcl9jb2xvcnMgPSBbXG4gICAgJ2JnLXByaW1hcnknLFxuICAgICdiZy13YXJuaW5nJyxcbiAgICAnYmctaW5mbycsXG4gICAgJ2JnLWRhbmdlcicsXG4gICAgJ2JnLXN1Y2Nlc3MnLFxuICAgICdiZy1pbmRpZ28nLFxuICAgICdiZy1saWdodGJsdWUnLFxuICAgICdiZy1uYXZ5JyxcbiAgICAnYmctcHVycGxlJyxcbiAgICAnYmctZnVjaHNpYScsXG4gICAgJ2JnLXBpbmsnLFxuICAgICdiZy1tYXJvb24nLFxuICAgICdiZy1vcmFuZ2UnLFxuICAgICdiZy1saW1lJyxcbiAgICAnYmctdGVhbCcsXG4gICAgJ2JnLW9saXZlJ1xuICBdXG5cbiAgdmFyIGFjY2VudF9jb2xvcnMgPSBbXG4gICAgJ2FjY2VudC1wcmltYXJ5JyxcbiAgICAnYWNjZW50LXdhcm5pbmcnLFxuICAgICdhY2NlbnQtaW5mbycsXG4gICAgJ2FjY2VudC1kYW5nZXInLFxuICAgICdhY2NlbnQtc3VjY2VzcycsXG4gICAgJ2FjY2VudC1pbmRpZ28nLFxuICAgICdhY2NlbnQtbGlnaHRibHVlJyxcbiAgICAnYWNjZW50LW5hdnknLFxuICAgICdhY2NlbnQtcHVycGxlJyxcbiAgICAnYWNjZW50LWZ1Y2hzaWEnLFxuICAgICdhY2NlbnQtcGluaycsXG4gICAgJ2FjY2VudC1tYXJvb24nLFxuICAgICdhY2NlbnQtb3JhbmdlJyxcbiAgICAnYWNjZW50LWxpbWUnLFxuICAgICdhY2NlbnQtdGVhbCcsXG4gICAgJ2FjY2VudC1vbGl2ZSdcbiAgXVxuXG4gIHZhciBzaWRlYmFyX3NraW5zID0gW1xuICAgICdzaWRlYmFyLWRhcmstcHJpbWFyeScsXG4gICAgJ3NpZGViYXItZGFyay13YXJuaW5nJyxcbiAgICAnc2lkZWJhci1kYXJrLWluZm8nLFxuICAgICdzaWRlYmFyLWRhcmstZGFuZ2VyJyxcbiAgICAnc2lkZWJhci1kYXJrLXN1Y2Nlc3MnLFxuICAgICdzaWRlYmFyLWRhcmstaW5kaWdvJyxcbiAgICAnc2lkZWJhci1kYXJrLWxpZ2h0Ymx1ZScsXG4gICAgJ3NpZGViYXItZGFyay1uYXZ5JyxcbiAgICAnc2lkZWJhci1kYXJrLXB1cnBsZScsXG4gICAgJ3NpZGViYXItZGFyay1mdWNoc2lhJyxcbiAgICAnc2lkZWJhci1kYXJrLXBpbmsnLFxuICAgICdzaWRlYmFyLWRhcmstbWFyb29uJyxcbiAgICAnc2lkZWJhci1kYXJrLW9yYW5nZScsXG4gICAgJ3NpZGViYXItZGFyay1saW1lJyxcbiAgICAnc2lkZWJhci1kYXJrLXRlYWwnLFxuICAgICdzaWRlYmFyLWRhcmstb2xpdmUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LXByaW1hcnknLFxuICAgICdzaWRlYmFyLWxpZ2h0LXdhcm5pbmcnLFxuICAgICdzaWRlYmFyLWxpZ2h0LWluZm8nLFxuICAgICdzaWRlYmFyLWxpZ2h0LWRhbmdlcicsXG4gICAgJ3NpZGViYXItbGlnaHQtc3VjY2VzcycsXG4gICAgJ3NpZGViYXItbGlnaHQtaW5kaWdvJyxcbiAgICAnc2lkZWJhci1saWdodC1saWdodGJsdWUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LW5hdnknLFxuICAgICdzaWRlYmFyLWxpZ2h0LXB1cnBsZScsXG4gICAgJ3NpZGViYXItbGlnaHQtZnVjaHNpYScsXG4gICAgJ3NpZGViYXItbGlnaHQtcGluaycsXG4gICAgJ3NpZGViYXItbGlnaHQtbWFyb29uJyxcbiAgICAnc2lkZWJhci1saWdodC1vcmFuZ2UnLFxuICAgICdzaWRlYmFyLWxpZ2h0LWxpbWUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LXRlYWwnLFxuICAgICdzaWRlYmFyLWxpZ2h0LW9saXZlJ1xuICBdXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5BY2NlbnQgQ29sb3IgVmFyaWFudHM8L2g2PicpXG4gIHZhciAkYWNjZW50X3ZhcmlhbnRzID0gJCgnPGRpdiAvPicsIHtcbiAgICAnY2xhc3MnOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkYWNjZW50X3ZhcmlhbnRzKVxuICAkY29udGFpbmVyLmFwcGVuZChjcmVhdGVTa2luQmxvY2soYWNjZW50X2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciAgICAgICAgID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIGFjY2VudF9jbGFzcyA9IGNvbG9yXG4gICAgdmFyICRib2R5ICAgICAgPSAkKCdib2R5JylcbiAgICBhY2NlbnRfY29sb3JzLm1hcChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICB9KVxuXG4gICAgJGJvZHkuYWRkQ2xhc3MoYWNjZW50X2NsYXNzKVxuICB9KSlcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkRhcmsgU2lkZWJhciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRzaWRlYmFyX3ZhcmlhbnRzX2RhcmsgPSAkKCc8ZGl2IC8+Jywge1xuICAgICdjbGFzcyc6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX3ZhcmlhbnRzX2RhcmspXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhzaWRlYmFyX2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciAgICAgICAgID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIHNpZGViYXJfY2xhc3MgPSAnc2lkZWJhci1kYXJrLScgKyBjb2xvci5yZXBsYWNlKCdiZy0nLCAnJylcbiAgICB2YXIgJHNpZGViYXIgICAgICA9ICQoJy5tYWluLXNpZGViYXInKVxuICAgIHNpZGViYXJfc2tpbnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkc2lkZWJhci5hZGRDbGFzcyhzaWRlYmFyX2NsYXNzKVxuICB9KSlcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkxpZ2h0IFNpZGViYXIgVmFyaWFudHM8L2g2PicpXG4gIHZhciAkc2lkZWJhcl92YXJpYW50c19saWdodCA9ICQoJzxkaXYgLz4nLCB7XG4gICAgJ2NsYXNzJzogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfdmFyaWFudHNfbGlnaHQpXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhzaWRlYmFyX2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciAgICAgICAgID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIHNpZGViYXJfY2xhc3MgPSAnc2lkZWJhci1saWdodC0nICsgY29sb3IucmVwbGFjZSgnYmctJywgJycpXG4gICAgdmFyICRzaWRlYmFyICAgICAgPSAkKCcubWFpbi1zaWRlYmFyJylcbiAgICBzaWRlYmFyX3NraW5zLm1hcChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJHNpZGViYXIucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICB9KVxuXG4gICAgJHNpZGViYXIuYWRkQ2xhc3Moc2lkZWJhcl9jbGFzcylcbiAgfSkpXG5cbiAgdmFyIGxvZ29fc2tpbnMgPSBuYXZiYXJfYWxsX2NvbG9yc1xuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkJyYW5kIExvZ28gVmFyaWFudHM8L2g2PicpXG4gIHZhciAkbG9nb192YXJpYW50cyA9ICQoJzxkaXYgLz4nLCB7XG4gICAgJ2NsYXNzJzogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGxvZ29fdmFyaWFudHMpXG4gIHZhciAkY2xlYXJfYnRuID0gJCgnPGEgLz4nLCB7XG4gICAgaHJlZjogJ2phdmFzY3JpcHQ6dm9pZCgwKSdcbiAgfSkudGV4dCgnY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRsb2dvID0gJCgnLmJyYW5kLWxpbmsnKVxuICAgIGxvZ29fc2tpbnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkbG9nby5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhsb2dvX3NraW5zLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyICRsb2dvID0gJCgnLmJyYW5kLWxpbmsnKVxuICAgIGxvZ29fc2tpbnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkbG9nby5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG4gICAgJGxvZ28uYWRkQ2xhc3MoY29sb3IpXG4gIH0pLmFwcGVuZCgkY2xlYXJfYnRuKSlcblxuICBmdW5jdGlvbiBjcmVhdGVTa2luQmxvY2soY29sb3JzLCBjYWxsYmFjaykge1xuICAgIHZhciAkYmxvY2sgPSAkKCc8ZGl2IC8+Jywge1xuICAgICAgJ2NsYXNzJzogJ2QtZmxleCBmbGV4LXdyYXAgbWItMydcbiAgICB9KVxuXG4gICAgY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHZhciAkY29sb3IgPSAkKCc8ZGl2IC8+Jywge1xuICAgICAgICAnY2xhc3MnOiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0JyA/IGNvbG9yLmpvaW4oJyAnKSA6IGNvbG9yKS5yZXBsYWNlKCduYXZiYXItJywgJ2JnLScpLnJlcGxhY2UoJ2FjY2VudC0nLCAnYmctJykgKyAnIGVsZXZhdGlvbi0yJ1xuICAgICAgfSlcblxuICAgICAgJGJsb2NrLmFwcGVuZCgkY29sb3IpXG5cbiAgICAgICRjb2xvci5kYXRhKCdjb2xvcicsIGNvbG9yKVxuXG4gICAgICAkY29sb3IuY3NzKHtcbiAgICAgICAgd2lkdGggICAgICAgOiAnNDBweCcsXG4gICAgICAgIGhlaWdodCAgICAgIDogJzIwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQgOiAxMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgb3BhY2l0eSAgICAgOiAwLjgsXG4gICAgICAgIGN1cnNvciAgICAgIDogJ3BvaW50ZXInXG4gICAgICB9KVxuXG4gICAgICAkY29sb3IuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7IG9wYWNpdHk6IDEgfSkucmVtb3ZlQ2xhc3MoJ2VsZXZhdGlvbi0yJykuYWRkQ2xhc3MoJ2VsZXZhdGlvbi00JylcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoeyBvcGFjaXR5OiAwLjggfSkucmVtb3ZlQ2xhc3MoJ2VsZXZhdGlvbi00JykuYWRkQ2xhc3MoJ2VsZXZhdGlvbi0yJylcbiAgICAgIH0pXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAkY29sb3Iub24oJ2NsaWNrJywgY2FsbGJhY2spXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAkYmxvY2tcbiAgfVxuXG4gICQoJy5wcm9kdWN0LWltYWdlLXRodW1iJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaW1hZ2VfZWxlbWVudCA9ICQodGhpcykuZmluZCgnaW1nJyk7XG4gICAgJCgnLnByb2R1Y3QtaW1hZ2UnKS5wcm9wKCdzcmMnLCAkKGltYWdlX2VsZW1lbnQpLmF0dHIoJ3NyYycpKVxuICAgICQoJy5wcm9kdWN0LWltYWdlLXRodW1iLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG59KShqUXVlcnkpXG4iLCJjb25zdCB7XG4gICAgZGVmYXVsdDogYXhpb3Ncbn0gPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCB7XG4gICAgZGVmYXVsdHNEZWVwXG59ID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuZnVuY3Rpb24gcG9wdXBDZW50ZXIodXJsLCB0aXRsZSwgdywgaCkge1xuICAgIC8vIEZpeGVzIGR1YWwtc2NyZWVuIHBvc2l0aW9uIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XG4gICAgY29uc3QgZHVhbFNjcmVlbkxlZnQgPVxuICAgICAgICB3aW5kb3cuc2NyZWVuTGVmdCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiB3aW5kb3cuc2NyZWVuWDtcbiAgICBjb25zdCBkdWFsU2NyZWVuVG9wID1cbiAgICAgICAgd2luZG93LnNjcmVlblRvcCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggP1xuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA6XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6XG4gICAgICAgIHNjcmVlbi53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgP1xuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID9cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6XG4gICAgICAgIHNjcmVlbi5oZWlnaHQ7XG4gICAgY29uc3Qgc3lzdGVtWm9vbSA9IHdpZHRoIC8gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoO1xuICAgIGNvbnN0IGxlZnQgPSAod2lkdGggLSB3KSAvIDIgLyBzeXN0ZW1ab29tICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgY29uc3QgdG9wID0gKGhlaWdodCAtIGgpIC8gMiAvIHN5c3RlbVpvb20gKyBkdWFsU2NyZWVuVG9wO1xuICAgIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBgc2Nyb2xsYmFycz15ZXMsIHdpZHRoPSR7dyAvIHN5c3RlbVpvb219LCBoZWlnaHQ9JHtoIC9cbiAgICAgIHN5c3RlbVpvb219LCB0b3A9JHt0b3B9LGxlZnQ9JHtsZWZ0fWBcbiAgICApO1xuICAgIGlmICh3aW5kb3cuZm9jdXMpIG5ld1dpbmRvdy5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBzd2FsX2FsZXJ0KGFsZXJ0X2ljb24sIG1zZykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIGljb246IGFsZXJ0X2ljb24sXG4gICAgICAgIHRleHQ6IG1zZ1xuICAgIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5kcm9waWZ5XCIpLmRyb3BpZnkoKTtcbiAgICAkKCcuanMtZXhhbXBsZS1iYXNpYy1zaW5nbGUnKS5zZWxlY3QyKCk7XG5cbiAgICAkKCcuYmFsYW5jZV90YWJsZScpLnJlbW92ZUF0dHIoJ3dpZHRoJykuRGF0YVRhYmxlKHtcbiAgICAgICAgZG9tOiAnQmZydGlwJyxcbiAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICAgIFswLCBcImRlc2NcIl1cbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAnY29weScsICdjc3YnLCAnZXhjZWwnLCAncGRmJywgJ3ByaW50J1xuICAgICAgICBdXG4gICAgfSk7XG59KTtcblxuKGZ1bmN0aW9uICgkKSB7XG4gICAgJChcImJvZHlcIilcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuYnRuX3BhdGllbnRfcHJpbnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgcG9wdXBDZW50ZXIoaHJlZiwgXCJQYXRpZW50IEludm9pY2VcIiwgODAwLCA3MDApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5idG5fYmFyY29kZV9zaG93XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIHBvcHVwQ2VudGVyKGhyZWYsIFwiUGF0aWVudCBJbnZvaWNlXCIsIDgwMCwgNzAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuYnRuX3ZpZXdfcmVwb3J0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIC8vIHBvcHVwQ2VudGVyKGhyZWYsIFwiUGF0aWVudCBJbnZvaWNlXCIsIDgwMCwgNzAwKTtcbiAgICAgICAgICAgIHN3YWxfYWxlcnQoXCJ3YXJuaW5nXCIsIFwiZGV2ZWxvcG1lbnQgcHJvZ3Jlc3NcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLmJ0bl91cGRhdGVfc3RhdHVzXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICQoXCIjcGF0aWVudF9yZXBvcnRfc3RhdHVzX2Zvcm1cIikuYXR0cihcImFjdGlvblwiLCBocmVmKTtcbiAgICAgICAgICAgICQoXCIjY2hhbmdlU3RhdHVzTW9kYWxDZW50ZXJcIikubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5idG5fYXNzaXN0YW50X3NpZ25hdHVyZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRG8geW91IHdhbnQgdG8gc2lnbmF0dXJlIHRoaXMgcmVwb3J0P1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGBDb25maXJtYFxuICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0KGhyZWYsIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YWxfYWxlcnQocmVzRGF0YS5pY29uLCByZXNEYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuYnRuX2hlYWRfc2lnbmF0dXJlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEbyB5b3Ugd2FudCB0byBzaWduYXR1cmUgdGhpcyByZXBvcnQ/XCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogYENvbmZpcm1gXG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QoaHJlZiwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbF9hbGVydChyZXNEYXRhLmljb24sIHJlc0RhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJzdWJtaXRcIiwgXCIjcGF0aWVudF9yZXBvcnRfc3RhdHVzX2Zvcm1cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlU3RhdHVzTW9kYWxDZW50ZXIgPSAkKFwiI2NoYW5nZVN0YXR1c01vZGFsQ2VudGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gJCh0aGlzKS5hdHRyKFwiYWN0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdChhY3Rpb24sIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3RhdHVzTW9kYWxDZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnN0YXR1c19zdWJtaXRfYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTdGF0dXNNb2RhbENlbnRlci5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJzdWJtaXRcIiwgXCIjc2l0ZV9zZXR0aW5nc19mb3JtXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBtb2RhbCA9ICQoXCIjc2l0ZVNldHRpbmdNb2RlbFwiKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSAkKFwiI3VybFwiKS52YWwoKTtcbiAgICAgICAgICAgIC8vIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIHZhciBhcHBfbmFtZSA9ICQoXCIjYXBwX25hbWVcIikudmFsKCk7XG4gICAgICAgICAgICB2YXIgYXBwX25hbWVfc2hvcnQgPSAkKFwiI2FwcF9uYW1lX3Nob3J0XCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGFwcF9lbWFpbCA9ICQoXCIjYXBwX2VtYWlsXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGFwcF91cmwgPSAkKFwiI2FwcF91cmxcIikudmFsKCk7XG4gICAgICAgICAgICB2YXIgZm9vdGVyX3RleHQgPSAkKFwiI2Zvb3Rlcl90ZXh0XCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGNvbXBhbnlfYWRkcmVzcyA9ICQoXCIjY29tcGFueV9hZGRyZXNzXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGNvbXBhbnlfZGV0YWlscyA9ICQoXCIjY29tcGFueV9kZXRhaWxzXCIpLnZhbCgpO1xuXG4gICAgICAgICAgICB2YXIgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwX2xvZ29cIik7XG4gICAgICAgICAgICB2YXIgZmFiaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmFiaWNvblwiKTtcblxuXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FwcF9sb2dvJywgbG9nby5maWxlc1swXSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZhYmljb24nLCBmYWJpY29uLmZpbGVzWzBdKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXBwX25hbWUnLCBhcHBfbmFtZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FwcF9uYW1lX3Nob3J0JywgYXBwX25hbWVfc2hvcnQpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhcHBfZW1haWwnLCBhcHBfZW1haWwpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhcHBfdXJsJywgYXBwX3VybCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Zvb3Rlcl90ZXh0JywgZm9vdGVyX3RleHQpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21wYW55X2FkZHJlc3MnLCBjb21wYW55X2FkZHJlc3MpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21wYW55X2RldGFpbHMnLCBjb21wYW55X2RldGFpbHMpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGEuc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsIFwiLnN0YXR1cy1jaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBtZW1iZXJJZCA9ICQodGhpcykuYXR0cignZGF0YS1rZXknKTtcbiAgICAgICAgICAgIHZhciByb3V0ZSA9ICQoJyNzdGF0dXNfdXBkYXRlX3JvdXRlJykudmFsKCk7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRG8geW91IHJlYWxseSB3YW50IHRvIGNoYW5nZSBzdGF0dXM/XCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogYENvbmZpcm1gXG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogbWVtYmVySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdfdG9rZW4nOiAkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTdGF0dXMgY2hhbmdlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oXCJjaGFuZ2VcIiwgXCIjc3RhdHVzLWNoYW5nZS10cmFuc2VjdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHRySWQgPSAkKHRoaXMpLmRhdGEoJ2tleScpO1xuICAgICAgICAgICAgdmFyIHJvdXRlID0gJCgnI3N0YXR1c191cGRhdGVfcm91dGVfdHJhbnNlY3Rpb24nKS52YWwoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRvIHlvdSByZWFsbHkgd2FudCB0byBjaGFuZ2Ugc3RhdHVzP1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGBDb25maXJtYFxuICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHRySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdfdG9rZW4nOiAkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTdGF0dXMgY2hhbmdlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNoYW5nZVwiLCBcIi5zdGF0dXMtY2hhbmdlLWFnZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICB2YXIgdHJJZCA9ICQodGhpcykuZGF0YSgna2V5Jyk7XG4gICAgICAgICAgICB2YXIgcm91dGUgPSAkKCcjc3RhdHVzX3VwZGF0ZV9yb3V0ZV9hZ2VudCcpLnZhbCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRG8geW91IHJlYWxseSB3YW50IHRvIGNoYW5nZSBzdGF0dXM/XCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogYENvbmZpcm1gXG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogdHJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJzogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ190b2tlbic6ICQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlN0YXR1cyBjaGFuZ2VkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjaGFuZ2VcIiwgXCIuY2hlY2tib3gtYWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGlzRWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgYWxsSXRlbSA9ICQoXCIuY2hlY2tib3gtYWxsXCIpO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKFwiLmNoZWNrYm94LWl0ZW1cIik7XG4gICAgICAgICAgICBpZiAodGhpc0VsZW1lbnQuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBhbGxJdGVtLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFsbEl0ZW0ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsIFwiLmNoZWNrYm94LWl0ZW1cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRib2R5SXRlbXMgPSAkKHRoaXMpLmNsb3Nlc3QoJ3Rib2R5JykuZmluZChcIi5jaGVja2JveC1pdGVtXCIpO1xuICAgICAgICAgICAgdmFyIGNoZWNrZWRJdGVtID0gJCh0aGlzKS5jbG9zZXN0KCd0Ym9keScpLmZpbmQoXCIuY2hlY2tib3gtaXRlbTpjaGVja2VkXCIpO1xuICAgICAgICAgICAgdmFyIGFsbEl0ZW0gPSAkKFwiLmNoZWNrYm94LWFsbFwiKTtcbiAgICAgICAgICAgIGlmICh0Ym9keUl0ZW1zLmxlbmd0aCA9PT0gY2hlY2tlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYWxsSXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsbEl0ZW0ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsIFwiLmNoZWNrYm94LWl0ZW0sIC5jaGVja2JveC1hbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWRJdGVtID0gJCgndGJvZHknKS5maW5kKFwiLmNoZWNrYm94LWl0ZW06Y2hlY2tlZFwiKTtcbiAgICAgICAgICAgIHZhciBnZW5lcmF0ZSA9ICQoXCIuZ2VuZXJhdGUtZW1haWxcIik7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZEl0ZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuZ2VuZXJhdGUtZW1haWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWRJdGVtID0gJCgndGJvZHknKS5maW5kKFwiLmNoZWNrYm94LWl0ZW06Y2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkSXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBjaGVja2VkSXRlbS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBlbWFpbFN1Ym1pdEZvcm0gPSAkKFwiI2VtYWlsU3VibWl0Rm9ybVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGVyID0gJChcIi5sb2FkZXJcIik7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnNob3coKTtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYWRtaW4vbWVtYmVyL2dlbmVyYXRlLWVtYWlsJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyczogbWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNEYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxTdWJtaXRGb3JtLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXNEYXRhLmZvcm1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFN1Ym1pdEZvcm0ubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdNZW1iZXJzIG5vdCBmb3VuZCwgVHJ5IEFnYWluIScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BsZWFzZSBzZWxlY3QgaXRlbSBmaXJzdCcsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXBhbnktc2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hZG1pbi9jb21wYW55LXNlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogb3B0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSByZXNwb25zZS5kYXRhLmVtYWlsO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZW1haWwnKS52YWwocmVzRGF0YSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VtYWlsU2VuZFRvQ29tcGFueScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2hhbmdlJywgXCIjZGlzdHJpY3RfcGVybWFuZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cGF6aWxsYSA9IEpTT04ucGFyc2UoJChcIiN1cGF6aWxsYVwiKS52YWwoKSk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfZGlzdHJpY3QgPSAkKHRoaXMpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHVwYXppbGxhX25hbWUgPSAnJztcbiAgICAgICAgICAgIHVwYXppbGxhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGlzdHJpY3RfaWQgPT0gc2VsZWN0ZWRfZGlzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBhemlsbGFfbmFtZSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBlbGVtZW50LmlkICsgJ1wiPicgKyBlbGVtZW50Lm5hbWUgKyAnPC9vcHRpb24+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3BvbGljZV9zdGF0aW9uX3Blcm1hbmVudCcpLmh0bWwodXBhemlsbGFfbmFtZSk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBcIiNkaXN0cmljdF9wcmVzZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cGF6aWxsYSA9IEpTT04ucGFyc2UoJChcIiN1cGF6aWxsYVwiKS52YWwoKSk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfZGlzdHJpY3QgPSAkKHRoaXMpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHVwYXppbGxhX25hbWUgPSAnJztcblxuICAgICAgICAgICAgdXBhemlsbGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kaXN0cmljdF9pZCA9PSBzZWxlY3RlZF9kaXN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICB1cGF6aWxsYV9uYW1lICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGVsZW1lbnQuaWQgKyAnXCI+JyArIGVsZW1lbnQubmFtZSArICc8L29wdGlvbj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjcG9saWNlX3N0YXRpb25fcHJlc2VudCcpLmh0bWwodXBhemlsbGFfbmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2hhbmdlJywgJyNzYW1lX2FzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZpbGxhZ2UgPSAkKFwiI3ZpbGxhZ2VfcHJlc2VudFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBwb3N0ID0gJChcIiNwb3N0X29mZmljZV9wcmVzZW50XCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGRpc3RyaWN0ID0gJChcIiNkaXN0cmljdF9wcmVzZW50XCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHBvbGljZXN0YXRpb24gPSAkKFwiI3BvbGljZV9zdGF0aW9uX3ByZXNlbnRcIikuaHRtbCgpO1xuXG4gICAgICAgICAgICAkKFwiI3ZpbGxhZ2VfcGVybWFuZW50XCIpLnZhbCh2aWxsYWdlKTtcbiAgICAgICAgICAgICQoXCIjcG9zdF9vZmZpY2VfcGVybWFuZW50XCIpLnZhbChwb3N0KTtcbiAgICAgICAgICAgICQoXCIjZGlzdHJpY3RfcGVybWFuZW50XCIpLnZhbChkaXN0cmljdCk7XG4gICAgICAgICAgICAkKFwiI3BvbGljZV9zdGF0aW9uX3Blcm1hbmVudFwiKS5odG1sKHBvbGljZXN0YXRpb24pO1xuICAgICAgICAgICAgJChcIiNwb2xpY2Vfc3RhdGlvbl9wZXJtYW5lbnRcIikudmFsKCQoXCIjcG9saWNlX3N0YXRpb25fcGVybWFuZW50XCIpLnZhbCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwia2V5dXBcIiwgJyNwaG9uX3ZhbGlkYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSAvXlxcZHswLDExfShcXC5cXGR7MCwyfSk/JC8udGVzdCh0aGlzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGlucHV0IVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsLnN1YnN0cmluZygwLCB2YWwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImtleXVwXCIsICcuZXhhbV9ncmFkZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZCA9IC9eXFxkezAsMn0oXFwuXFxkezAsMn0pPyQvLnRlc3QodGhpcy52YWx1ZSksXG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgaW5wdXQhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWwuc3Vic3RyaW5nKDAsIHZhbC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBcIiNwb2xpY2VfY2xlYXJhbmNlX2lzc3VlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpc3N1ZV9kYXRlID0gbmV3IERhdGUoJChcIiNwb2xpY2VfY2xlYXJhbmNlX2lzc3VlXCIpLnZhbCgpKTtcbiAgICAgICAgICAgIHZhciBuZXh0RGF0ZSA9IG5ldyBEYXRlKGlzc3VlX2RhdGUuc2V0RGF0ZShpc3N1ZV9kYXRlLmdldERhdGUoKSArIDE4MCkpO1xuICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IE1hdGguYWJzKHRvZGF5IC0gbmV4dERhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBNYXRoLmNlaWwodGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cbiAgICAgICAgICAgIG5leHREYXRlID0gYCR7bmV4dERhdGUuZ2V0RGF0ZSgpfSAke25leHREYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pfSAke25leHREYXRlLmdldEZ1bGxZZWFyKCl9YDtcblxuICAgICAgICAgICAgdmFyIGZpZWxkcyA9IGA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNsZWFyYW5jZV9leHBpcmVfZGF0ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkV4cGlyZSBkYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicG9saWNlX2NsZWFyYW5jZV9leHBpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2xlYXJhbmNlX2V4cGlyZV9kYXRlXCIgdmFsdWU9XCIke25leHREYXRlfVwiIHJlYWRvbmx5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2xlYXJhbmNlX3JlbWFpbmluZ1wiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlJlbWFpbmluZyBkYXk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwb2xpc2NlX2NsZWFyYW5jZV9yZW1hbmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IFwicG9saWNlX2NsZWFyYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtkYXl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgICQoXCIjcG9saWNlX2NsZWFyYW5jXCIpLmh0bWwoZmllbGRzKTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oXCJrZXl1cFwiLCAnLnRyYW5zZWN0aW9uX2Ftb3VudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZCA9IC9eXFxkezAsMjB9KFxcLlxcZHswLDIwfSk/JC8udGVzdCh0aGlzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWwuc3Vic3RyaW5nKDAsIHZhbC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwia2V5dXBcIiwgJy5waG9uX3ZhbGlkYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSAvXlxcZHswLDExfShcXC5cXGR7MCwyfSk/JC8udGVzdCh0aGlzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGlucHV0IVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsLnN1YnN0cmluZygwLCB2YWwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNoYW5nZVwiLCBcIiNwYXltZW50X3R5cGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAkdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGNoYW5nZSA9PSBcImJhbmtcIikge1xuICAgICAgICAgICAgICAgICR2YWx1ZSA9IGA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHJhbnNlY3Rpb25fb3JfYWNfbnVtYmVyXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+QWNjb3VudCBObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0cmFuc2VjdGlvbl9vcl9hY19udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidHJhbnNlY3Rpb25fb3JfYWNfbnVtYmVyXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFjY291bnQgbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtb2JpbGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5BY2NvdW50IGhvbGRlciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1vYmlsZVwiIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoY2hhbmdlID09IFwiYmthc2hcIikgfHwgKGNoYW5nZSA9PSBcInJva2V0XCIpIHx8IChjaGFuZ2UgPT0gXCJuYWdhZFwiKSkge1xuICAgICAgICAgICAgICAgICR2YWx1ZSA9IGA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRyYW5zZWN0aW9uX29yX2FjX251bWJlclwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlRyYW5zZWN0aW9uIElEPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0cmFuc2VjdGlvbl9vcl9hY19udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRyYW5zZWN0aW9uX29yX2FjX251bWJlclwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJUcmFuc2VjdGlvbiBudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vYmlsZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPk1vYmlsZSBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPis4ODwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcGhvbl92YWxpZGF0aW9uXCIgbmFtZT1cIm1vYmlsZVwiIGlkPVwibW9iaWxlXCIgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb2JpbGUgbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFuZ2UgPT0gXCJjYXNoXCIpIHtcbiAgICAgICAgICAgICAgICAkdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChcIiNhY2NvdW50X3Bob25lX2ZlaWxkXCIpLmh0bWwoJHZhbHVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuYWRkLW1vcmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhXCIpO1xuICAgICAgICAgICAgdmFyIGV4cGFuc2VNb2RhbCA9ICQoXCIjZXhwZW5zZU1vZGFsXCIpO1xuICAgICAgICAgICAgdmFyIF90b2tlbiA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICB2YXIgYWRkQWNjb3VudCA9ICQoXCIjYWRkX2FjY291bnRcIikudmFsKCk7XG4gICAgICAgICAgICB2YXIgYWRkRXhwZW5zZVR5cGUgPSAkKFwiI2FkZF9leHBlbnNlX2lkXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHBheW1lbnRNZXRob2QgPSAkKFwiI3BheW1lbnRfbWV0aG9kXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHBheWVyID0gJChcIiNwYXllclwiKS52YWwoKTtcblxuICAgICAgICAgICAgdmFyIG1vZGFsQ29udGVudDtcbiAgICAgICAgICAgIHZhciBtb2RhbFRpdGxlO1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNSb3V0ZTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09IFwiYWRkLWFjY291bnRcIikge1xuICAgICAgICAgICAgICAgIG1vZGFsQ29udGVudCA9IGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiBpZD1cInRva2VuXCIgdmFsdWU9XCIke190b2tlbn1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWNjb3VudF90aXRsZVwiPkFjY291bnQgVGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhY2NvdW50X3RpdGxlXCIgaWQ9XCJhY2NvdW50X3RpdGxlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDwhLS0gZm9ybS1ncm91cCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm9wZW5pbmdfZGF0ZVwiPk9wZW5pbmcgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cIm9wZW5pbmdfZGF0ZVwiIGlkPVwib3BlbmluZ19kYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDwhLS0gZm9ybS1ncm91cCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFjY291bnRfbnVtYmVyXCI+QWNjb3VudCBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhY2NvdW50X251bWJlclwiIGlkPVwiYWNjb3VudF9udW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gPCEtLSBmb3JtLWdyb3VwIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwib3BlbmluZ19iYWxhbmNlXCI+T3BlbmluZyBiYWxhbmNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib3BlbmluZ19iYWxhbmNlXCIgaWQ9XCJvcGVuaW5nX2JhbGFuY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gPCEtLSBmb3JtLWdyb3VwIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm90ZVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIj5FeHRyYSBOb3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibm90ZVwiIGlkPVwibm90ZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIkFkZCBOZXcgQWNjb3VudFwiO1xuICAgICAgICAgICAgICAgIGR5bmFtaWNSb3V0ZSA9IGFkZEFjY291bnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgPT09IFwiZXhwZW5zZS10eXBlXCIpIHtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRlbnQgPSBgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgaWQ9XCJ0b2tlblwiIHZhbHVlPVwiJHtfdG9rZW59XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4cGFuc2VfbmFtZVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZXhwYW5zZV9uYW1lXCIgaWQ9XCJleHBhbnNlX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhwYW5zZV90eXBlXCIgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiPlRyYW5zZWN0aW9uIFR5cGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImV4cGFuc2VfdHlwZVwiIGlkPVwiZXhwYW5zZV90eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmNvbWVcIj5JbmNvbWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImV4cGVuc2VcIj5FeHBlbnNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb25hdGlvblwiPkRvbmF0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdWJzY3JpcHRpb25cIj5TdWJzY3JpcHRpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIkFkZCBUcmFuc2VjdGlvbiB0eXBlXCI7XG4gICAgICAgICAgICAgICAgZHluYW1pY1JvdXRlID0gYWRkRXhwZW5zZVR5cGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgPT09IFwicGF5bWVudC1tZXRob2RcIikge1xuICAgICAgICAgICAgICAgIG1vZGFsQ29udGVudCA9IGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiBpZD1cInRva2VuXCIgdmFsdWU9XCIke190b2tlbn1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlY2lwaWVudC1uYW1lXCIgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiPlBheW1lbnQgTWV0aG9kOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXltZW50X25hbWVcIiBpZD1cInJlY2lwaWVudC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIkFkZCBQYXltZW50XCI7XG4gICAgICAgICAgICAgICAgZHluYW1pY1JvdXRlID0gcGF5bWVudE1ldGhvZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9PT0gXCJhZGQtcGF5ZXJcIikge1xuICAgICAgICAgICAgICAgIG1vZGFsQ29udGVudCA9IGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiBpZD1cInRva2VuXCIgdmFsdWU9XCIke190b2tlbn1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCI+UGF5ZXIgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIGlkPVwicGF5ZXJfbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCI+UGhvbmU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4rODg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwaG9uX3ZhbGlkYXRpb25cIiBpZD1cInBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiQWRkIFBheWVyXCI7XG4gICAgICAgICAgICAgICAgZHluYW1pY1JvdXRlID0gcGF5ZXI7XG4gICAgICAgICAgICB9IGVsc2Uge31cbiAgICAgICAgICAgIGV4cGFuc2VNb2RhbC5maW5kKCcuZXhwYW5zZS1tb2RhbC1mb3JtJykuaHRtbChtb2RhbENvbnRlbnQpO1xuICAgICAgICAgICAgZXhwYW5zZU1vZGFsLmZpbmQoJy5leHBhbnNlLW1vZGFsLWZvcm0nKS5hdHRyKCdhY3Rpb24nLCBkeW5hbWljUm91dGUpO1xuICAgICAgICAgICAgZXhwYW5zZU1vZGFsLmZpbmQoJyNleHBlbnNlTW9kYWxMYWJlbCcpLnRleHQobW9kYWxUaXRsZSk7XG4gICAgICAgICAgICBleHBhbnNlTW9kYWwuZmluZCgnI3Rva2VuJykudmFsKF90b2tlbik7XG4gICAgICAgICAgICBleHBhbnNlTW9kYWwubW9kYWwoXCJzaG93XCIpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcInN1Ym1pdFwiLCBcIi5leHBhbnNlLW1vZGFsLWZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBleHBlbnNlTW9kYWwgPSAkKFwiI2V4cGVuc2VNb2RhbFwiKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSAkKHRoaXMpLmF0dHIoJ2FjdGlvbicpO1xuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcblxuICAgICAgICAgICAgdmFyIGV4cGVuc2VfaWQgPSAkKFwiI2V4cGVuc2VfaWRcIik7XG4gICAgICAgICAgICB2YXIgcGF5bWVudF9tZXRob2QgPSAkKFwiI3BheW1lbnRfbWV0aG9kXCIpO1xuICAgICAgICAgICAgdmFyIHBheWVyID0gJChcIiNwYXllclwiKTtcbiAgICAgICAgICAgIHZhciBhY2NvdW50X2lkID0gJChcIiNhY2NvdW50X2lkXCIpO1xuXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gJChcIi5qcy1leGFtcGxlLWJhc2ljLXNpbmdsZVwiKS5hdHRyKFwiZGF0YS1zZWxlY3QyLWlkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29tcG9uZW50KTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdChhY3Rpb24sIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGV4cGVuc2VfaWQgPT0gXCJleHBlbnNlX2lkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGV4cGVuc2VfaWQuYXBwZW5kKCQoYDxvcHRpb24gdmFsdWU9XCIke3Jlcy5kYXRhLnZhbHVlfVwiIHNlbGVjdGVkPiR7cmVzLmRhdGEudmFsdWV9PC9vcHRpb24+YCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHBheW1lbnRfbWV0aG9kID09IFwicGF5bWVudF9tZXRob2RcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGF5bWVudF9tZXRob2QuYXBwZW5kKCQoYDxvcHRpb24gdmFsdWU9XCIke3Jlcy5kYXRhLnZhbHVlfVwiIHNlbGVjdGVkPiR7cmVzLmRhdGEudmFsdWV9PC9vcHRpb24+YCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHBheWVyID09IFwicGF5ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGF5ZXIuYXBwZW5kKCQoYDxvcHRpb24gdmFsdWU9XCIke3Jlcy5kYXRhLnZhbHVlfVwiIHNlbGVjdGVkPiR7cmVzLmRhdGEudmFsdWV9PC9vcHRpb24+YCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGFjY291bnRfaWQgPT0gXCJhY2NvdW50X2lkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFjY291bnRfaWQuYXBwZW5kKCQoYDxvcHRpb24gdmFsdWU9XCIke3Jlcy5kYXRhLnZhbHVlfVwiIHNlbGVjdGVkPiR7cmVzLmRhdGEudmFsdWV9PC9vcHRpb24+YCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGV4cGVuc2VNb2RhbC5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwia2V5dXBcIiwgJy5iYW5rYWNjb3VudF9udW1iZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSAvXlxcZHswLDE1fShcXC5cXGR7MCwyfSk/JC8udGVzdCh0aGlzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGlucHV0IVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsLnN1YnN0cmluZygwLCB2YWwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogUGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLlxuICovXG4oZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDaGVja2JveCB0cmVlIGZvciBwZXJtaXNzaW9uIHNlbGVjdGluZ1xuICAgICAqL1xuICAgIGxldCBwZXJtaXNzaW9uVHJlZSA9ICQoXCIucGVybWlzc2lvbi10cmVlIDpjaGVja2JveFwiKTtcblxuICAgIHBlcm1pc3Npb25UcmVlLm9uKFwiY2xpY2sgY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcInVsXCIpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjaGVja2VkXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKFwiY2hlY2tlZFwiKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHBlcm1pc3Npb25UcmVlLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwidWxcIilcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cihcImNoZWNrZWRcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHN1Ym1pdCBpbnB1dHMgaW4gdGhlIGdpdmVuIGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBzdWJtaXQgaW5wdXRzIGluIGEgZ2l2ZW4gZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbmFibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWxsIHN1Ym1pdCBidXR0b25zIG9uY2UgY2xpY2tlZFxuICAgICAqL1xuICAgICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbmZpcm1hdGlvbiB0byBhIGRlbGV0ZSBidXR0b24vZm9ybVxuICAgICAqL1xuICAgICQoXCJib2R5XCIpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiYVtkYXRhLW1ldGhvZD1kZWxldGVdXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGJ1dHRvbi5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkNvbmZpcm0gRGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGhyZWYpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogcmVzLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsb3Nlc3QoXCJ0clwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiByZXMuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwic3VibWl0XCIsIFwiZm9ybVtuYW1lPWNvbmZpcm0taXRlbV1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjbGlja1wiLCBcImFbbmFtZT1jb25maXJtLWl0ZW1dXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBhbiAnYXJlIHlvdSBzdXJlJyBwb3AtdXAgdG8gYW55IGJ1dHRvbi9saW5rXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImluZm9cIixcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiB3aW5kb3cubG9jYXRpb24uYXNzaWduKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gUmVtZW1iZXIgdGFiIG9uIHBhZ2UgbG9hZFxuICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIGFbZGF0YS10b2dnbGU9XCJwaWxsXCJdJykub24oXG4gICAgICAgIFwic2hvd24uYnMudGFiXCIsXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgaGFzaCA9ICQoZS50YXJnZXQpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUgP1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGhhc2gpIDpcbiAgICAgICAgICAgICAgICAobG9jYXRpb24uaGFzaCA9IGhhc2gpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgJCgnLm5hdi1saW5rW2hyZWY9XCInICsgaGFzaCArICdcIl0nKS50YWIoXCJzaG93XCIpO1xuICAgIH1cblxuICAgIC8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbn0pKGpRdWVyeSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwic2VsZiIsImFkbWlubHRlIiwiQ29udHJvbFNpZGViYXIiLCIkIiwiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiZm4iLCJFdmVudCIsIkNPTExBUFNFRCIsIkVYUEFOREVEIiwiU2VsZWN0b3IiLCJDT05UUk9MX1NJREVCQVIiLCJDT05UUk9MX1NJREVCQVJfQ09OVEVOVCIsIkRBVEFfVE9HR0xFIiwiQ09OVEVOVCIsIkhFQURFUiIsIkZPT1RFUiIsIkNsYXNzTmFtZSIsIkNPTlRST0xfU0lERUJBUl9BTklNQVRFIiwiQ09OVFJPTF9TSURFQkFSX09QRU4iLCJDT05UUk9MX1NJREVCQVJfU0xJREUiLCJMQVlPVVRfRklYRUQiLCJOQVZCQVJfRklYRUQiLCJOQVZCQVJfU01fRklYRUQiLCJOQVZCQVJfTURfRklYRUQiLCJOQVZCQVJfTEdfRklYRUQiLCJOQVZCQVJfWExfRklYRUQiLCJGT09URVJfRklYRUQiLCJGT09URVJfU01fRklYRUQiLCJGT09URVJfTURfRklYRUQiLCJGT09URVJfTEdfRklYRUQiLCJGT09URVJfWExfRklYRUQiLCJEZWZhdWx0IiwiY29udHJvbHNpZGViYXJTbGlkZSIsInNjcm9sbGJhclRoZW1lIiwic2Nyb2xsYmFyQXV0b0hpZGUiLCJlbGVtZW50IiwiY29uZmlnIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiX2luaXQiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJjb2xsYXBzZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkZWxheSIsInF1ZXVlIiwiaGlkZSIsImRlcXVldWUiLCJjb2xsYXBzZWRFdmVudCIsInRyaWdnZXIiLCJzaG93IiwiZXhwYW5kZWRFdmVudCIsInRvZ2dsZSIsInNob3VsZENsb3NlIiwiaGFzQ2xhc3MiLCJfdGhpcyIsIl9maXhIZWlnaHQiLCJfZml4U2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwicmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0cyIsImRvY3VtZW50IiwiaGVpZ2h0IiwiaGVhZGVyIiwib3V0ZXJIZWlnaHQiLCJmb290ZXIiLCJwb3NpdGlvbnMiLCJib3R0b20iLCJNYXRoIiwiYWJzIiwic2Nyb2xsVG9wIiwidG9wIiwibmF2YmFyRml4ZWQiLCJmb290ZXJGaXhlZCIsImNzcyIsInNpZGViYXJIZWlnaHQiLCJvdmVybGF5U2Nyb2xsYmFycyIsImNsYXNzTmFtZSIsInNpemVBdXRvQ2FwYWJsZSIsInNjcm9sbGJhcnMiLCJhdXRvSGlkZSIsImNsaWNrU2Nyb2xsaW5nIiwiX2pRdWVyeUludGVyZmFjZSIsIm9wZXJhdGlvbiIsImVhY2giLCJkYXRhIiwiX29wdGlvbnMiLCJleHRlbmQiLCJFcnJvciIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbGwiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJqUXVlcnkiLCJMYXlvdXQiLCJNQUlOX1NJREVCQVIiLCJTSURFQkFSIiwiQlJBTkQiLCJDT05URU5UX0hFQURFUiIsIldSQVBQRVIiLCJDT05UUk9MX1NJREVCQVJfQlROIiwiUFVTSE1FTlVfQlROIiwiTE9HSU5fQk9YIiwiUkVHSVNURVJfQk9YIiwiSE9MRCIsIkNPTlRFTlRfRklYRUQiLCJTSURFQkFSX0ZPQ1VTRUQiLCJMT0dJTl9QQUdFIiwiUkVHSVNURVJfUEFHRSIsIkNPTlRST0xfU0lERUJBUl9TTElERV9PUEVOIiwicGFuZWxBdXRvSGVpZ2h0IiwibG9naW5SZWdpc3RlckF1dG9IZWlnaHQiLCJmaXhMYXlvdXRIZWlnaHQiLCJleHRyYSIsImNvbnRyb2xfc2lkZWJhciIsImxlbmd0aCIsInNpZGViYXIiLCJtYXgiLCJfbWF4Iiwib2Zmc2V0IiwiX2lzRm9vdGVyRml4ZWQiLCJwYXJzZUZsb2F0IiwiZml4TG9naW5SZWdpc3RlckhlaWdodCIsImJveF9oZWlnaHQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJudW1iZXJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJQdXNoTWVudSIsIlNIT1dOIiwiYXV0b0NvbGxhcHNlU2l6ZSIsImVuYWJsZVJlbWVtYmVyIiwibm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQiLCJUT0dHTEVfQlVUVE9OIiwiU0lERUJBUl9NSU5JIiwiU0lERUJBUl9DT0xMQVBTRUQiLCJCT0RZIiwiT1ZFUkxBWSIsIk9QRU4iLCJDTE9TRUQiLCJvcHRpb25zIiwiX2FkZE92ZXJsYXkiLCJleHBhbmQiLCJ3aWR0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzaG93bkV2ZW50IiwiYXV0b0NvbGxhcHNlIiwicmVtZW1iZXIiLCJ0b2dnbGVTdGF0ZSIsImdldEl0ZW0iLCJfdGhpczIiLCJvdmVybGF5IiwiaWQiLCJhcHBlbmQiLCJtYXRjaCIsImJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiVHJlZXZpZXciLCJTRUxFQ1RFRCIsIkxPQURfREFUQV9BUEkiLCJMSSIsIkxJTksiLCJUUkVFVklFV19NRU5VIiwiREFUQV9XSURHRVQiLCJhbmltYXRpb25TcGVlZCIsImFjY29yZGlvbiIsImV4cGFuZFNpZGViYXIiLCJzaWRlYmFyQnV0dG9uU2VsZWN0b3IiLCJpbml0IiwiX3NldHVwTGlzdGVuZXJzIiwidHJlZXZpZXdNZW51IiwicGFyZW50TGkiLCJvcGVuTWVudUxpIiwic2libGluZ3MiLCJmaXJzdCIsIm9wZW5UcmVldmlldyIsImZpbmQiLCJzdG9wIiwic2xpZGVEb3duIiwiX2V4cGFuZFNpZGViYXIiLCJzbGlkZVVwIiwiJHJlbGF0aXZlVGFyZ2V0IiwiJHBhcmVudCIsInBhcmVudCIsImlzIiwicGFyZW50cyIsImlzT3BlbiIsIl90aGlzMyIsIkRpcmVjdENoYXQiLCJUT0dHTEVEIiwiRElSRUNUX0NIQVQiLCJESVJFQ1RfQ0hBVF9PUEVOIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGVkRXZlbnQiLCJUb2RvTGlzdCIsIlRPRE9fTElTVF9ET05FIiwib25DaGVjayIsIml0ZW0iLCJvblVuQ2hlY2siLCJwcm9wIiwidW5DaGVjayIsImNoZWNrIiwidGhhdCIsInRhcmdldCIsIkNhcmRXaWRnZXQiLCJNQVhJTUlaRUQiLCJNSU5JTUlaRUQiLCJSRU1PVkVEIiwiQ0FSRCIsIkNPTExBUFNJTkciLCJFWFBBTkRJTkciLCJXQVNfQ09MTEFQU0VEIiwiREFUQV9SRU1PVkUiLCJEQVRBX0NPTExBUFNFIiwiREFUQV9NQVhJTUlaRSIsIkNBUkRfSEVBREVSIiwiQ0FSRF9CT0RZIiwiQ0FSRF9GT09URVIiLCJjb2xsYXBzZVRyaWdnZXIiLCJyZW1vdmVUcmlnZ2VyIiwibWF4aW1pemVUcmlnZ2VyIiwiY29sbGFwc2VJY29uIiwiZXhwYW5kSWNvbiIsIm1heGltaXplSWNvbiIsIm1pbmltaXplSWNvbiIsInNldHRpbmdzIiwiX3BhcmVudCIsIl9zZXR0aW5ncyIsImNoaWxkcmVuIiwiY29sbGFwc2VkIiwiZXhwYW5kZWQiLCJyZW1vdmUiLCJyZW1vdmVkIiwibWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsInN0eWxlIiwidG9nZ2xlTWF4aW1pemUiLCJjYXJkIiwiY2xpY2siLCJDYXJkUmVmcmVzaCIsIkxPQURFRCIsIk9WRVJMQVlfQURERUQiLCJPVkVSTEFZX1JFTU9WRUQiLCJEQVRBX1JFRlJFU0giLCJzb3VyY2UiLCJzb3VyY2VTZWxlY3RvciIsInBhcmFtcyIsImNvbnRlbnQiLCJsb2FkSW5Db250ZW50IiwibG9hZE9uSW5pdCIsInJlc3BvbnNlVHlwZSIsIm92ZXJsYXlUZW1wbGF0ZSIsIm9uTG9hZFN0YXJ0Iiwib25Mb2FkRG9uZSIsInJlc3BvbnNlIiwiX292ZXJsYXkiLCJsb2FkIiwiZ2V0IiwiaHRtbCIsIl9yZW1vdmVPdmVybGF5IiwiYmluZCIsImxvYWRlZEV2ZW50Iiwib3ZlcmxheUFkZGVkRXZlbnQiLCJvdmVybGF5UmVtb3ZlZEV2ZW50IiwicmVhZHkiLCJEcm9wZG93biIsIk5BVkJBUiIsIkRST1BET1dOX01FTlUiLCJEUk9QRE9XTl9NRU5VX0FDVElWRSIsIkRST1BET1dOX1RPR0dMRSIsIkRST1BET1dOX0hPVkVSIiwiRFJPUERPV05fUklHSFQiLCJ0b2dnbGVTdWJtZW51IiwibmV4dCIsImUiLCJmaXhQb3NpdGlvbiIsImVsbSIsIndpbmRvd1dpZHRoIiwidmlzaWJsZVBhcnQiLCJsZWZ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG9hc3RzIiwiSU5JVCIsIkNSRUFURUQiLCJDT05UQUlORVJfVE9QX1JJR0hUIiwiQ09OVEFJTkVSX1RPUF9MRUZUIiwiQ09OVEFJTkVSX0JPVFRPTV9SSUdIVCIsIkNPTlRBSU5FUl9CT1RUT01fTEVGVCIsIlRPUF9SSUdIVCIsIlRPUF9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJGQURFIiwiUG9zaXRpb24iLCJwb3NpdGlvbiIsImZpeGVkIiwiYXV0b2hpZGUiLCJhdXRvcmVtb3ZlIiwiZmFkZSIsImljb24iLCJpbWFnZSIsImltYWdlQWx0IiwiaW1hZ2VIZWlnaHQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY2xvc2UiLCJib2R5IiwiX3ByZXBhcmVDb250YWluZXIiLCJpbml0RXZlbnQiLCJjcmVhdGUiLCJ0b2FzdCIsInRvYXN0X2hlYWRlciIsInRvYXN0X2ltYWdlIiwiYXR0ciIsInRvYXN0X2Nsb3NlIiwiX2dldENvbnRhaW5lcklkIiwicHJlcGVuZCIsImNyZWF0ZWRFdmVudCIsInJlbW92ZWRFdmVudCIsImNvbnRhaW5lciIsInJlcGxhY2UiLCJvcHRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiUG9wcGVyIiwicmVxdWlyZSIsIlN3YWwiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCIkc2lkZWJhciIsIiRjb250YWluZXIiLCJuYXZiYXJfZGFya19za2lucyIsIm5hdmJhcl9saWdodF9za2lucyIsIiRub19ib3JkZXJfY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsIiRub19ib3JkZXJfY29udGFpbmVyIiwiJHRleHRfc21fYm9keV9jaGVja2JveCIsIiR0ZXh0X3NtX2JvZHlfY29udGFpbmVyIiwiJHRleHRfc21faGVhZGVyX2NoZWNrYm94IiwiJHRleHRfc21faGVhZGVyX2NvbnRhaW5lciIsIiR0ZXh0X3NtX3NpZGViYXJfY2hlY2tib3giLCIkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lciIsIiR0ZXh0X3NtX2Zvb3Rlcl9jaGVja2JveCIsIiR0ZXh0X3NtX2Zvb3Rlcl9jb250YWluZXIiLCIkZmxhdF9zaWRlYmFyX2NoZWNrYm94IiwiJGZsYXRfc2lkZWJhcl9jb250YWluZXIiLCIkbGVnYWN5X3NpZGViYXJfY2hlY2tib3giLCIkbGVnYWN5X3NpZGViYXJfY29udGFpbmVyIiwiJGNvbXBhY3Rfc2lkZWJhcl9jaGVja2JveCIsIiRjb21wYWN0X3NpZGViYXJfY29udGFpbmVyIiwiJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94IiwiJGNoaWxkX2luZGVudF9zaWRlYmFyX2NvbnRhaW5lciIsIiRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCIsIiRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIiLCIkdGV4dF9zbV9icmFuZF9jaGVja2JveCIsIiR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lciIsIiRuYXZiYXJfdmFyaWFudHMiLCJuYXZiYXJfYWxsX2NvbG9ycyIsImNvbmNhdCIsIiRuYXZiYXJfdmFyaWFudHNfY29sb3JzIiwiY3JlYXRlU2tpbkJsb2NrIiwiY29sb3IiLCIkbWFpbl9oZWFkZXIiLCJtYXAiLCJpbmRleE9mIiwic2lkZWJhcl9jb2xvcnMiLCJhY2NlbnRfY29sb3JzIiwic2lkZWJhcl9za2lucyIsIiRhY2NlbnRfdmFyaWFudHMiLCJhY2NlbnRfY2xhc3MiLCIkYm9keSIsInNraW4iLCIkc2lkZWJhcl92YXJpYW50c19kYXJrIiwic2lkZWJhcl9jbGFzcyIsIiRzaWRlYmFyX3ZhcmlhbnRzX2xpZ2h0IiwibG9nb19za2lucyIsIiRsb2dvX3ZhcmlhbnRzIiwiJGNsZWFyX2J0biIsImhyZWYiLCJ0ZXh0IiwiJGxvZ28iLCJjb2xvcnMiLCJjYWxsYmFjayIsIiRibG9jayIsIiRjb2xvciIsImpvaW4iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm9wYWNpdHkiLCJjdXJzb3IiLCJob3ZlciIsImltYWdlX2VsZW1lbnQiLCJkZWZhdWx0c0RlZXAiLCJwb3B1cENlbnRlciIsInVybCIsInciLCJoIiwiZHVhbFNjcmVlbkxlZnQiLCJzY3JlZW5MZWZ0IiwidW5kZWZpbmVkIiwic2NyZWVuWCIsImR1YWxTY3JlZW5Ub3AiLCJzY3JlZW5Ub3AiLCJzY3JlZW5ZIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic2NyZWVuIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzeXN0ZW1ab29tIiwiYXZhaWxXaWR0aCIsIm5ld1dpbmRvdyIsIm9wZW4iLCJmb2N1cyIsInN3YWxfYWxlcnQiLCJhbGVydF9pY29uIiwibXNnIiwiZmlyZSIsImRyb3BpZnkiLCJzZWxlY3QyIiwicmVtb3ZlQXR0ciIsIkRhdGFUYWJsZSIsImRvbSIsIm9yZGVyIiwib3JkZXJpbmciLCJidXR0b25zIiwibW9kYWwiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwicG9zdCIsInJlcyIsInJlc0RhdGEiLCJlcnJvciIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2hhbmdlU3RhdHVzTW9kYWxDZW50ZXIiLCJhY3Rpb24iLCJmb3JtRGF0YSIsInNlcmlhbGl6ZSIsInZhbCIsIkZvcm1EYXRhIiwiYXBwX25hbWUiLCJhcHBfbmFtZV9zaG9ydCIsImFwcF9lbWFpbCIsImFwcF91cmwiLCJmb290ZXJfdGV4dCIsImNvbXBhbnlfYWRkcmVzcyIsImNvbXBhbnlfZGV0YWlscyIsImxvZ28iLCJxdWVyeVNlbGVjdG9yIiwiZmFiaWNvbiIsImZpbGVzIiwic3VjY2VzcyIsInNlbGVjdG9yIiwibWVtYmVySWQiLCJyb3V0ZSIsImlzQ29uZmlybWVkIiwiYWpheCIsInRySWQiLCJ0aGlzRWxlbWVudCIsImFsbEl0ZW0iLCJ0Ym9keUl0ZW1zIiwiY2hlY2tlZEl0ZW0iLCJnZW5lcmF0ZSIsIm1lbWJlcnMiLCJwdXNoIiwiZW1haWxTdWJtaXRGb3JtIiwibG9hZGVyIiwic3RhdHVzIiwiZm9ybXMiLCJlbWFpbCIsInVwYXppbGxhIiwiSlNPTiIsInBhcnNlIiwic2VsZWN0ZWRfZGlzdHJpY3QiLCJ1cGF6aWxsYV9uYW1lIiwiZGlzdHJpY3RfaWQiLCJuYW1lIiwidmlsbGFnZSIsImRpc3RyaWN0IiwicG9saWNlc3RhdGlvbiIsInZhbGlkIiwidGVzdCIsInN1YnN0cmluZyIsImlzc3VlX2RhdGUiLCJEYXRlIiwibmV4dERhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInRvZGF5IiwidGltZSIsImRheSIsImNlaWwiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwiZ2V0RnVsbFllYXIiLCJmaWVsZHMiLCJjaGFuZ2UiLCIkdmFsdWUiLCJleHBhbnNlTW9kYWwiLCJfdG9rZW4iLCJhZGRBY2NvdW50IiwiYWRkRXhwZW5zZVR5cGUiLCJwYXltZW50TWV0aG9kIiwicGF5ZXIiLCJtb2RhbENvbnRlbnQiLCJtb2RhbFRpdGxlIiwiZHluYW1pY1JvdXRlIiwiZXhwZW5zZU1vZGFsIiwiZXhwZW5zZV9pZCIsInBheW1lbnRfbWV0aG9kIiwiYWNjb3VudF9pZCIsImNvbXBvbmVudCIsInBlcm1pc3Npb25UcmVlIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbnMiLCJmb3JtIiwiZW5hYmxlU3VibWl0QnV0dG9ucyIsInN1Ym1pdCIsImNhbmNlbEJ1dHRvblRleHQiLCJhc3NpZ24iLCJoYXNoIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRhYiIsInRvb2x0aXAiXSwic291cmNlUm9vdCI6IiJ9