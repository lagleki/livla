const fs = require('fs-extra')
const path = require('path-extra')
const SyntacticActionsPlugin = require("pegjs-syntactic-actions");

const fileName = process.argv[2]

const filePathCore = path.join(__dirname, `../mahantufa/${fileName}`)
const grammarSrc = fs.readFileSync(`${filePathCore}.peg`).toString().split("\n")
    .map(line => line.trim().replace(/^#.*?$/, '').trim().replace(/^([a-zA-Z0-9]+)[\t ]*<-[\t ]*/, '$1 = ')).filter(Boolean).join("\n")
    
const ruleNames = (grammarSrc) => {
    return grammarSrc.split("\n").map(_ => _.split("=")[0].trim()).filter(Boolean)
};

const generated_parser = require('peggy').generate(grammarSrc, {
    cache: false,
    trace: true,
    output: 'source',
    allowedStartRules: ruleNames(grammarSrc),
    format: 'commonjs',
    plugins: [new SyntacticActionsPlugin()]
})

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
