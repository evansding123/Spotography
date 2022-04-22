import React from 'react'
import { useRouter } from 'next/router'
import key from '../config.js';

const searchResults = ( {data} ) => {

  const router = useRouter();

  const { search } = router.query;

  return(
    <div>{search}</div>
  )
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  //console.log(context.query)
  const url = `https://api.yelp.com/v3/businesses/search?term=${context.query.search}&latitude=37.786882&longitude=-122.399972`;
  console.log(url);
  const res = await fetch(url, {
    headers: {
      'Authorization': key
    }
  });
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default searchResults;