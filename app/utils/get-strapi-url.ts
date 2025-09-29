export const getStrapiURL = () => {
  return process.env.STRAPI_URL_URL ?? "http://localhost:1337";
};
