const fs = require('fs-extra')
const path = require('path-extra')
const SyntacticActionsPlugin = require("pegjs-syntactic-actions");

const fileName = process.argv[2]

const filePathCore = path.join(__dirname, `../mahantufa/${fileName}`)
const text = fs.readFileSync(`${filePathCore}.peg`).toString()

// read peg and build a parser
const generated_parser = require('peggy').generate(text, {
    cache: true,
    trace: false,
    output: 'source',
    allowedStartRules: ['utterance'],
    format: 'commonjs',
    plugins: [new SyntacticActionsPlugin()]
})
// write to a file
fs.writeFileSync(filePathCore + ".unwrapped.js", generated_parser, { encoding: 'utf8' })

const { minify } = require("terser");

const camxes = fs.readFileSync(`${filePathCore}.unwrapped.js`).toString()

    ; (async () => {
        const result = await minify(camxes, {
            ecma: 5,
            // mangle: {
            //   toplevel: true,
            //   reserved: ['parse', 'camxes'],
            // },
        })

        fs.writeFileSync(filePathCore + ".js", result.code, { encoding: 'utf8' })
    })()