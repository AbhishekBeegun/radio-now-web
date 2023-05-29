import React from 'react'
import { client } from "@/lib/client"

const SearchPage = ({post}) => {
  return (
    <div>
        {post.map(item => (
            <>
            
            </>
        ))}        
    </div>
  )
}

export default SearchPage

export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
export async function getStaticProps({params}) {
    const post = await client.fetch(`*[_type == "post" && title match "${params}"]`)
    return{
      props : {
        post
      }
    }
  }