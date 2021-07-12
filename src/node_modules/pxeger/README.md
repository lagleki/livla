# Pxereg

Pxereg (regexp inversed) is a little package allowing to generate all possible string from a regexp source string. The pxeger grammar does not follow exactly the regexp one, so some features may be missing, but it should cover most of use cases.

## Usage

### In node

```
# npm install pxeger
```

```js
var Pxeger = require( 'pxeger' );

console.log( Pxeger.reverse( 'fo{2,5}' ) );
```

### In browser

Download **pxeger.min.js** somewhere then :

```
console.log( Pxeger.reverse( 'fo{2,5}' ) );
```

## Unsupported feature

These features cannot work with Pxereg :

- `*` modifier, because it is not bounded, and would generate infinite strings
- `+` modifier, for the same reason
- `{N,}` modifier, for the same reason

These features would be nice but are not implemented and may never be :

- Backward references
- `[^N]`, I don't really see the point in this kind of library ?
- `[[:blank:]]`, it wouldn't be hard to do but I don't have the time right now

Pull requests are welcome. If you wish to tweak the grammar, feel free to use my [PEG.js online editor](http://peg.arcanis.fr/), which has been used to write this package.

## License (MIT)

Copyright &copy; 2014 Maël Nison

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
