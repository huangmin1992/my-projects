! function(a) {
		a(document).ready(function() {
			function q() {
				if(document.URL.indexOf("google.com/reader/view") > -1 && (g = !0), i)
					for(var a = i.split(/[,\n] ?/), b = a.length; b--;)
						if(document.URL.indexOf(a[b]) > -1) {
							D("mousewheel", v), g = !0;
							break
						}
			}

			function r() {
				if(document.body) {
					var a = document.body,
						b = document.documentElement,
						c = window.innerHeight,
						d = a.scrollHeight;
					if(o = document.compatMode.indexOf("CSS") >= 0 ? b : a, n = a, q(), l = !0, top != self) j = !0;
					else if(d > c && (a.offsetHeight <= c || b.offsetHeight <= c) && ( o.offsetHeight <= c)) {
						var e = document.createElement("div");
						e.style.clear = "both", a.appendChild(e)
					}
					if(document.URL.indexOf("mail.google.com") > -1) {
						var f = document.createElement("style");
						f.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || b).appendChild(f)
					}
					m || (a.style.backgroundAttachment = "scroll"), g && D("keydown", w)
				}
			}

			function u(c, e, f, g) {
				if(g || (g = 1e3), F(e, f), s.push({
						x: e,
						y: f,
						lastX: 0 > e ? .99 : -.99,
						lastY: 0 > f ? .99 : -.99,
						start: +new Date
					}), !t) {
					var h = function() {
						for(var i = +new Date, j = 0, k = 0, l = 0; l < s.length; l++) {
							var m = s[l],
								n = i - m.start,
								o = n >= b,
								p = o ? 1 : n / b;
							d && (p = H(p));
							var q = m.x * p - m.lastX >> 0,
								r = m.y * p - m.lastY >> 0;
							j += q, k += r, m.lastX += q, m.lastY += r, o && (s.splice(l, 1), l--)
						}
						if(e) {
							var u = c.scrollLeft;
							c.scrollLeft += j, j && c.scrollLeft === u && (e = 0)
						}
						if(f) {
							var v = c.scrollTop;
							c.scrollTop += k, k && c.scrollTop === v && (f = 0)
						}
						e || f || (s = []), s.length ? setTimeout(h, g / a + 1) : t = !1
					};
					setTimeout(h, 0), t = !0
				}
			}

			function v(a) {
				l || r();
				var b = a.target,
					d = B(b);
				if(!d || a.defaultPrevented || E(n, "embed") || E(b, "embed") && /\.pdf/i.test(b.src)) return !0;
				var e = a.wheelDeltaX || 0,
					f = a.wheelDeltaY || 0;
				e || f || (f = a.wheelDelta || 0), Math.abs(e) > 1.2 && (e *= c / 120), Math.abs(f) > 1.2 && (f *= c / 120), u(d, -e, -f), a.preventDefault()
			}

			function w(a) {
				var b = a.target,
					c = a.ctrlKey || a.altKey || a.metaKey;
				if(/input|textarea|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || c) return !0;
				if(E(b, "button") && a.keyCode === p.spacebar) return !0;
				var d, e = 0,
					f = 0,
					g = B(n),
					i = g.clientHeight;
				switch(g == document.body && (i = window.innerHeight), a.keyCode) {
					case p.up:
						f = -h;
						break;
					case p.down:
						f = h;
						break;
					case p.spacebar:
						d = a.shiftKey ? 1 : -1, f = .9 * -d * i;
						break;
					case p.pageup:
						f = .9 * -i;
						break;
					case p.pagedown:
						f = .9 * i;
						break;
					case p.home:
						f = -g.scrollTop;
						break;
					case p.end:
						var j = g.scrollHeight - g.scrollTop - i;
						f = j > 0 ? j + 10 : 0;
						break;
					case p.left:
						e = -h;
						break;
					case p.right:
						e = h;
						break;
					default:
						return !0
				}
				u(g, e, f), a.preventDefault()
			}

			function x(a) {
				n = a.target
			}

			function A(a, b) {
				for(var c = a.length; c--;) y[z(a[c])] = b;
				return b
			}

			function B(a) {
				var b = [],
					c = o.scrollHeight;
				do {
					var d = y[z(a)];
					if(d) return A(b, d);
					if(b.push(a), c === a.scrollHeight) {
						if(!j || o.clientHeight + 10 < c) return A(b, document.body)
					} else if(a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return A(b, a)
				} while (a = a.parentNode)
			}

			function C(a, b, c) {
				window.addEventListener(a, b, c || !1)
			}

			function D(a, b, c) {
				window.removeEventListener(a, b, c || !1)
			}

			function E(a, b) {
				return a.nodeName.toLowerCase() === b.toLowerCase()
			}

			function F(a, b) {
				a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (k.x !== a || k.y !== b) && (k.x = a, k.y = b, s = [])
			}

			function G(a) {
				var b, c, d;
				return a *= e, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), a -= 1, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * f
			}

			function H(a) {
				return a >= 1 ? 1 : 0 >= a ? 0 : (1 == f && (f /= G(1)), G(a))
			}
			var n, o, a = 150,
				b = 600,
				c = 150,
				d = !0,
				e = 5,
				f = 1,
				g = !1,
				h = 50,
				i = "",
				j = !1,
				k = {
					x: 0,
					y: 0
				},
				l = !1,
				m = !0,
				p = {
					left: 37,
					up: 38,
					right: 39,
					down: 40,
					spacebar: 32,
					pageup: 33,
					pagedown: 34,
					end: 35,
					home: 36
				},
				s = [],
				t = !1,
				y = {};
			setInterval(function() {
				y = {}
			}, 1e4);
			var z = function() {
				var a = 0;
				return function(b) {
					return b.uniqueID || (b.uniqueID = a++)
				}
			}();
			/chrome/.test(navigator.userAgent.toLowerCase()) && (C("mousedown", x), C("mousewheel", v), C("keydown", w), C("load", r))
		})
	}(jQuery);