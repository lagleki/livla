const tf = require("@tensorflow/tfjs-node")
// const fs=require('fs')
// const {vectors}=JSON.parse(fs.readFileSync('./wordvecs10000.json',{encoding: 'utf8'}));

// (async ()=>{
// // await tf.setBackend();
// // await tf.ready();
// // console.log(tf.getBackend())
// // const model={}
// // Object.keys(vectors).forEach((word) => {
// // 	model[word] = tf.tensor1d(json.vectors[word]);
// // });

// //   const modelSize = Object.keys(model).length;


// // function nearest(inputWord, start=0, max=10) {
// //   input=model[inputWord]
// //     const nearestVectors = [];
// //     Object.keys(model).forEach((word) => {
// //       const distance = tf.util.distSquared(input.dataSync(), model[word].dataSync());
// //       nearestVectors.push({ word, distance });
// //     });
// //     nearestVectors.sort((a, b) => a.distance - b.distance);
// //     return nearestVectors.slice(start, max);
// // }

// // nearest('cat')

// })()