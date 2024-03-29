export function searchPattern(txt, pattern, offset = 0, filter = []) {
  let index = 0;
  while (true) {
    index = txt.slice(offset).search(pattern);
    if (index == -1) break;
    index += offset;
    if (
      (txt[index - 1] === "\\") |
      filter.some((group) => group.start <= index && index < group.end)
    ) {
      offset = index + 1;
      continue;
    }
    break;
  }
  return index;
}
export class groupTxt {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
export function findGroups(txt, startPattern, endPattern, filter = []) {
  let offset = 0;
  let groups = [];
  let startLifo = [];
  do {
    let startEnd = 0;
    let start = searchPattern(txt, startPattern, offset, filter);
    if ((start === -1) & !startLifo.length) break;
    if (start !== -1)
      startEnd = txt.slice(start).match(startPattern)[0].length + start;
    let end = searchPattern(txt, endPattern, offset, filter);
    if (end == -1)
      throw new Error(
        'syntax with error in "' +
          startPattern +
          '" to "' +
          endPattern +
          '" caracter start/end at ' +
          start +
          ' in "' +
          txt.toString() +
          '"'
      );
    let endEnd = txt.slice(end).match(endPattern)[0].length + end;
    if ((start > end) | (start === -1)) {
      if (startLifo.length) {
        groups.push(new groupTxt(startLifo.pop().start, endEnd));
      }
      offset = endEnd;
      continue;
    }
    if (end > start) {
      let nextStart = searchPattern(txt, startPattern, startEnd, filter);
      if ((nextStart < end) & (nextStart !== -1)) {
        startLifo.push({ start: start, startEnd: startEnd });
        offset = startEnd;
      } else {
        groups.push(new groupTxt(start, endEnd));
        offset = endEnd;
      }
      continue;
    }
    if (start === end) {
      end = searchPattern(txt, endPattern, startEnd, filter);
      let endEnd = txt.slice(end).match(endPattern)[0].length + end;
      groups.push(new groupTxt(start, endEnd));
      offset = endEnd;
      continue;
    }
  } while (true);
  return groups;
}
