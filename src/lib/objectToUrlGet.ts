import { ParamsInterface } from "../interfaces";

const objectToUrlGet = (data:ParamsInterface) => {
  const arrayData:string[] = [];

  const objectData:ParamsInterface = {
    ...{ json: true },
    ...data
  };

  for(let i in objectData) {
    const strItemData = `${i}=${objectData[i]}`;
    arrayData.push(strItemData);
  }

  const stringData:string = arrayData.join('&');

  return stringData;
}

export = objectToUrlGet;