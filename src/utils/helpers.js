import { md5 } from 'js-md5';

export const getHashId = stringValue => md5(stringValue);

export const createSlug = title => {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return slug.replace(/[^\w\-]+/g, '');
};
