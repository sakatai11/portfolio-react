// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const urlFilter = () => {
  const location = useLocation();
  console.log(location);
  // const pageUrl = location.pathname; // pathデータを受け取る
  const title = location.state?.title; // titleデータを受け取る
  console.log(title);

  if (title !== 'PHOTOS') {
    const newfilters = `tag[contains]${title}`;
    console.log(newfilters);
    return newfilters;

    } else {
      return '';
    }

}

export default urlFilter;
