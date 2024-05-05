const formatImg = (img) => {
  if (!img.startsWith('http')) {
    console.error('Invalid URL');
    return img; // またはエラーを投げる
  }

  const param = '?fm=webp';
  const imgWp = img + param;

  return imgWp;
};

export default formatImg;