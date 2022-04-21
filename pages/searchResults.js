import React from 'react'
import { useRouter } from 'next/router'


const searchResults = () => {

  const router = useRouter();

  const {search} = router.query;

  return(
    <div>{search}</div>
  )
}


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const url = '';
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default searchResults;