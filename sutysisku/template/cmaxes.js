var cmaxes =
  /*
   * Generated by PEG.js 0.10.0.
   *
   * http://pegjs.org/
   */
  (function () {
    'use strict'

    function peg$subclass(child, parent) {
      function ctor() {
        this.constructor = child
      }
      ctor.prototype = parent.prototype
      child.prototype = new ctor()
    }

    function peg$SyntaxError(message, expected, found, location) {
      this.message = message
      this.expected = expected
      this.found = found
      this.location = location
      this.name = 'SyntaxError'

      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, peg$SyntaxError)
      }
    }

    peg$subclass(peg$SyntaxError, Error)

    peg$SyntaxError.buildMessage = function (expected, found) {
      var DESCRIBE_EXPECTATION_FNS = {
        literal: function (expectation) {
          return '"' + literalEscape(expectation.text) + '"'
        },

        class: function (expectation) {
          var escapedParts = '',
            i

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts +=
              expectation.parts[i] instanceof Array
                ? classEscape(expectation.parts[i][0]) +
                  '-' +
                  classEscape(expectation.parts[i][1])
                : classEscape(expectation.parts[i])
          }

          return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']'
        },

        any: function (expectation) {
          return 'any character'
        },

        end: function (expectation) {
          return 'end of input'
        },

        other: function (expectation) {
          return expectation.description
        },
      }

      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase()
      }

      function literalEscape(s) {
        return s
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g, function (ch) {
            return '\\x0' + hex(ch)
          })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
            return '\\x' + hex(ch)
          })
      }

      function classEscape(s) {
        return s
          .replace(/\\/g, '\\\\')
          .replace(/\]/g, '\\]')
          .replace(/\^/g, '\\^')
          .replace(/-/g, '\\-')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g, function (ch) {
            return '\\x0' + hex(ch)
          })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
            return '\\x' + hex(ch)
          })
      }

      function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation)
      }

      function describeExpected(expected) {
        var descriptions = new Array(expected.length),
          i,
          j

        for (i = 0; i < expected.length; i++) {
          descriptions[i] = describeExpectation(expected[i])
        }

        descriptions.sort()

        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i]
              j++
            }
          }
          descriptions.length = j
        }

        switch (descriptions.length) {
          case 1:
            return descriptions[0]

          case 2:
            return descriptions[0] + ' or ' + descriptions[1]

          default:
            return (
              descriptions.slice(0, -1).join(', ') +
              ', or ' +
              descriptions[descriptions.length - 1]
            )
        }
      }

      function describeFound(found) {
        return found ? '"' + literalEscape(found) + '"' : 'end of input'
      }

      return (
        'Expected ' +
        describeExpected(expected) +
        ' but ' +
        describeFound(found) +
        ' found.'
      )
    }

    function peg$parse(input, options) {
      options = options !== void 0 ? options : {}

      var peg$FAILED = {},
        peg$startRuleIndices = { text: 0 },
        peg$startRuleIndex = 0,
        peg$consts = [
          function (expr) {
            return _node_int(expr)
          },
          function (expr) {
            return expr
          },
          function (expr) {
            return ['cmavo', _join(expr)]
          },
          function (expr) {
            return ['gismu', _join(expr)]
          },
          function (expr) {
            return ['lujvo', _join(expr)]
          },
          function (expr) {
            return ["fu'ivla", _join(expr)]
          },
          function (expr) {
            return ['cmevla', _join(expr)]
          },
          function (expr) {
            return [_join(expr), '-']
          },
          function (expr) {
            return [_join(expr)]
          },
          function (expi, exp) {
            return [_join(expi), '-', _join(exp)]
          },
          function (exp, expr) {
            return [_join(exp), '-', _join(expr)]
          },
          function (exp, expr) {
            return [_join(exp), '-', _join(expr)]
          },
          function (exp, expr) {
            return [_join(exp), '-', _join(expr)]
          },
          /^[a]/,
          peg$classExpectation(['a'], false, false),
          /^[aeo]/,
          peg$classExpectation(['a', 'e', 'o'], false, false),
          /^[aeiou]/,
          peg$classExpectation(['a', 'e', 'i', 'o', 'u'], false, false),
          /^[i]/,
          peg$classExpectation(['i'], false, false),
          /^[u]/,
          peg$classExpectation(['u'], false, false),
          /^[y]/,
          peg$classExpectation(['y'], false, false),
          /^[i\u0269]/,
          peg$classExpectation(['i', '\u0269'], false, false),
          /^[uw]/,
          peg$classExpectation(['u', 'w'], false, false),
          function () {
            return ['u', '']
          },
          /^[l]/,
          peg$classExpectation(['l'], false, false),
          /^[m]/,
          peg$classExpectation(['m'], false, false),
          /^[n]/,
          peg$classExpectation(['n'], false, false),
          /^[r]/,
          peg$classExpectation(['r'], false, false),
          /^[pfbgvkx]/,
          peg$classExpectation(
            ['p', 'f', 'b', 'g', 'v', 'k', 'x'],
            false,
            false
          ),
          /^[d]/,
          peg$classExpectation(['d'], false, false),
          /^[jz]/,
          peg$classExpectation(['j', 'z'], false, false),
          /^[cs]/,
          peg$classExpectation(['c', 's'], false, false),
          /^[x]/,
          peg$classExpectation(['x'], false, false),
          /^[t]/,
          peg$classExpectation(['t'], false, false),
          /^[,']/,
          peg$classExpectation([',', "'"], false, false),
          /^[}]/,
          peg$classExpectation(['}'], false, false),
          peg$anyExpectation(),
          /^[^a-za-z,']/,
          peg$classExpectation([['a', 'z'], ['a', 'z'], ',', "'"], true, false),
          function (expr) {
            return ['drata', _join(expr)]
          },
          /^[^ ]/,
          peg$classExpectation([' '], true, false),
        ],
        peg$bytecode = [
          peg$decode("%$;!0#*;!&/' 8!: !! )"),
          peg$decode('%;"/\' 8!:!!! )'),
          peg$decode(
            ";_.\xEE &;#.\xE8 &%;'/' 8!:\"!! ).\xD6 &%;$/' 8!:#!! ).\xC4 &%%%<;$=.##&&!&'#/\x90#%<;&=.##&&!&'#/{$%<;'=.##&&!&'#/f$%<%;6/>#;\\/5$;K/,$;D/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:$!! )./ &%;&/' 8!:%!! )"
          ),
          peg$decode(
            "%%%<;,=/##&'!&&#/N#$;@/&#0#*;@&&&#/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#.# &;,/' 8!:&!! )"
          ),
          peg$decode(
            "%;</k#%<;?=/##&'!&&#/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            "%;+/Q#;A/H$%<;?=/##&'!&&#/3$$;B0#*;B&/#$+$)($'#(#'#(\"'#&'#"
          ),
          peg$decode('%;%/,#;>/#$+")("\'#&\'#'),
          peg$decode(
            "%%<;#=.##&&!&'#/\u0172#%<%;4/X#%<;?=.##&&!&'#/C$;K/:$;\\.\" &\"/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#.T &%;4/J#%<;?=/##&'!&&#/5$;K/,$;:/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/\xE7$%%<;\\=.##&&!&'#/\xA0#%<%;P/9#$;P/&#0#*;P&&&#/#$+\")(\"'#&'#=.##&&!&'#/k$;D/b$$%;E/,#;\\/#$+\")(\"'#&'#06*%;E/,#;\\/#$+\")(\"'#&'#&/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#.0 &$;K/&#0#*;K&&&#/8$%<;]=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            "%$%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )0u*%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )&/\x8E#%;&.# &;9/' 8!:(!! ).m &%;2.N &;-.H &;/.B &%;7/8#%<;?=/##&'!&&#/#$+\")(\"'#&'#/2#;:/)$8\":)\"\"! )(\"'#&'#/#$+\")(\"'#&'#"
          ),
          peg$decode(';&.) &;..# &;-'),
          peg$decode(
            "%$;10#*;1&/\xE2#;9.\xD3 &%;7/V#%<;?=/##&'!&&#/A$%<;K=.##&&!&'#/,$;:/#$+$)($'#(#'#(\"'#&'#.\x90 &;0.\x8A &;/.\x84 &%%;7/M#%<;?=/##&'!&&#/8$%<;K=.##&&!&'#/#$+#)(#'#(\"'#&'#.\" &\"/5#;N/,$;K/#$+#)(#'#(\"'#&'#.) &;3.# &;2/#$+\")(\"'#&'#"
          ),
          peg$decode(
            "%%<;*=.##&&!&'#/\xAF#%<;'=.##&&!&'#/\x9A$%<%%<;*=.##&&!&'#/5#;P/,$;*/#$+#)(#'#(\"'#&'#=.##&&!&'#/]$%<;\\=.##&&!&'#/H$%<;D=/##&'!&&#/3$$;;0#*;;&/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            "%%<;\\=.##&&!&'#/\xB3#$;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#0T*;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#&/A$;P/8$%<;^=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            '%;%/E#%;\\/,#;K/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#.O &%%;%/,#;D/#$+")("\'#&\'#/2#;K/)$8":+""! )("\'#&\'#'
          ),
          peg$decode(
            '%%<;;=/##&\'!&&#/N#;+/E$%;\\/,#;K/#$+")("\'#&\'#/)$8#:*#"! )(#\'#("\'#&\'#.g &%%;+/,#;D/#$+")("\'#&\'#/J#%;K/1#;\\." &"/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#'
          ),
          peg$decode(
            "%;<.# &;4/G#%<;?=/##&'!&&#/2$;K/)$8#:*#\"\" )(#'#(\"'#&'#"
          ),
          peg$decode(
            '%%;<.# &;4/8#%<;?=.##&&!&\'#/#$+")("\'#&\'#/J#%;K/1#;\\." &"/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#'
          ),
          peg$decode(
            "%%<;0=.##&&!&'#/\xAA#%<;/=.##&&!&'#/\x95$%<;3=.##&&!&'#/\x80$%<;2=.##&&!&'#/k$;7/b$%<;?=.##&&!&'#/M$%<;K=.##&&!&'#/8$%<;\\=.##&&!&'#/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            "%%;</,#;H/#$+\")(\"'#&'#.# &;7/Z#%<;?=/##&'!&&#/E$%;\\/,#;K/#$+\")(\"'#&'#/)$8#:*#\"\" )(#'#(\"'#&'#"
          ),
          peg$decode(
            '%%;</,#;H/#$+")("\'#&\'#.# &;7/h#%%<;?=.##&&!&\'#/C#;\\/:$;K/1$;\\." &"/#$+$)($\'#(#\'#("\'#&\'#/)$8":,""! )("\'#&\'#'
          ),
          peg$decode('%;=/,#;P/#$+")("\'#&\'#'),
          peg$decode(';4.# &;6'),
          peg$decode('%;N/,#;H/#$+")("\'#&\'#'),
          peg$decode(';5.# &;8'),
          peg$decode(
            "%%;P/c#%;H/J#%<;?=.##&&!&'#/5$;\\/,$;H/#$+$)($'#(#'#(\"'#&'#.# &;G/#$+\")(\"'#&'#/{#%;U/8#%<;P=/##&'!&&#/#$+\")(\"'#&'#.B &%;T/8#%<;U=/##&'!&&#/#$+\")(\"'#&'#.\" &\"/)$8\":*\"\"! )(\"'#&'#"
          ),
          peg$decode(
            ";$.~ &%;=/t#%<;?=/##&'!&&#/_$;\\/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            "%%<;>=/##&'!&&#/Z#%;P/,#;G/#$+\")(\"'#&'#.# &;6/8$%<;]=/##&'!&&#/#$+#)(#'#(\"'#&'#"
          ),
          peg$decode("%;A/8#%<;?=.##&&!&'#/#$+\")(\"'#&'#.# &;B"),
          peg$decode('%;5/,#;P/#$+")("\'#&\'#'),
          peg$decode('%;P/,#;H/#$+")("\'#&\'#'),
          peg$decode(
            "%;D/k#%<;K=.##&&!&'#/V$;E/M$%<;#=.##&&!&'#/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"
          ),
          peg$decode(
            '%$;P.# &;F0)*;P.# &;F&/Q#;\\." &"/C$;K." &"/5$;A/,$;^/#$+%)(%\'#($\'#(#\'#("\'#&\'#'
          ),
          peg$decode('%;D/:#;E/1$;C." &"/#$+#)(#\'#("\'#&\'#.# &;B'),
          peg$decode(
            "%;D/O#%<;K=.##&&!&'#/:$;E/1$;C.\" &\"/#$+$)($'#(#'#(\"'#&'#"
          ),
          peg$decode("%;P/A#%<;Q=/##&'!&&#/,$;C/#$+#)(#'#(\"'#&'#"),
          peg$decode(
            "%%<;@=.##&&!&'#/A#;P/8$%<;@=/##&'!&&#/#$+#)(#'#(\"'#&'#.U &%;Q.\" &\"/F#;P.\" &\"/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#"
          ),
          peg$decode(
            ";\\.\u0152 &%;P.\" &\"/,#;F/#$+\")(\"'#&'#.\u0134 &%;O.\xFA &%%;Y/8#%<;Z=.##&&!&'#/#$+\")(\"'#&'#.N &%;X/D#%<;T.) &;R.# &;U=.##&&!&'#/#$+\")(\"'#&'#.\" &\"/\x9B#;V.s &%;[.H &;W.B &%;T/8#%<;U=.##&&!&'#/#$+\")(\"'#&'#/8#%<;R=.##&&!&'#/#$+\")(\"'#&'#.# &;S.\" &\"/7$;R.# &;U.\" &\"/#$+#)(#'#(\"'#&'#/M#%<;P=.##&&!&'#/8$%<;F=.##&&!&'#/#$+#)(#'#(\"'#&'#"
          ),
          peg$decode(";H.H &;G.B &%;K/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"),
          peg$decode("%;L.# &;M/8#%<;E=/##&'!&&#/#$+\")(\"'#&'#"),
          peg$decode(
            "%%4-\"\"5!7./A#;M/8$%<;J=.##&&!&'#/#$+#)(#'#(\"'#&'#.Q &%4/\"\"5!70/A#;L/8$%<;I=.##&&!&'#/#$+#)(#'#(\"'#&'#/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"
          ),
          peg$decode('%41""5!72/8#%<;E=.##&&!&\'#/#$+")("\'#&\'#'),
          peg$decode('43""5!74'),
          peg$decode('45""5!76'),
          peg$decode(
            '%47""5!78/W#%<%%<;K=.##&&!&\'#/,#;E/#$+")("\'#&\'#=.##&&!&\'#/#$+")("\'#&\'#'
          ),
          peg$decode('49""5!7:'),
          peg$decode('%4;""5!7</& 8!:=! )'),
          peg$decode(
            "%%<;D=/##&'!&&#/J#;P/A$;P/8$%<;P=.##&&!&'#/#$+$)($'#(#'#(\"'#&'#"
          ),
          peg$decode('%;[/,#;Y/#$+")("\'#&\'#.6 &%;W/,#;X/#$+")("\'#&\'#'),
          peg$decode(';V.; &;W.5 &;X./ &;Y.) &;[.# &;Q'),
          peg$decode(';R./ &;S.) &;T.# &;U'),
          peg$decode('4>""5!7?'),
          peg$decode('4@""5!7A'),
          peg$decode('%4B""5!7C/8#%<;O=.##&&!&\'#/#$+")("\'#&\'#'),
          peg$decode('4D""5!7E'),
          peg$decode('4F""5!7G'),
          peg$decode('4H""5!7I'),
          peg$decode('4J""5!7K'),
          peg$decode('4L""5!7M'),
          peg$decode('4N""5!7O'),
          peg$decode('4P""5!7Q'),
          peg$decode('%4R""5!7S/8#%<;E=/##&\'!&&#/#$+")("\'#&\'#'),
          peg$decode(';^.N &%%<;E=.##&&!&\'#/,#;"/#$+")("\'#&\'#.) &4T""5!7U'),
          peg$decode(';_.4 &%<1""5!7V=.##&&!&\'#'),
          peg$decode('%$4W""5!7X/,#0)*4W""5!7X&&&#/\' 8!:Y!! )'),
          peg$decode('$4Z""5!7[/,#0)*4Z""5!7[&&&#'),
        ],
        peg$currPos = 0,
        peg$savedPos = 0,
        peg$posDetailsCache = [{ line: 1, column: 1 }],
        peg$maxFailPos = 0,
        peg$maxFailExpected = [],
        peg$silentFails = 0,
        peg$resultsCache = {},
        peg$result

      if ('startRule' in options) {
        if (!(options.startRule in peg$startRuleIndices)) {
          throw new Error(
            'Can\'t start parsing from rule "' + options.startRule + '".'
          )
        }

        peg$startRuleIndex = peg$startRuleIndices[options.startRule]
      }

      function text() {
        return input.substring(peg$savedPos, peg$currPos)
      }

      function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos)
      }

      function expected(description, location) {
        location =
          location !== void 0
            ? location
            : peg$computeLocation(peg$savedPos, peg$currPos)

        throw peg$buildStructuredError(
          [peg$otherExpectation(description)],
          input.substring(peg$savedPos, peg$currPos),
          location
        )
      }

      function error(message, location) {
        location =
          location !== void 0
            ? location
            : peg$computeLocation(peg$savedPos, peg$currPos)

        throw peg$buildSimpleError(message, location)
      }

      function peg$literalExpectation(text, ignoreCase) {
        return { type: 'literal', text: text, ignoreCase: ignoreCase }
      }

      function peg$classExpectation(parts, inverted, ignoreCase) {
        return {
          type: 'class',
          parts: parts,
          inverted: inverted,
          ignoreCase: ignoreCase,
        }
      }

      function peg$anyExpectation() {
        return { type: 'any' }
      }

      function peg$endExpectation() {
        return { type: 'end' }
      }

      function peg$otherExpectation(description) {
        return { type: 'other', description: description }
      }

      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos],
          p

        if (details) {
          return details
        } else {
          p = pos - 1
          while (!peg$posDetailsCache[p]) {
            p--
          }

          details = peg$posDetailsCache[p]
          details = {
            line: details.line,
            column: details.column,
          }

          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++
              details.column = 1
            } else {
              details.column++
            }

            p++
          }

          peg$posDetailsCache[pos] = details
          return details
        }
      }

      function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails = peg$computePosDetails(endPos)

        return {
          start: {
            offset: startPos,
            line: startPosDetails.line,
            column: startPosDetails.column,
          },
          end: {
            offset: endPos,
            line: endPosDetails.line,
            column: endPosDetails.column,
          },
        }
      }

      function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) {
          return
        }

        if (peg$currPos > peg$maxFailPos) {
          peg$maxFailPos = peg$currPos
          peg$maxFailExpected = []
        }

        peg$maxFailExpected.push(expected)
      }

      function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location)
      }

      function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(
          peg$SyntaxError.buildMessage(expected, found),
          expected,
          found,
          location
        )
      }

      function peg$decode(s) {
        var bc = new Array(s.length),
          i

        for (i = 0; i < s.length; i++) {
          bc[i] = s.charCodeAt(i) - 32
        }

        return bc
      }

      function peg$parseRule(index) {
        var bc = peg$bytecode[index],
          ip = 0,
          ips = [],
          end = bc.length,
          ends = [],
          stack = [],
          params,
          i

        var key = peg$currPos * 65 + index,
          cached = peg$resultsCache[key]

        if (cached) {
          peg$currPos = cached.nextPos

          return cached.result
        }

        while (true) {
          while (ip < end) {
            switch (bc[ip]) {
              case 0:
                stack.push(peg$consts[bc[ip + 1]])
                ip += 2
                break

              case 1:
                stack.push(void 0)
                ip++
                break

              case 2:
                stack.push(null)
                ip++
                break

              case 3:
                stack.push(peg$FAILED)
                ip++
                break

              case 4:
                stack.push([])
                ip++
                break

              case 5:
                stack.push(peg$currPos)
                ip++
                break

              case 6:
                stack.pop()
                ip++
                break

              case 7:
                peg$currPos = stack.pop()
                ip++
                break

              case 8:
                stack.length -= bc[ip + 1]
                ip += 2
                break

              case 9:
                stack.splice(-2, 1)
                ip++
                break

              case 10:
                stack[stack.length - 2].push(stack.pop())
                ip++
                break

              case 11:
                stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]))
                ip += 2
                break

              case 12:
                stack.push(input.substring(stack.pop(), peg$currPos))
                ip++
                break

              case 13:
                ends.push(end)
                ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2])

                if (stack[stack.length - 1]) {
                  end = ip + 3 + bc[ip + 1]
                  ip += 3
                } else {
                  end = ip + 3 + bc[ip + 1] + bc[ip + 2]
                  ip += 3 + bc[ip + 1]
                }

                break

              case 14:
                ends.push(end)
                ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2])

                if (stack[stack.length - 1] === peg$FAILED) {
                  end = ip + 3 + bc[ip + 1]
                  ip += 3
                } else {
                  end = ip + 3 + bc[ip + 1] + bc[ip + 2]
                  ip += 3 + bc[ip + 1]
                }

                break

              case 15:
                ends.push(end)
                ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2])

                if (stack[stack.length - 1] !== peg$FAILED) {
                  end = ip + 3 + bc[ip + 1]
                  ip += 3
                } else {
                  end = ip + 3 + bc[ip + 1] + bc[ip + 2]
                  ip += 3 + bc[ip + 1]
                }

                break

              case 16:
                if (stack[stack.length - 1] !== peg$FAILED) {
                  ends.push(end)
                  ips.push(ip)

                  end = ip + 2 + bc[ip + 1]
                  ip += 2
                } else {
                  ip += 2 + bc[ip + 1]
                }

                break

              case 17:
                ends.push(end)
                ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2])

                if (input.length > peg$currPos) {
                  end = ip + 3 + bc[ip + 1]
                  ip += 3
                } else {
                  end = ip + 3 + bc[ip + 1] + bc[ip + 2]
                  ip += 3 + bc[ip + 1]
                }

                break

              case 18:
                ends.push(end)
                ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3])

                if (
                  input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) ===
                  peg$consts[bc[ip + 1]]
                ) {
                  end = ip + 4 + bc[ip + 2]
                  ip += 4
                } else {
                  end = ip + 4 + bc[ip + 2] + bc[ip + 3]
                  ip += 4 + bc[ip + 2]
                }

                break

              case 19:
                ends.push(end)
                ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3])

                if (
                  input
                    .substr(peg$currPos, peg$consts[bc[ip + 1]].length)
                    .toLowerCase() === peg$consts[bc[ip + 1]]
                ) {
                  end = ip + 4 + bc[ip + 2]
                  ip += 4
                } else {
                  end = ip + 4 + bc[ip + 2] + bc[ip + 3]
                  ip += 4 + bc[ip + 2]
                }

                break

              case 20:
                ends.push(end)
                ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3])

                if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                  end = ip + 4 + bc[ip + 2]
                  ip += 4
                } else {
                  end = ip + 4 + bc[ip + 2] + bc[ip + 3]
                  ip += 4 + bc[ip + 2]
                }

                break

              case 21:
                stack.push(input.substr(peg$currPos, bc[ip + 1]))
                peg$currPos += bc[ip + 1]
                ip += 2
                break

              case 22:
                stack.push(peg$consts[bc[ip + 1]])
                peg$currPos += peg$consts[bc[ip + 1]].length
                ip += 2
                break

              case 23:
                stack.push(peg$FAILED)
                if (peg$silentFails === 0) {
                  peg$fail(peg$consts[bc[ip + 1]])
                }
                ip += 2
                break

              case 24:
                peg$savedPos = stack[stack.length - 1 - bc[ip + 1]]
                ip += 2
                break

              case 25:
                peg$savedPos = peg$currPos
                ip++
                break

              case 26:
                params = bc.slice(ip + 4, ip + 4 + bc[ip + 3])
                for (i = 0; i < bc[ip + 3]; i++) {
                  params[i] = stack[stack.length - 1 - params[i]]
                }

                stack.splice(
                  stack.length - bc[ip + 2],
                  bc[ip + 2],
                  peg$consts[bc[ip + 1]].apply(null, params)
                )

                ip += 4 + bc[ip + 3]
                break

              case 27:
                stack.push(peg$parseRule(bc[ip + 1]))
                ip += 2
                break

              case 28:
                peg$silentFails++
                ip++
                break

              case 29:
                peg$silentFails--
                ip++
                break

              default:
                throw new Error('Invalid opcode: ' + bc[ip] + '.')
            }
          }

          if (ends.length > 0) {
            end = ends.pop()
            ip = ips.pop()
          } else {
            break
          }
        }

        peg$resultsCache[key] = { nextPos: peg$currPos, result: stack[0] }

        return stack[0]
      }

      function _join(a) {
        if (typeof a == 'string') return a
        else {
          var r = ''
          for (var v in a) {
            r += _join(a[v])
          }
          return r
        }
      }

      function _node_int(a) {
        if (typeof a == 'string') return a
        var r = []
        for (var v in a) {
          r.push(_node_int(a[v]))
        }
        return r
      }

      peg$result = peg$parseRule(peg$startRuleIndex)

      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$fail(peg$endExpectation())
        }

        throw peg$buildStructuredError(
          peg$maxFailExpected,
          peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
          peg$maxFailPos < input.length
            ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
            : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
        )
      }
    }

    return {
      SyntaxError: peg$SyntaxError,
      parse: peg$parse,
    }
  })()