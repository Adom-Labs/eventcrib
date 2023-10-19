"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/valid-url";
exports.ids = ["vendor-chunks/valid-url"];
exports.modules = {

/***/ "(rsc)/./node_modules/valid-url/index.js":
/*!*****************************************!*\
  !*** ./node_modules/valid-url/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n(function(module1) {\n    \"use strict\";\n    module1.exports.is_uri = is_iri;\n    module1.exports.is_http_uri = is_http_iri;\n    module1.exports.is_https_uri = is_https_iri;\n    module1.exports.is_web_uri = is_web_iri;\n    // Create aliases\n    module1.exports.isUri = is_iri;\n    module1.exports.isHttpUri = is_http_iri;\n    module1.exports.isHttpsUri = is_https_iri;\n    module1.exports.isWebUri = is_web_iri;\n    // private function\n    // internal URI spitter method - direct from RFC 3986\n    var splitUri = function(uri) {\n        var splitted = uri.match(/(?:([^:\\/?#]+):)?(?:\\/\\/([^\\/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?/);\n        return splitted;\n    };\n    function is_iri(value) {\n        if (!value) {\n            return;\n        }\n        // check for illegal characters\n        if (/[^a-z0-9\\:\\/\\?\\#\\[\\]\\@\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=\\.\\-\\_\\~\\%]/i.test(value)) return;\n        // check for hex escapes that aren't complete\n        if (/%[^0-9a-f]/i.test(value)) return;\n        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;\n        var splitted = [];\n        var scheme = \"\";\n        var authority = \"\";\n        var path = \"\";\n        var query = \"\";\n        var fragment = \"\";\n        var out = \"\";\n        // from RFC 3986\n        splitted = splitUri(value);\n        scheme = splitted[1];\n        authority = splitted[2];\n        path = splitted[3];\n        query = splitted[4];\n        fragment = splitted[5];\n        // scheme and path are required, though the path can be empty\n        if (!(scheme && scheme.length && path.length >= 0)) return;\n        // if authority is present, the path must be empty or begin with a /\n        if (authority && authority.length) {\n            if (!(path.length === 0 || /^\\//.test(path))) return;\n        } else {\n            // if authority is not present, the path must not start with //\n            if (/^\\/\\//.test(path)) return;\n        }\n        // scheme must begin with a letter, then consist of letters, digits, +, ., or -\n        if (!/^[a-z][a-z0-9\\+\\-\\.]*$/.test(scheme.toLowerCase())) return;\n        // re-assemble the URL per section 5.3 in RFC 3986\n        out += scheme + \":\";\n        if (authority && authority.length) {\n            out += \"//\" + authority;\n        }\n        out += path;\n        if (query && query.length) {\n            out += \"?\" + query;\n        }\n        if (fragment && fragment.length) {\n            out += \"#\" + fragment;\n        }\n        return out;\n    }\n    function is_http_iri(value, allowHttps) {\n        if (!is_iri(value)) {\n            return;\n        }\n        var splitted = [];\n        var scheme = \"\";\n        var authority = \"\";\n        var path = \"\";\n        var port = \"\";\n        var query = \"\";\n        var fragment = \"\";\n        var out = \"\";\n        // from RFC 3986\n        splitted = splitUri(value);\n        scheme = splitted[1];\n        authority = splitted[2];\n        path = splitted[3];\n        query = splitted[4];\n        fragment = splitted[5];\n        if (!scheme) return;\n        if (allowHttps) {\n            if (scheme.toLowerCase() != \"https\") return;\n        } else {\n            if (scheme.toLowerCase() != \"http\") return;\n        }\n        // fully-qualified URIs must have an authority section that is\n        // a valid host\n        if (!authority) {\n            return;\n        }\n        // enable port component\n        if (/:(\\d+)$/.test(authority)) {\n            port = authority.match(/:(\\d+)$/)[0];\n            authority = authority.replace(/:\\d+$/, \"\");\n        }\n        out += scheme + \":\";\n        out += \"//\" + authority;\n        if (port) {\n            out += port;\n        }\n        out += path;\n        if (query && query.length) {\n            out += \"?\" + query;\n        }\n        if (fragment && fragment.length) {\n            out += \"#\" + fragment;\n        }\n        return out;\n    }\n    function is_https_iri(value) {\n        return is_http_iri(value, true);\n    }\n    function is_web_iri(value) {\n        return is_http_iri(value) || is_https_iri(value);\n    }\n})(module);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxRQUFRLENBQUMsRUFBRTtRQUN2Qk0sT0FBT04sUUFBUSxDQUFDLEVBQUU7UUFDbEJPLFFBQVFQLFFBQVEsQ0FBQyxFQUFFO1FBQ25CUSxXQUFXUixRQUFRLENBQUMsRUFBRTtRQUV0QixJQUFJLENBQUNJLFFBQVM7UUFFZCxJQUFHUSxZQUFZO1lBQ1gsSUFBSVIsT0FBT08sV0FBVyxNQUFNLFNBQVM7UUFDekMsT0FBTztZQUNILElBQUlQLE9BQU9PLFdBQVcsTUFBTSxRQUFRO1FBQ3hDO1FBRUEsOERBQThEO1FBQzlELGVBQWU7UUFDZixJQUFJLENBQUNOLFdBQVc7WUFDWjtRQUNKO1FBRUEsd0JBQXdCO1FBQ3hCLElBQUksVUFBVUYsSUFBSSxDQUFDRSxZQUFZO1lBQzNCUSxPQUFPUixVQUFVSixLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcENJLFlBQVlBLFVBQVVTLE9BQU8sQ0FBQyxTQUFTO1FBQzNDO1FBRUFMLE9BQU9MLFNBQVM7UUFDaEJLLE9BQU8sT0FBT0o7UUFFZCxJQUFJUSxNQUFNO1lBQ05KLE9BQU9JO1FBQ1g7UUFFQUosT0FBT0g7UUFFUCxJQUFHQyxTQUFTQSxNQUFNRyxNQUFNLEVBQUM7WUFDckJELE9BQU8sTUFBTUY7UUFDakI7UUFFQSxJQUFHQyxZQUFZQSxTQUFTRSxNQUFNLEVBQUM7WUFDM0JELE9BQU8sTUFBTUQ7UUFDakI7UUFFQSxPQUFPQztJQUNYO0lBRUEsU0FBU2xCLGFBQWFXLEtBQUs7UUFDdkIsT0FBT2IsWUFBWWEsT0FBTztJQUM5QjtJQUVBLFNBQVNULFdBQVdTLEtBQUs7UUFDckIsT0FBUWIsWUFBWWEsVUFBVVgsYUFBYVc7SUFDL0M7QUFFSixHQUFHbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudGNyaWIvLi9ub2RlX21vZHVsZXMvdmFsaWQtdXJsL2luZGV4LmpzPzFiZTAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIG1vZHVsZS5leHBvcnRzLmlzX3VyaSA9IGlzX2lyaTtcbiAgICBtb2R1bGUuZXhwb3J0cy5pc19odHRwX3VyaSA9IGlzX2h0dHBfaXJpO1xuICAgIG1vZHVsZS5leHBvcnRzLmlzX2h0dHBzX3VyaSA9IGlzX2h0dHBzX2lyaTtcbiAgICBtb2R1bGUuZXhwb3J0cy5pc193ZWJfdXJpID0gaXNfd2ViX2lyaTtcbiAgICAvLyBDcmVhdGUgYWxpYXNlc1xuICAgIG1vZHVsZS5leHBvcnRzLmlzVXJpID0gaXNfaXJpO1xuICAgIG1vZHVsZS5leHBvcnRzLmlzSHR0cFVyaSA9IGlzX2h0dHBfaXJpO1xuICAgIG1vZHVsZS5leHBvcnRzLmlzSHR0cHNVcmkgPSBpc19odHRwc19pcmk7XG4gICAgbW9kdWxlLmV4cG9ydHMuaXNXZWJVcmkgPSBpc193ZWJfaXJpO1xuXG5cbiAgICAvLyBwcml2YXRlIGZ1bmN0aW9uXG4gICAgLy8gaW50ZXJuYWwgVVJJIHNwaXR0ZXIgbWV0aG9kIC0gZGlyZWN0IGZyb20gUkZDIDM5ODZcbiAgICB2YXIgc3BsaXRVcmkgPSBmdW5jdGlvbih1cmkpIHtcbiAgICAgICAgdmFyIHNwbGl0dGVkID0gdXJpLm1hdGNoKC8oPzooW146XFwvPyNdKyk6KT8oPzpcXC9cXC8oW15cXC8/I10qKSk/KFtePyNdKikoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/Lyk7XG4gICAgICAgIHJldHVybiBzcGxpdHRlZDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNfaXJpKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZvciBpbGxlZ2FsIGNoYXJhY3RlcnNcbiAgICAgICAgaWYgKC9bXmEtejAtOVxcOlxcL1xcP1xcI1xcW1xcXVxcQFxcIVxcJFxcJlxcJ1xcKFxcKVxcKlxcK1xcLFxcO1xcPVxcLlxcLVxcX1xcflxcJV0vaS50ZXN0KHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBoZXggZXNjYXBlcyB0aGF0IGFyZW4ndCBjb21wbGV0ZVxuICAgICAgICBpZiAoLyVbXjAtOWEtZl0vaS50ZXN0KHZhbHVlKSkgcmV0dXJuO1xuICAgICAgICBpZiAoLyVbMC05YS1mXSg6P1teMC05YS1mXXwkKS9pLnRlc3QodmFsdWUpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNwbGl0dGVkID0gW107XG4gICAgICAgIHZhciBzY2hlbWUgPSAnJztcbiAgICAgICAgdmFyIGF1dGhvcml0eSA9ICcnO1xuICAgICAgICB2YXIgcGF0aCA9ICcnO1xuICAgICAgICB2YXIgcXVlcnkgPSAnJztcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gJyc7XG4gICAgICAgIHZhciBvdXQgPSAnJztcblxuICAgICAgICAvLyBmcm9tIFJGQyAzOTg2XG4gICAgICAgIHNwbGl0dGVkID0gc3BsaXRVcmkodmFsdWUpO1xuICAgICAgICBzY2hlbWUgPSBzcGxpdHRlZFsxXTsgXG4gICAgICAgIGF1dGhvcml0eSA9IHNwbGl0dGVkWzJdO1xuICAgICAgICBwYXRoID0gc3BsaXR0ZWRbM107XG4gICAgICAgIHF1ZXJ5ID0gc3BsaXR0ZWRbNF07XG4gICAgICAgIGZyYWdtZW50ID0gc3BsaXR0ZWRbNV07XG5cbiAgICAgICAgLy8gc2NoZW1lIGFuZCBwYXRoIGFyZSByZXF1aXJlZCwgdGhvdWdoIHRoZSBwYXRoIGNhbiBiZSBlbXB0eVxuICAgICAgICBpZiAoIShzY2hlbWUgJiYgc2NoZW1lLmxlbmd0aCAmJiBwYXRoLmxlbmd0aCA+PSAwKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGlmIGF1dGhvcml0eSBpcyBwcmVzZW50LCB0aGUgcGF0aCBtdXN0IGJlIGVtcHR5IG9yIGJlZ2luIHdpdGggYSAvXG4gICAgICAgIGlmIChhdXRob3JpdHkgJiYgYXV0aG9yaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCEocGF0aC5sZW5ndGggPT09IDAgfHwgL15cXC8vLnRlc3QocGF0aCkpKSByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBhdXRob3JpdHkgaXMgbm90IHByZXNlbnQsIHRoZSBwYXRoIG11c3Qgbm90IHN0YXJ0IHdpdGggLy9cbiAgICAgICAgICAgIGlmICgvXlxcL1xcLy8udGVzdChwYXRoKSkgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2NoZW1lIG11c3QgYmVnaW4gd2l0aCBhIGxldHRlciwgdGhlbiBjb25zaXN0IG9mIGxldHRlcnMsIGRpZ2l0cywgKywgLiwgb3IgLVxuICAgICAgICBpZiAoIS9eW2Etel1bYS16MC05XFwrXFwtXFwuXSokLy50ZXN0KHNjaGVtZS50b0xvd2VyQ2FzZSgpKSkgIHJldHVybjtcblxuICAgICAgICAvLyByZS1hc3NlbWJsZSB0aGUgVVJMIHBlciBzZWN0aW9uIDUuMyBpbiBSRkMgMzk4NlxuICAgICAgICBvdXQgKz0gc2NoZW1lICsgJzonO1xuICAgICAgICBpZiAoYXV0aG9yaXR5ICYmIGF1dGhvcml0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG91dCArPSAnLy8nICsgYXV0aG9yaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0ICs9IHBhdGg7XG5cbiAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0ICs9ICc/JyArIHF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYWdtZW50ICYmIGZyYWdtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0ICs9ICcjJyArIGZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc19odHRwX2lyaSh2YWx1ZSwgYWxsb3dIdHRwcykge1xuICAgICAgICBpZiAoIWlzX2lyaSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzcGxpdHRlZCA9IFtdO1xuICAgICAgICB2YXIgc2NoZW1lID0gJyc7XG4gICAgICAgIHZhciBhdXRob3JpdHkgPSAnJztcbiAgICAgICAgdmFyIHBhdGggPSAnJztcbiAgICAgICAgdmFyIHBvcnQgPSAnJztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJyc7XG4gICAgICAgIHZhciBmcmFnbWVudCA9ICcnO1xuICAgICAgICB2YXIgb3V0ID0gJyc7XG5cbiAgICAgICAgLy8gZnJvbSBSRkMgMzk4NlxuICAgICAgICBzcGxpdHRlZCA9IHNwbGl0VXJpKHZhbHVlKTtcbiAgICAgICAgc2NoZW1lID0gc3BsaXR0ZWRbMV07IFxuICAgICAgICBhdXRob3JpdHkgPSBzcGxpdHRlZFsyXTtcbiAgICAgICAgcGF0aCA9IHNwbGl0dGVkWzNdO1xuICAgICAgICBxdWVyeSA9IHNwbGl0dGVkWzRdO1xuICAgICAgICBmcmFnbWVudCA9IHNwbGl0dGVkWzVdO1xuXG4gICAgICAgIGlmICghc2NoZW1lKSAgcmV0dXJuO1xuXG4gICAgICAgIGlmKGFsbG93SHR0cHMpIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWUudG9Mb3dlckNhc2UoKSAhPSAnaHR0cHMnKSByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2h0dHAnKSByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmdWxseS1xdWFsaWZpZWQgVVJJcyBtdXN0IGhhdmUgYW4gYXV0aG9yaXR5IHNlY3Rpb24gdGhhdCBpc1xuICAgICAgICAvLyBhIHZhbGlkIGhvc3RcbiAgICAgICAgaWYgKCFhdXRob3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBwb3J0IGNvbXBvbmVudFxuICAgICAgICBpZiAoLzooXFxkKykkLy50ZXN0KGF1dGhvcml0eSkpIHtcbiAgICAgICAgICAgIHBvcnQgPSBhdXRob3JpdHkubWF0Y2goLzooXFxkKykkLylbMF07XG4gICAgICAgICAgICBhdXRob3JpdHkgPSBhdXRob3JpdHkucmVwbGFjZSgvOlxcZCskLywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0ICs9IHNjaGVtZSArICc6JztcbiAgICAgICAgb3V0ICs9ICcvLycgKyBhdXRob3JpdHk7XG4gICAgICAgIFxuICAgICAgICBpZiAocG9ydCkge1xuICAgICAgICAgICAgb3V0ICs9IHBvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG91dCArPSBwYXRoO1xuICAgICAgICBcbiAgICAgICAgaWYocXVlcnkgJiYgcXVlcnkubGVuZ3RoKXtcbiAgICAgICAgICAgIG91dCArPSAnPycgKyBxdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZyYWdtZW50ICYmIGZyYWdtZW50Lmxlbmd0aCl7XG4gICAgICAgICAgICBvdXQgKz0gJyMnICsgZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNfaHR0cHNfaXJpKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc19odHRwX2lyaSh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNfd2ViX2lyaSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKGlzX2h0dHBfaXJpKHZhbHVlKSB8fCBpc19odHRwc19pcmkodmFsdWUpKTtcbiAgICB9XG5cbn0pKG1vZHVsZSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImlzX3VyaSIsImlzX2lyaSIsImlzX2h0dHBfdXJpIiwiaXNfaHR0cF9pcmkiLCJpc19odHRwc191cmkiLCJpc19odHRwc19pcmkiLCJpc193ZWJfdXJpIiwiaXNfd2ViX2lyaSIsImlzVXJpIiwiaXNIdHRwVXJpIiwiaXNIdHRwc1VyaSIsImlzV2ViVXJpIiwic3BsaXRVcmkiLCJ1cmkiLCJzcGxpdHRlZCIsIm1hdGNoIiwidmFsdWUiLCJ0ZXN0Iiwic2NoZW1lIiwiYXV0aG9yaXR5IiwicGF0aCIsInF1ZXJ5IiwiZnJhZ21lbnQiLCJvdXQiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFsbG93SHR0cHMiLCJwb3J0IiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/valid-url/index.js\n");

/***/ })

};
;