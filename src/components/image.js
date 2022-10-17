import fs from "fs";
import path from "path";

/**
 *
 * @param {String} pathImage
 * @returns {HTMLImageElement}
 */

const image = (pathImage) => (
  <img
    src={
      "data:image/" +
      (path.basename(pathImage).match(/(?<=\.)[^\.]+$/g) || "") +
      ";base64, " +
      fs.readFileSync(pathImage).toString("base64")
    }
  />
);

export { image };
