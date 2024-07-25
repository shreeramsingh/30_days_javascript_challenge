import { add,obj,exports } from "./exportsJs.js";
import greeting from "./SingleFunction.js";
console.log(add(3,4));

const objs=obj.greet();
console.log(objs);

console.log(exports(5,7));
greeting("shri");
