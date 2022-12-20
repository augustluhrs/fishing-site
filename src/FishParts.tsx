/**
 * 
 * Holds the asset info for all fish parts:
 *    - body slot
 *    - file
 *    - id
 * 
 */

// const fs = require('fs');
// const path = require('path'); //not sure if I need

// const assetDir = require("./img/fishAssets/**/*.*"); //what's the path in build? not public/?

const assetDir = require('require-all')({
  dirname: __dirname + '/img/fishAssets'
});
let assetPath: string = "./img/fishAssets/";
// let FishAssets: {[key: string]: string[]} = {};

let FishAssets = assetDir;



// fs.readdir(assetPath).forEach(function(part: any) {
//   FishAssets[part] = [];
//   fs.readdir(path.join(assetPath, part)).forEach(function(asset:any) {
//     FishAssets[part].push(asset);
//   })
// })

console.log(FishAssets);

export default FishAssets;




//TODO not sure if it's worth it to have to populate this every time and have it be dynamically adjusted when new assets are added
//or if i should just hard code it -- depends on how the game is handling this I guess
// export default class FishParts {
//   //assuming the populate method gets run on server start

//   assets: {[key: string]: string[]};

//   constructor(assets: {[key: string]: string[]}){
//     this.assets = assets;
//     for (let part of Object.keys(assetDir)){
//       this.assets[part] = [];
//       // for (let asset of assetDir[part][])
//     }

//     console.log(assetDir);
//     console.log(this.assets);
//   }
  

// }
