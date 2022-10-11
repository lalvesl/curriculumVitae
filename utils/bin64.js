const bin64 = {
  B_CHAR: 58,
  to: function (data) {
    const qtdChunks = ((data.length / 3) | 0) + (data.length % 3 ? 1 : 0);
    let buffer = new Uint8Array((qtdChunks + 2) * 4);
    let k = 0;
    let j = 0;
    let tmp;
    let num;
    for (let i = 0; i < 2; i++) {
      num = (data.length << (i * 24)) & 0xffffff;
      tmp = j + 4;
      for (; j < tmp; j++) {
        buffer[j] = (num & 0x3f) + this.B_CHAR;
        num = num >> 6;
      }
    }
    for (let i = 0; i != qtdChunks; i++) {
      num = data[k++] | (data[k++] << 8) | (data[k++] << 16);
      tmp = j + 4;
      for (; j < tmp; j++) {
        buffer[j] = (num & 0x3f) + this.B_CHAR;
        num = num >> 6;
      }
    }
    return buffer;
  },
  from: function (data) {
    let j = 0;
    let k = 0;
    let tmp;
    let num;
    let i;
    let size;
    for (i = 0; i < 8; i++) {
      size = ((data[j++] - this.B_CHAR) << (i * 6)) | size;
    }
    let buffer = new Uint8Array(size);
    const qtdChunks = data.length / 4 - 3;
    for (i = 0; i != qtdChunks; i++) {
      for (tmp = 0; tmp < 4; tmp++, j++) {
        num = ((data[j] - this.B_CHAR) << (tmp * 6)) | num;
      }
      tmp = k + 3;
      for (; k < tmp; k++) {
        buffer[k] = num & 0xff;
        num = num >> 8;
      }
    }
    let rest = 4 - (size % 4);
    if (rest) {
      for (tmp = 0; tmp < 4; tmp++, j++) {
        num = ((data[j] - this.B_CHAR) << (tmp * 6)) | num;
      }
      rest = k + rest;
      for (; k < rest; k++) {
        buffer[k] = num & 0xff;
        num = num >> 8;
      }
    }
    return buffer;
  },
};
export default bin64;
