import { useEffect, useState } from 'react';

const baseUrl =
  'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI';
const apiKey = '9744730f2emsh65f79faf8ec86a6p16a37cjsn78116ce48a8e'; // process.env.REACT_APP_WEB_SEARCH_KEY;
const host = 'contextualwebsearch-websearch-v1.p.rapidapi.com';

export const MetaImage = ({ term }) => {
  const [busy, setBusy] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const refinedSearchTerm = encodeURIComponent(`star wars ${term}`); // pregateste char speciale pe care le pune in URL
    const random = Math.floor(Math.random() * 10000) + 2;

    setTimeout(() => {
      fetch(
        `${baseUrl}?q=${refinedSearchTerm}&pageNumber=1&pageSize=1&autoCorrect=true`, // din web search js fetch snippet, Required Parameters
        {
          headers: {
            'x-rapidapi-host': apiKey,
            'x-rapidapi-key': host,
            useQueryString: true,
          },
        },
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const imageUrl = data.value[0].url;

          setBusy(false); // deblochez UI
          setImageUrl(imageUrl);
        });
    }, random);
  }, []);

  return (
    <>
      {busy === true ? (
        '...loading'
      ) : (
        <img className="img-fluid" src={imageUrl} alt={term}></img>
      )}
    </>
  ); // scot imaginea
};

export default MetaImage;
