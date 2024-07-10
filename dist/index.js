"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const collection_1 = [1, 3, 5, 7];
const collection_2 = [6, 4, 2, 0];
const collection_3 = [8, 9, 10];
const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
console.log(result);
