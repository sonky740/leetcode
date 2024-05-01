type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    return obj
      .filter((item) => Boolean(item))
      .map((item) => compactObject(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj: Obj = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (Boolean(value)) {
        newObj[key] = compactObject(value);
      }
    });
    return newObj;
  }
  return obj;
}