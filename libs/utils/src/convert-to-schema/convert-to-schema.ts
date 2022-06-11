import { TConvertToSchema } from './convert-to-schema-types';

type TRemoveKeys = '_id' | '__v';

type IKeysObj = {
  [key in TRemoveKeys]?: string;
};

const keysToBeRemoved: TRemoveKeys[] = ['__v', '_id'];

const removeKeysHandler = (obj: IKeysObj) => {
  const keys = Object.keys(obj) as Array<keyof IKeysObj>;
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (element && keysToBeRemoved.includes(element)) {
      delete obj[element];
    }
  }
};

const convertToSchema = ({ _doc: data }: TConvertToSchema) => {
  const id = data?._id;
  const dataKeys = Object.keys(data);
  let newData = data;

  removeKeysHandler(newData);

  for (let index = 0; index < dataKeys.length; index++) {
    const element = dataKeys[index];
    if (element) {
      const item = data[element];
      if (Array.isArray(item)) {
        const newItem = item?.map(convertToSchema);
        newData = { ...newData, [element]: newItem };
      }
    }
  }

  return { ...newData, id };
};

export { convertToSchema };
