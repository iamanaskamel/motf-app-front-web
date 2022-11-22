export const getBase64FromUrl = async (url: any) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result.replace("data:image/jpeg;base64,", "");
      resolve(base64data);
    };
  });
};
