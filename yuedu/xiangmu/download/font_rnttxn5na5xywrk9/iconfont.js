;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dianzan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M241.371 481.582c12.051 0 21.805-9.769 21.805-21.796 0-12.043-9.754-21.821-21.805-21.821-0.223 0-0.406 0.125-0.613 0.125l-52.117 0.121c-1.192-0.16-2.422-0.246-3.649-0.246-16.406 0-29.707 13.461-29.707 30.121L155 829.461c0 16.641 13.316 29.684 29.746 29.684 1.602 0 3.176 0.246 4.711 0l50.895 0.023c0.082 0 0.121 0.039 0.207 0.039 0.078 0 0.121-0.039 0.203-0.039l0.613 0 0-0.125c11.187-0.449 20.16-9.527 20.16-20.816 0-11.309-8.973-20.383-20.16-20.836l0-0.324-42.488 0 1.207-335.484L241.371 481.583 241.371 481.582 241.371 481.582zM855.445 450.344c-16.086-26.222-39.48-36.84-67.797-37.984-1.473-0.207-2.945-0.332-4.484-0.332l-171.332-0.574c11.223-32.571 18.93-71.375 18.93-107.844 0-23.641-2.664-46.668-7.543-68.836l-0.406 0.039C613.938 195.969 579.664 167 538.609 167c-47.757 0-79.617 40.157-79.617 88.508 0 2.703-0.242 5.324 0 7.949-2.5 90.387-76.09 163.075-163.652 173.051l0 45.774-0.656 185.327 0 191.598 8.929 0 417 0.188 7.301-0.203c16.141 0.039 25.215-4.02 39.863-13.441 13.914-8.977 24.383-21.266 31.266-35.156 1.887-2.789 3.359-5.898 4.258-9.34l64.23-287.156c0.879-3.378 1.125-6.82 0.879-10.141C869.723 485.782 865.668 467.02 855.445 450.344L855.445 450.344 855.445 450.344zM828.176 494.45l-69.207 306.714-0.078-0.039c-2.137 5.121-5.738 9.668-10.734 12.867-3.488 2.27-7.32 3.625-11.191 4.141-1.25-0.164-2.543 0-3.852 0l-397.82-0.453-0.148-339.762c74.496-33.582 129.132-66.441 157.285-144.824 0.062 0.02 0.105 0.039 0.164 0.059 2.5-7.621 5.265-17.293 7.25-27.656 4.633-24.344 4.386-48.473 4.386-48.473-4.117-31.672 21.637-44.172 37-44.172 21.102 0.719 41.918 28.066 41.918 43.637 0 0 4.668 22.988 4.711 47.695 0.039 31.16-3.895 47.406-3.895 47.406l-0.387 0c-4.898 25.754-13.523 50.153-25.41 72.528l0.309 0.289c-1.965 4.015-3.094 8.523-3.094 13.293 0 16.617 15.922 18.136 32.328 18.136l199.121 0.223c0 0 12.227 0.387 12.25 0.387l0 0.086c10.117-0.535 20.199 4.34 25.938 13.683 4.59 7.52 5.367 16.352 2.906 24.172L828.176 494.45 828.176 494.45 828.176 494.45zM303.613 859.291c0.27 0.021 0.371 0.021 0.25-0.021 0.203-0.039 0.305-0.063-0.25-0.063-0.547 0-0.445 0.023-0.222 0.063C303.289 859.313 303.371 859.313 303.613 859.291L303.613 859.291 303.613 859.291zM303.613 859.291"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzan-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M679.802 298.495c79.204 0 143.577 61.797 143.577 137.786 0 202.994-225.758 353.567-311.021 403.11-85.363-49.543-311.12-200.116-311.12-403.11 0-75.989 64.406-137.786 143.61-137.786 43.518 0 84.189 18.68 111.64 51.286 13.623 16.201 36.857 25.641 55.87 25.641 21.692 0 42.18-9.441 55.769-25.641 27.452-32.606 68.19-51.286 111.674-51.286M679.802 229.604c-67.688 0-128.009 30.060-167.444 76.86-39.568-46.799-99.824-76.86-167.51-76.86-118.972 0-215.381 92.526-215.381 206.677 0 275.635 334.988 459.415 382.892 482.378 47.836-22.962 382.824-206.743 382.824-482.378 0.001-114.151-96.409-206.677-215.38-206.677z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)