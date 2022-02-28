export const isNonEmptyArray = (items) =>
  Array.isArray(items) && items.length > 0;
export const paginationWithDots = (c, m, isMobile = false) => {
  const current = c;
  const last = m;
  const rangeWithDots = [];
  if (!isMobile) {
    const delta = 2;
    const left = current - delta;
    const right = current + delta + 1;
    const range = [];
    let l;

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  if (c === m) {
    if (!rangeWithDots.includes(1)) {
      rangeWithDots.push(1);
    }

    if (c === 3) {
      rangeWithDots.push(2);
    } else if (c > 3) {
      rangeWithDots.push("...");
    }
    rangeWithDots.push(m);

    return rangeWithDots;
  }
  if (!rangeWithDots.includes(c)) {
    rangeWithDots.push(c);
  }
  if (m - c === 2) {
    rangeWithDots.push(c + 1);
  } else if (m - c > 2) {
    rangeWithDots.push("...");
  }
  rangeWithDots.push(m);

  return rangeWithDots;
};
