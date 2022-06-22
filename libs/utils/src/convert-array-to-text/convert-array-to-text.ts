/* eslint-disable @typescript-eslint/no-explicit-any */
const convertArrayToText = (array: any[]): string => {
  for (let index = 0; index < array.length; index++) {
    const arrayString: string[] = [];
    const element = array[index];
    const keys = Object.keys(element);
    keys.forEach((key) => {
      arrayString.push(element[key]);
    });

    return arrayString.join(',\n');
  }
};

export { convertArrayToText };
