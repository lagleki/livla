var cmaxes = (function () {
  'use strict'
  function P(e, r, n, t) {
    ;(this.message = e),
      (this.expected = r),
      (this.found = n),
      (this.location = t),
      (this.name = 'SyntaxError'),
      'function' == typeof Error.captureStackTrace &&
        Error.captureStackTrace(this, P)
  }
  function e() {
    this.constructor = r
  }
  var r, n
  return (
    (r = P),
    (n = Error),
    (e.prototype = n.prototype),
    (r.prototype = new e()),
    (P.buildMessage = function (e, r) {
      var n,
        u = {
          literal: function (e) {
            return '"' + $(e.text) + '"'
          },
          class: function (e) {
            for (var r = '', n = 0; n < e.parts.length; n++)
              r +=
                e.parts[n] instanceof Array
                  ? a(e.parts[n][0]) + '-' + a(e.parts[n][1])
                  : a(e.parts[n])
            return '[' + (e.inverted ? '^' : '') + r + ']'
          },
          any: function (e) {
            return 'any character'
          },
          end: function (e) {
            return 'end of input'
          },
          other: function (e) {
            return e.description
          },
        }
      function t(e) {
        return e.charCodeAt(0).toString(16).toUpperCase()
      }
      function $(e) {
        return e
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g, function (e) {
            return '\\x0' + t(e)
          })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
            return '\\x' + t(e)
          })
      }
      function a(e) {
        return e
          .replace(/\\/g, '\\\\')
          .replace(/\]/g, '\\]')
          .replace(/\^/g, '\\^')
          .replace(/-/g, '\\-')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g, function (e) {
            return '\\x0' + t(e)
          })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
            return '\\x' + t(e)
          })
      }
      return (
        'Expected ' +
        (function (e) {
          for (var r, n, t = new Array(e.length), $ = 0; $ < e.length; $++)
            t[$] = ((n = e[$]), u[n.type](n))
          if ((t.sort(), 0 < t.length)) {
            for (r = $ = 1; $ < t.length; $++)
              t[$ - 1] !== t[$] && ((t[r] = t[$]), r++)
            t.length = r
          }
          switch (t.length) {
            case 1:
              return t[0]
            case 2:
              return t[0] + ' or ' + t[1]
            default:
              return t.slice(0, -1).join(', ') + ', or ' + t[t.length - 1]
          }
        })(e) +
        ' but ' +
        ((n = r) ? '"' + $(n) + '"' : 'end of input') +
        ' found.'
      )
    }),
    {
      SyntaxError: P,
      parse: function (p, e) {
        e = void 0 !== e ? e : {}
        var r,
          f = {},
          n = { text: 0 },
          t = 0,
          h = [
            function e(r) {
              if ('string' == typeof r) return r
              var n = []
              for (var t in r) n.push(e(r[t]))
              return n
            },
            function (e) {
              return e
            },
            function (e) {
              return ['cmavo', d(e)]
            },
            function (e) {
              return ['gismu', d(e)]
            },
            function (e) {
              return ['lujvo', d(e)]
            },
            function (e) {
              return ["fu'ivla", d(e)]
            },
            function (e) {
              return ['cmevla', d(e)]
            },
            function (e) {
              return [d(e), '-']
            },
            function (e) {
              return [d(e)]
            },
            function (e, r) {
              return [d(e), '-', d(r)]
            },
            function (e, r) {
              return [d(e), '-', d(r)]
            },
            function (e, r) {
              return [d(e), '-', d(r)]
            },
            function (e, r) {
              return [d(e), '-', d(r)]
            },
            /^[a]/,
            c(['a'], !1, !1),
            /^[aeo]/,
            c(['a', 'e', 'o'], !1, !1),
            /^[aeiou]/,
            c(['a', 'e', 'i', 'o', 'u'], !1, !1),
            /^[i]/,
            c(['i'], !1, !1),
            /^[u]/,
            c(['u'], !1, !1),
            /^[y]/,
            c(['y'], !1, !1),
            /^[i\u0269]/,
            c(['i', 'ɩ'], !1, !1),
            /^[uw]/,
            c(['u', 'w'], !1, !1),
            function () {
              return ['u', '']
            },
            /^[l]/,
            c(['l'], !1, !1),
            /^[m]/,
            c(['m'], !1, !1),
            /^[n]/,
            c(['n'], !1, !1),
            /^[r]/,
            c(['r'], !1, !1),
            /^[pfbgvkx]/,
            c(['p', 'f', 'b', 'g', 'v', 'k', 'x'], !1, !1),
            /^[d]/,
            c(['d'], !1, !1),
            /^[jz]/,
            c(['j', 'z'], !1, !1),
            /^[cs]/,
            c(['c', 's'], !1, !1),
            /^[x]/,
            c(['x'], !1, !1),
            /^[t]/,
            c(['t'], !1, !1),
            /^[,']/,
            c([',', "'"], !1, !1),
            /^[}]/,
            c(['}'], !1, !1),
            { type: 'any' },
            /^[^a-za-z,']/,
            c([['a', 'z'], ['a', 'z'], ',', "'"], !0, !1),
            function (e) {
              return ['drata', d(e)]
            },
            /^[^ ]/,
            c([' '], !0, !1),
          ],
          g = [
            l("%$;!0#*;!&/' 8!: !! )"),
            l('%;"/\' 8!:!!! )'),
            l(
              ";_.î &;#.è &%;'/' 8!:\"!! ).Ö &%;$/' 8!:#!! ).Ä &%%%<;$=.##&&!&'#/#%<;&=.##&&!&'#/{$%<;'=.##&&!&'#/f$%<%;6/>#;\\/5$;K/,$;D/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:$!! )./ &%;&/' 8!:%!! )"
            ),
            l(
              "%%%<;,=/##&'!&&#/N#$;@/&#0#*;@&&&#/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#.# &;,/' 8!:&!! )"
            ),
            l(
              "%;</k#%<;?=/##&'!&&#/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"
            ),
            l("%;+/Q#;A/H$%<;?=/##&'!&&#/3$$;B0#*;B&/#$+$)($'#(#'#(\"'#&'#"),
            l('%;%/,#;>/#$+")("\'#&\'#'),
            l(
              "%%<;#=.##&&!&'#/Ų#%<%;4/X#%<;?=.##&&!&'#/C$;K/:$;\\.\" &\"/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#.T &%;4/J#%<;?=/##&'!&&#/5$;K/,$;:/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/ç$%%<;\\=.##&&!&'#/ #%<%;P/9#$;P/&#0#*;P&&&#/#$+\")(\"'#&'#=.##&&!&'#/k$;D/b$$%;E/,#;\\/#$+\")(\"'#&'#06*%;E/,#;\\/#$+\")(\"'#&'#&/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#.0 &$;K/&#0#*;K&&&#/8$%<;]=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"
            ),
            l(
              "%$%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )0u*%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )&/#%;&.# &;9/' 8!:(!! ).m &%;2.N &;-.H &;/.B &%;7/8#%<;?=/##&'!&&#/#$+\")(\"'#&'#/2#;:/)$8\":)\"\"! )(\"'#&'#/#$+\")(\"'#&'#"
            ),
            l(';&.) &;..# &;-'),
            l(
              "%$;10#*;1&/â#;9.Ó &%;7/V#%<;?=/##&'!&&#/A$%<;K=.##&&!&'#/,$;:/#$+$)($'#(#'#(\"'#&'#. &;0. &;/. &%%;7/M#%<;?=/##&'!&&#/8$%<;K=.##&&!&'#/#$+#)(#'#(\"'#&'#.\" &\"/5#;N/,$;K/#$+#)(#'#(\"'#&'#.) &;3.# &;2/#$+\")(\"'#&'#"
            ),
            l(
              "%%<;*=.##&&!&'#/¯#%<;'=.##&&!&'#/$%<%%<;*=.##&&!&'#/5#;P/,$;*/#$+#)(#'#(\"'#&'#=.##&&!&'#/]$%<;\\=.##&&!&'#/H$%<;D=/##&'!&&#/3$$;;0#*;;&/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"
            ),
            l(
              "%%<;\\=.##&&!&'#/³#$;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#0T*;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#&/A$;P/8$%<;^=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"
            ),
            l(
              '%;%/E#%;\\/,#;K/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#.O &%%;%/,#;D/#$+")("\'#&\'#/2#;K/)$8":+""! )("\'#&\'#'
            ),
            l(
              '%%<;;=/##&\'!&&#/N#;+/E$%;\\/,#;K/#$+")("\'#&\'#/)$8#:*#"! )(#\'#("\'#&\'#.g &%%;+/,#;D/#$+")("\'#&\'#/J#%;K/1#;\\." &"/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#'
            ),
            l("%;<.# &;4/G#%<;?=/##&'!&&#/2$;K/)$8#:*#\"\" )(#'#(\"'#&'#"),
            l(
              '%%;<.# &;4/8#%<;?=.##&&!&\'#/#$+")("\'#&\'#/J#%;K/1#;\\." &"/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#'
            ),
            l(
              "%%<;0=.##&&!&'#/ª#%<;/=.##&&!&'#/$%<;3=.##&&!&'#/$%<;2=.##&&!&'#/k$;7/b$%<;?=.##&&!&'#/M$%<;K=.##&&!&'#/8$%<;\\=.##&&!&'#/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"
            ),
            l(
              "%%;</,#;H/#$+\")(\"'#&'#.# &;7/Z#%<;?=/##&'!&&#/E$%;\\/,#;K/#$+\")(\"'#&'#/)$8#:*#\"\" )(#'#(\"'#&'#"
            ),
            l(
              '%%;</,#;H/#$+")("\'#&\'#.# &;7/h#%%<;?=.##&&!&\'#/C#;\\/:$;K/1$;\\." &"/#$+$)($\'#(#\'#("\'#&\'#/)$8":,""! )("\'#&\'#'
            ),
            l('%;=/,#;P/#$+")("\'#&\'#'),
            l(';4.# &;6'),
            l('%;N/,#;H/#$+")("\'#&\'#'),
            l(';5.# &;8'),
            l(
              "%%;P/c#%;H/J#%<;?=.##&&!&'#/5$;\\/,$;H/#$+$)($'#(#'#(\"'#&'#.# &;G/#$+\")(\"'#&'#/{#%;U/8#%<;P=/##&'!&&#/#$+\")(\"'#&'#.B &%;T/8#%<;U=/##&'!&&#/#$+\")(\"'#&'#.\" &\"/)$8\":*\"\"! )(\"'#&'#"
            ),
            l(
              ";$.~ &%;=/t#%<;?=/##&'!&&#/_$;\\/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"
            ),
            l(
              "%%<;>=/##&'!&&#/Z#%;P/,#;G/#$+\")(\"'#&'#.# &;6/8$%<;]=/##&'!&&#/#$+#)(#'#(\"'#&'#"
            ),
            l("%;A/8#%<;?=.##&&!&'#/#$+\")(\"'#&'#.# &;B"),
            l('%;5/,#;P/#$+")("\'#&\'#'),
            l('%;P/,#;H/#$+")("\'#&\'#'),
            l(
              "%;D/k#%<;K=.##&&!&'#/V$;E/M$%<;#=.##&&!&'#/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"
            ),
            l(
              '%$;P.# &;F0)*;P.# &;F&/Q#;\\." &"/C$;K." &"/5$;A/,$;^/#$+%)(%\'#($\'#(#\'#("\'#&\'#'
            ),
            l('%;D/:#;E/1$;C." &"/#$+#)(#\'#("\'#&\'#.# &;B'),
            l("%;D/O#%<;K=.##&&!&'#/:$;E/1$;C.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
            l("%;P/A#%<;Q=/##&'!&&#/,$;C/#$+#)(#'#(\"'#&'#"),
            l(
              "%%<;@=.##&&!&'#/A#;P/8$%<;@=/##&'!&&#/#$+#)(#'#(\"'#&'#.U &%;Q.\" &\"/F#;P.\" &\"/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#"
            ),
            l(
              ";\\.Œ &%;P.\" &\"/,#;F/#$+\")(\"'#&'#.Ĵ &%;O.ú &%%;Y/8#%<;Z=.##&&!&'#/#$+\")(\"'#&'#.N &%;X/D#%<;T.) &;R.# &;U=.##&&!&'#/#$+\")(\"'#&'#.\" &\"/#;V.s &%;[.H &;W.B &%;T/8#%<;U=.##&&!&'#/#$+\")(\"'#&'#/8#%<;R=.##&&!&'#/#$+\")(\"'#&'#.# &;S.\" &\"/7$;R.# &;U.\" &\"/#$+#)(#'#(\"'#&'#/M#%<;P=.##&&!&'#/8$%<;F=.##&&!&'#/#$+#)(#'#(\"'#&'#"
            ),
            l(";H.H &;G.B &%;K/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"),
            l("%;L.# &;M/8#%<;E=/##&'!&&#/#$+\")(\"'#&'#"),
            l(
              "%%4-\"\"5!7./A#;M/8$%<;J=.##&&!&'#/#$+#)(#'#(\"'#&'#.Q &%4/\"\"5!70/A#;L/8$%<;I=.##&&!&'#/#$+#)(#'#(\"'#&'#/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"
            ),
            l('%41""5!72/8#%<;E=.##&&!&\'#/#$+")("\'#&\'#'),
            l('43""5!74'),
            l('45""5!76'),
            l(
              '%47""5!78/W#%<%%<;K=.##&&!&\'#/,#;E/#$+")("\'#&\'#=.##&&!&\'#/#$+")("\'#&\'#'
            ),
            l('49""5!7:'),
            l('%4;""5!7</& 8!:=! )'),
            l(
              "%%<;D=/##&'!&&#/J#;P/A$;P/8$%<;P=.##&&!&'#/#$+$)($'#(#'#(\"'#&'#"
            ),
            l('%;[/,#;Y/#$+")("\'#&\'#.6 &%;W/,#;X/#$+")("\'#&\'#'),
            l(';V.; &;W.5 &;X./ &;Y.) &;[.# &;Q'),
            l(';R./ &;S.) &;T.# &;U'),
            l('4>""5!7?'),
            l('4@""5!7A'),
            l('%4B""5!7C/8#%<;O=.##&&!&\'#/#$+")("\'#&\'#'),
            l('4D""5!7E'),
            l('4F""5!7G'),
            l('4H""5!7I'),
            l('4J""5!7K'),
            l('4L""5!7M'),
            l('4N""5!7O'),
            l('4P""5!7Q'),
            l('%4R""5!7S/8#%<;E=/##&\'!&&#/#$+")("\'#&\'#'),
            l(';^.N &%%<;E=.##&&!&\'#/,#;"/#$+")("\'#&\'#.) &4T""5!7U'),
            l(';_.4 &%<1""5!7V=.##&&!&\'#'),
            l('%$4W""5!7X/,#0)*4W""5!7X&&&#/\' 8!:Y!! )'),
            l('$4Z""5!7[/,#0)*4Z""5!7[&&&#'),
          ],
          b = 0,
          $ = [{ line: 1, column: 1 }],
          u = 0,
          a = [],
          k = 0,
          x = {}
        if ('startRule' in e) {
          if (!(e.startRule in n))
            throw new Error(
              'Can\'t start parsing from rule "' + e.startRule + '".'
            )
          t = n[e.startRule]
        }
        function c(e, r, n) {
          return { type: 'class', parts: e, inverted: r, ignoreCase: n }
        }
        function s(e) {
          var r,
            n = $[e]
          if (n) return n
          for (r = e - 1; !$[r]; ) r--
          for (n = { line: (n = $[r]).line, column: n.column }; r < e; )
            10 === p.charCodeAt(r) ? (n.line++, (n.column = 1)) : n.column++,
              r++
          return ($[e] = n)
        }
        function o(e, r) {
          var n = s(e),
            t = s(r)
          return {
            start: { offset: e, line: n.line, column: n.column },
            end: { offset: r, line: t.line, column: t.column },
          }
        }
        function E(e) {
          b < u || (u < b && ((u = b), (a = [])), a.push(e))
        }
        function i(e, r, n) {
          return new P(P.buildMessage(e, r), e, r, n)
        }
        function l(e) {
          for (var r = new Array(e.length), n = 0; n < e.length; n++)
            r[n] = e.charCodeAt(n) - 32
          return r
        }
        function d(e) {
          if ('string' == typeof e) return e
          var r = ''
          for (var n in e) r += d(e[n])
          return r
        }
        if (
          (r = (function e(r) {
            var n,
              t,
              $ = g[r],
              u = 0,
              a = [],
              c = $.length,
              s = [],
              o = [],
              i = 65 * b + r,
              l = x[i]
            if (l) return (b = l.nextPos), l.result
            for (;;) {
              for (; u < c; )
                switch ($[u]) {
                  case 0:
                    o.push(h[$[u + 1]]), (u += 2)
                    break
                  case 1:
                    o.push(void 0), u++
                    break
                  case 2:
                    o.push(null), u++
                    break
                  case 3:
                    o.push(f), u++
                    break
                  case 4:
                    o.push([]), u++
                    break
                  case 5:
                    o.push(b), u++
                    break
                  case 6:
                    o.pop(), u++
                    break
                  case 7:
                    ;(b = o.pop()), u++
                    break
                  case 8:
                    ;(o.length -= $[u + 1]), (u += 2)
                    break
                  case 9:
                    o.splice(-2, 1), u++
                    break
                  case 10:
                    o[o.length - 2].push(o.pop()), u++
                    break
                  case 11:
                    o.push(o.splice(o.length - $[u + 1], $[u + 1])), (u += 2)
                    break
                  case 12:
                    o.push(p.substring(o.pop(), b)), u++
                    break
                  case 13:
                    s.push(c),
                      a.push(u + 3 + $[u + 1] + $[u + 2]),
                      o[o.length - 1]
                        ? ((c = u + 3 + $[u + 1]), (u += 3))
                        : ((c = u + 3 + $[u + 1] + $[u + 2]),
                          (u += 3 + $[u + 1]))
                    break
                  case 14:
                    s.push(c),
                      a.push(u + 3 + $[u + 1] + $[u + 2]),
                      o[o.length - 1] === f
                        ? ((c = u + 3 + $[u + 1]), (u += 3))
                        : ((c = u + 3 + $[u + 1] + $[u + 2]),
                          (u += 3 + $[u + 1]))
                    break
                  case 15:
                    s.push(c),
                      a.push(u + 3 + $[u + 1] + $[u + 2]),
                      o[o.length - 1] !== f
                        ? ((c = u + 3 + $[u + 1]), (u += 3))
                        : ((c = u + 3 + $[u + 1] + $[u + 2]),
                          (u += 3 + $[u + 1]))
                    break
                  case 16:
                    o[o.length - 1] !== f
                      ? (s.push(c), a.push(u), (c = u + 2 + $[u + 1]), (u += 2))
                      : (u += 2 + $[u + 1])
                    break
                  case 17:
                    s.push(c),
                      a.push(u + 3 + $[u + 1] + $[u + 2]),
                      p.length > b
                        ? ((c = u + 3 + $[u + 1]), (u += 3))
                        : ((c = u + 3 + $[u + 1] + $[u + 2]),
                          (u += 3 + $[u + 1]))
                    break
                  case 18:
                    s.push(c),
                      a.push(u + 4 + $[u + 2] + $[u + 3]),
                      p.substr(b, h[$[u + 1]].length) === h[$[u + 1]]
                        ? ((c = u + 4 + $[u + 2]), (u += 4))
                        : ((c = u + 4 + $[u + 2] + $[u + 3]),
                          (u += 4 + $[u + 2]))
                    break
                  case 19:
                    s.push(c),
                      a.push(u + 4 + $[u + 2] + $[u + 3]),
                      p.substr(b, h[$[u + 1]].length).toLowerCase() ===
                      h[$[u + 1]]
                        ? ((c = u + 4 + $[u + 2]), (u += 4))
                        : ((c = u + 4 + $[u + 2] + $[u + 3]),
                          (u += 4 + $[u + 2]))
                    break
                  case 20:
                    s.push(c),
                      a.push(u + 4 + $[u + 2] + $[u + 3]),
                      h[$[u + 1]].test(p.charAt(b))
                        ? ((c = u + 4 + $[u + 2]), (u += 4))
                        : ((c = u + 4 + $[u + 2] + $[u + 3]),
                          (u += 4 + $[u + 2]))
                    break
                  case 21:
                    o.push(p.substr(b, $[u + 1])), (b += $[u + 1]), (u += 2)
                    break
                  case 22:
                    o.push(h[$[u + 1]]), (b += h[$[u + 1]].length), (u += 2)
                    break
                  case 23:
                    o.push(f), 0 === k && E(h[$[u + 1]]), (u += 2)
                    break
                  case 24:
                    o[o.length - 1 - $[u + 1]], (u += 2)
                    break
                  case 25:
                    u++
                    break
                  case 26:
                    for (
                      n = $.slice(u + 4, u + 4 + $[u + 3]), t = 0;
                      t < $[u + 3];
                      t++
                    )
                      n[t] = o[o.length - 1 - n[t]]
                    o.splice(
                      o.length - $[u + 2],
                      $[u + 2],
                      h[$[u + 1]].apply(null, n)
                    ),
                      (u += 4 + $[u + 3])
                    break
                  case 27:
                    o.push(e($[u + 1])), (u += 2)
                    break
                  case 28:
                    k++, u++
                    break
                  case 29:
                    k--, u++
                    break
                  default:
                    throw new Error('Invalid opcode: ' + $[u] + '.')
                }
              if (!(0 < s.length)) break
              ;(c = s.pop()), (u = a.pop())
            }
            return (x[i] = { nextPos: b, result: o[0] }), o[0]
          })(t)) !== f &&
          b === p.length
        )
          return r
        throw (
          (r !== f && b < p.length && E({ type: 'end' }),
          i(
            a,
            u < p.length ? p.charAt(u) : null,
            u < p.length ? o(u, u + 1) : o(u, u)
          ))
        )
      },
    }
  )
})()

var ma_klesi_lo_valsi = function (str) {
  var j = ['', '']
  if (!window.xuzganalojudri || str.search(/[^aeiouyAEIOY]'/) > -1) return j
  try {
    j = cmaxes.parse(str.toLowerCase())
    j = JSON.stringify(j)
    j = j.split(/","|\],\[/).map(function (i) {
      return i.replace(/[^,a-zA-Z']/g, '')
    })
    if (str.indexOf(' zei ') > -1) return ['zei-lujvo', str]
  } catch (e) {}
  if (
    j.length > 2 &&
    j
      .filter(function (el, index) {
        return index % 2 === 0
      })
      .toString()
      .match(/^cmavo(,cmavo)+$/)
  ) {
    return [
      'cmavo compound',
      j
        .filter(function (el, index) {
          return index % 2 === 1
        })
        .join(' '),
    ]
  }
  return j
}

function ma_ve_lujvo(a) {
  if (!window.xuzganalojudri) return
  if (a.indexOf(' zei ') > -1) return ['@'].concat(a.split(' '))
  var t
  try {
    t = cmaxes.parse(a).toString().split(',')
  } catch (err) {
    return
  }
  if (t[0] !== 'lujvo' || t.length !== 2) return
  return t[1].split('-')
}

var rafsi = {}
for (var cmima in sorcu[bau]) {
  var c = sorcu[bau][cmima]
  var i = (c['r'] || []).length
  while (i--) {
    rafsi[c['r'][i]] = c
    rafsi[c['r'][i]]['w'] = cmima
  }
  if (c['t'] === 'gismu' || c['t'] === "fu'ivla") {
    rafsi[cmima] = c
    rafsi[cmima]['w'] = cmima
  }
}

function setca_lotcila(doc) {
  if (!doc.t || doc.t === '') {
    if (!window.muplis && window.xuzganalojudri) {
      doc.t = ma_klesi_lo_valsi(doc.w)[0]
    } else {
      doc.t = ''
    }
  }
  return doc
}

window.storecache = {}
for (var i in sorcu[bau]) {
  window.storecache[i] =
    i +
    ';' +
    Object.keys(sorcu[bau][i])
      .map(function (n) {
        return sorcu[bau][i][n]
      })
      .join(';')
      .toLowerCase()
  window.storecache[i] += ';' + window.storecache[i].replace(/h/g, "'")
}

function sisku(data, callback) {
  var query = data.query
  var seskari = data.seskari
  var decomposed = false
  if (query.length === 0) return
  var secupra_vreji = []
  var query_apos = query.replace(/[h‘]/g, "'").toLowerCase()
  var queryDecomposition = decompose(query_apos)
  var kij = []
  var ki = []
  var mapti_vreji = []

  function decompose(a) {
    return window.xuzganalojudri
      ? a
          .replace(/ zei /g, '_zei_')
          .split(' ')
          .map(function (b) {
            return b.replace(/_zei_/g, ' zei ')
          })
      : a.split(' ')
  }

  function julne_setca_lotcila(a) {
    return a.reduce(function (b, n) {
      if (n) b.push(setca_lotcila(n))
      return b
    }, [])
  }

  function sohivalsi(queryDecomposition, e, lu) {
    var kd = []
    var o
    for (var s = 0; s < queryDecomposition.length; s++) {
      for (var c = queryDecomposition.length - 1; c >= s; c--) {
        o = queryDecomposition.slice(s, c + 1).join(' ')
        if (!e || (e === 1 && o !== lu)) {
          kd = shortget(o, kd)
        }
      }
    }
    return kd
  }

  function jmina_ro_cmima_be_lehivalsi(query_string, doc) {
    var luj = ma_ve_lujvo(query_string)
    if (!luj) return doc ? [doc] : []
    var kim = []
    if (luj[0] === '@') {
      luj.shift()
      kim = luj.slice().map((i) => {
        return { w: i, d: { nasezvafahi: true } }
      })
      for (var def in sorcu[bau]) {
        for (var j = 0; j < luj.length; j++) {
          if (def === luj[j]) {
            kim[j] = sorcu[bau][def]
            kim[j]['w'] = def
          }
        }
      }
    } else {
      for (var ji in luj) {
        var rf = rafsi[luj[ji]]
        if (rf) {
          kim.push(rf)
        } else if (luj[ji].length > 2) {
          kim = kim.concat([
            {
              t: '',
              d: { nasezvafahi: true },
              w: luj[ji],
              r: [luj[ji]],
            },
          ])
        }
      }
    }
    var aw = julne_setca_lotcila(kim) // .filter(function(i){return !i.d.nasezvafahi});
    return [
      {
        t: aw.length > 0 ? 'lujvo' : ma_klesi_lo_valsi(query)[0],
        w: query,
        d: { nasezvafahi: true },
        rafsiDocuments: aw,
      },
    ]
  }

  function sortthem(mapti_vreji, multi) {
    var ui = [[], [], [], [], [], [], [], [], [], []]
    for (var i = 0; i < mapti_vreji.length; i++) {
      start = new Date()
      var doc = setca_lotcila(mapti_vreji[i]) // todo: optimize for phrases
      if (doc) {
        if (doc.w === query || doc.w === query_apos) {
          doc.rafsiDocuments = JSON.parse(
            JSON.stringify(julne_setca_lotcila(sohivalsi(decompose(doc.w))))
          ).filter(function (i) {
            return i.w !== doc.w
          })
          decomposed = true
          if (doc.rafsiDocuments.length === 0) {
            doc.rafsiDocuments = jmina_ro_cmima_be_lehivalsi(
              doc.w,
              doc
            )[0].rafsiDocuments
          }
          ui[0].push(doc)
        } else if (doc.g && doc.g.search('^' + query + '(;|$)') === 0) {
          ui[1].push(doc)
        } else if (
          doc.r &&
          doc.r.join(' ').search('\\b' + query + '\\b') >= 0
        ) {
          ui[5].push(doc)
        } else if (
          doc.w.search('(^| )(' + query_apos + '|' + query + ')( |$)') >= 0
        ) {
          ui[2].push(doc)
        } else if (doc.s && doc.s === query) {
          ui[3].push(doc)
        } else if (doc.s && doc.s.indexOf(query) === 0) {
          ui[9].push(doc)
        } else if (
          (doc.g && doc.g.search('\\b' + query + '\\b') >= 0) ||
          doc.w.search('\\b(' + query_apos + '|' + query + ')') >= 0 ||
          doc.w.search('(' + query_apos + '|' + query + ')\\b') >= 0
        ) {
          ui[4].push(doc)
        } else if (
          doc.d &&
          doc.d.toLowerCase().search('^' + query + '\\b') >= 0
        ) {
          ui[8].push(doc)
        } else if (
          doc.d &&
          doc.d.toLowerCase().search('\\b' + query + '\\b') >= 0
        ) {
          ui[6].push(doc)
        } else {
          ui[7].push(doc)
        }
      }
    }
    // if (ui[0].length === 0 && !multi) {
    // secupra_vreji = jmina_ro_cmima_be_lehivalsi(query) || [];
    // }
    var sortArray = function (ar) {
      if (ar.length === 0) return ar
      var gism = []
      var cmav = []
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar.splice(c, 1)[0])
        }
      }
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'cmavo') {
          cmav.push(ar.splice(c, 1)[0])
        }
      }
      var g = gism.sort(sortMultiDimensional)
      var c = cmav.sort(sortMultiDimensional)
      var drata = ar.sort(sortMultiDimensional)
      return seskari === 'catni'
        ? [g.concat(c), drata]
        : g.concat(c).concat(drata)
    }
    var sortMultiDimensional = function (a, b) {
      if (!a.d) a.d = ''
      if (!b.d) b.d = ''
      return a.d.length < b.d.length ? -1 : a.d.length > b.d.length ? 1 : 0
    }
    ui = ui.map(function (i) {
      return sortArray(i)
    })
    var firstMatches
    var secondMatches
    if (seskari === 'catni') {
      firstMatches = secupra_vreji.concat(ui[0][0], ui[1][0])
      secondMatches = ui[3][0].concat(
        ui[9][0],
        ui[5][0],
        ui[2][0],
        ui[4][0],
        ui[8][0],
        ui[6][0],
        ui[7][0],
        ui[0][1],
        ui[1][1],
        ui[3][1],
        ui[9][1],
        ui[5][1],
        ui[2][1],
        ui[4][1],
        ui[8][1],
        ui[6][1],
        ui[7][1]
      )
    } else {
      firstMatches = secupra_vreji.concat(ui[0], ui[1])
      secondMatches = ui[3].concat(
        ui[9],
        ui[5],
        ui[2],
        ui[4],
        ui[8],
        ui[6],
        ui[7]
      )
    }
    if (firstMatches && firstMatches.w === query_apos) {
      for (var a = 1; a < firstMatches.length; a++) {
        if (firstMatches[a].l && firstMatches[a].d === '{' + query_apos + '}') {
          firstMatches.splice(a, 1)
          --a
        }
      }
    }
    return [firstMatches.concat(secondMatches), firstMatches, secondMatches]
  }

  function shortget(a, ki, shi) {
    var isdef = Object.keys(sorcu[bau]).reduce(function (b, n) {
      if (
        n.toLowerCase() === a.toLowerCase() ||
        (sorcu[bau][n]['d'] &&
          sorcu[bau][n]['d'].toLowerCase() === '{' + a.toLowerCase() + '}')
      ) {
        var c = sorcu[bau][n]
        c['w'] = n
        b.push(c)
      }
      return b
    }, [])

    if (isdef && isdef.length > 0) {
      ki = ki.concat(isdef)
    } else {
      if (!shi) {
        if (a.replace(/ zei /g, '-zei-').split(' ').length === 1) {
          var ye = ma_klesi_lo_valsi(a)
          if (ye[0] === 'cmavo compound' || ye[0] === 'zei-lujvo') {
            ye = ye[1].split(' ')
            for (var jj in ye) {
              ki = shortget(ye[jj], ki, 2)
            }
          } else if (ye[0] !== '') {
            var ye = ye.filter(function (element, index, array) {
              return index % 2 !== 0
            })
            for (var jj in ye) {
              ki = shortget(ye[jj].replace(/-/g, ''), ki, 2)
            }
          }
        } else {
          var luj = ma_ve_lujvo(a)
          if (((luj || [])[0] || '') === '@') {
            luj.shift()
            var kim = []
            kim = luj.slice()
            for (var def in sorcu[bau]) {
              for (var j = 0; j < luj.length; j++) {
                if (def === luj[j]) {
                  kim[j] = sorcu[bau][def]
                  kim[j]['w'] = def
                }
              }
            }
            ki.concat(kim)
          } else if (luj) {
            for (var ji in luj) {
              ki.push(rafsi[luj[ji]])
            }
          }
        }
      } else {
        var ff = jmina_ro_cmima_be_lehivalsi(a)
        ff = ff[0] && ff[0].rafsiDocuments ? ff[0].rafsiDocuments : undefined
        ki = ki.concat([
          { t: '', d: { nasezvafahi: true }, w: a, rafsiDocuments: ff },
        ])
      }
    }
    return ki
  }

  function cnanosisku(mapti_vreji, multi) {
    for (var n in sorcu[bau]) {
      if (window.storecache[n].indexOf(query.toLowerCase()) >= 0) {
        var c = sorcu[bau][n]
        c['w'] = n
        mapti_vreji.push(c)
      }
    }
    var allMatches = sortthem(mapti_vreji, multi)
    if (multi) return allMatches[0]
    if (allMatches[0].length === 0) {
      allMatches[0] = jmina_ro_cmima_be_lehivalsi(query) || []
    }
    if (allMatches[0].length === 0 || allMatches[0][0].w !== query_apos) {
      var ty = /^[A-Zh]+[0-9\*]+$/.test(query)
        ? []
        : julne_setca_lotcila(shortget(query_apos, []))
      if (window.muplis || !window.xuzganalojudri) {
        ty = ty.filter(function (i) {
          return !i.d || !i.d.nasezvafahi
        })
      }
      if (ty.length <= 1) return ty.concat(allMatches[0])
      return allMatches[1].concat(
        [
          {
            t: window.bangudecomp,
            ot: "vlaza'umei",
            w: query,
            rafsiDocuments: ty,
          },
        ],
        allMatches[2]
      )
    }
    return allMatches[0]
  }

  if (query.indexOf('^') === 0 || query.slice(-1) === '$') {
    secupra_vreji = julne_setca_lotcila(
      sortthem(
        Object.keys(sorcu[bau])
          .reduce(function (b, n) {
            if ((n.match(query.toLowerCase()) || []).length > 0) {
              var c = sorcu[bau][n]
              c['w'] = n
              b.push(c)
            }
            return b
          }, [])
          .splice(0, 200)
      )[0]
    )
  } else if (seskari === 'rimni') {
    secupra_vreji = siskurimni(query)
  } else if (!window.muplis && queryDecomposition.length > 1) {
    secupra_vreji = cnanosisku(mapti_vreji, true)
    if (!decomposed) {
      secupra_vreji.push({
        t: window.bangudecomp,
        ot: "vlaza'umei",
        w: query,
        rafsiDocuments: julne_setca_lotcila(sohivalsi(queryDecomposition)),
      })
    }
    decomposed = false
  } else {
    secupra_vreji = cnanosisku(mapti_vreji)
  }
  callback(secupra_vreji)
}

function krulermorna(t) {
  return (
    '.' +
    t
      .replace(/\./g, '')
      .replace(/^/, '.')
      .replace(/h/g, "'")
      .toLowerCase()
      .replace(/([aeiou\.])u([aeiou])/g, '$1w$2')
      .replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2')
      .replace(/au/g, 'ḁ')
      .replace(/ai/g, 'ą')
      .replace(/ei/g, 'ę')
      .replace(/oi/g, 'ǫ')
      .replace(/\./g, '')
  )
}

function siskurimni(query) {
  if (query.length === 0) return
  var rimni = [[], [], [], [], [], [], [], [], []]
  var query_apos, queryF, queryR
  function cupra_lo_porsi(a) {
    for (var i = 0; i < a.length; i++) {
      var doc = setca_lotcila(a[i]) // todo: optimize for phrases
      if (!doc) continue
      var docw = krulermorna(doc.w)
        .replace(/([aeiouḁąęǫ])/g, '$1-')
        .split('-')
        .slice(-3)
      if (queryR && docw[0].slice(-1) !== queryR[0].slice(-1)) continue
      var right = docw[1].slice(-1)
      var reversal =
        docw[1].slice(-3, -1) ===
        queryF[1].slice(-3, -1).split('').reverse().join('')
      var left = queryF[1].slice(-1)
      var sli = false
      if (
        (left === 'a' && right.search('[eao]') >= 0) ||
        (left === 'e' && right.search('[iea]') >= 0) ||
        (left === 'i' && right.search('[ie]') >= 0) ||
        (left === 'o' && right.search('[aou]') >= 0) ||
        (left === 'u' && right.search('[aou]') >= 0)
      ) {
        sli = true
      }
      if (krulermorna(doc.w) === query) {
        rimni[0].push(doc)
        continue
      } else if (queryR[2]) {
        if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          left === right &&
          docw[2] === queryR[2]
        ) {
          rimni[1].push(doc)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          sli &&
          docw[2] === queryR[2]
        ) {
          rimni[2].push(doc)
        } else if (
          (docw[1].match(regexify(queryR[2])) || []).length > 0 &&
          left === right &&
          docw[2] === queryR[2]
        ) {
          rimni[3].push(doc)
        } else if (
          (docw[1].match(regexify(queryR[2])) || []).length > 0 &&
          sli &&
          docw[2] === queryR[2]
        ) {
          rimni[4].push(doc)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          sli &&
          reversal &&
          docw[2] === queryR[2]
        ) {
          rimni[5].push(doc)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          docw[2] === queryR[2]
        ) {
          rimni[6].push(doc)
        }
      } else if (
        queryR[1] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0
      ) {
        rimni[7].push(doc)
      } else {
        rimni[8].push(doc)
      }
    }
    var sortMultiDimensional = function (a, b) {
      return (a.d || '').length < (b.d || '').length
        ? -1
        : (a.d || '').length > (b.d || '').length
        ? 1
        : 0
    }
    var sortArray = function (ar) {
      if (ar.length === 0) return []
      var gism = []
      var expgism = []
      var cmav = []
      var expcmav = []
      var drata = []
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar[c])
        } else if (ar[c].t === 'experimental gismu') {
          expgism.push(ar[c])
        } else if (ar[c].t === 'cmavo') {
          cmav.push(ar[c])
        } else if (ar[c].t === 'experimental cmavo') {
          expcmav.push(ar[c])
        } else {
          drata.push(ar[c])
        }
      }
      return gism
        .sort(sortMultiDimensional)
        .concat(
          expgism.sort(sortMultiDimensional),
          cmav.sort(sortMultiDimensional),
          expcmav.sort(sortMultiDimensional),
          drata.sort(sortMultiDimensional)
        )
    }

    return rimni.reduce(function (list, x) {
      return list.concat(sortArray(x))
    }, [])
  }

  var regexify = function (t) {
    return t
      .replace(/[lmnr]/g, '[lmnr]')
      .replace(/[ɩw]/g, '[ɩw]')
      .replace(/[pb]/g, '[pb]')
      .replace(/[fv]/g, '[fv]')
      .replace(/[td]/g, '[td]')
      .replace(/[sz]/g, '[sz]')
      .replace(/[cj]/g, '[cj]')
      .replace(/[kg]/g, '[kg]')
      .replace(/x/g, '[xk]')
  }

  queryR = krulermorna(query)
    .replace(/([aeiouḁąęǫ])/g, '$1-')
    .split('-')
    .slice(-3)
  queryF = queryR.slice()
  if (queryR.length >= 2) {
    queryR[1] = queryR[1].replace(/[aeiouḁąęǫ]/, '[aeiouḁąęǫ]')
  }
  var r = /.*([aeiouḁąęǫ])/.exec(queryR[0])
  if (r === null) return []
  queryR[0] = r[1]
  if (queryR.length === 2) {
    r = Object.keys(sorcu[bau]).reduce(function (b, n) {
      var queryRn = krulermorna(n)
        .replace(/([aeiouḁąęǫ])/g, '$1-')
        .split('-')
        .slice(-3)
      if (
        queryRn.length === 2 &&
        queryRn[0].split('').slice(-1)[0] === queryR[0].split('').slice(-1)[0]
      ) {
        var c = sorcu[bau][n]
        c['w'] = n
        c = setca_lotcila(c)
        if (c) b.push(c)
      }
      return b
    }, [])
  } else {
    query_apos = regexify(queryR.join(''))
    r = Object.keys(sorcu[bau]).reduce(function (b, n) {
      if (
        (krulermorna(n).match(query_apos.toLowerCase() + '$') || []).length > 0
      ) {
        var c = sorcu[bau][n]
        c['w'] = n
        b.push(c)
      }
      return b
    }, [])
  }
  return cupra_lo_porsi(r)
}
