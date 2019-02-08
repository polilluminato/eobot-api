import { ObjectAny } from '../interfaces';

const objectToUrlGet = (data:ObjectAny) => {
  const arrayData:string[] = [];

  const objectData:ObjectAny = {
    ...{ json: true },
    ...data,
  };

  for (const i in objectData) {
    const strItemData = `${i}=${objectData[i]}`;
    arrayData.push(strItemData);
  }

  const stringData:string = arrayData.join('&');

  return stringData;
};

export = objectToUrlGet;
