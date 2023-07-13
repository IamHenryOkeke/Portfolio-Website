import { useEffect, useState } from 'react'
import { getAllPostsWithSlug } from '../../utils/cosmic'

const Projects = () => {
  const [data, setData] = useState(null)

  useEffect(()=>{
    getAllPostsWithSlug()
      .then((data) => {
          console.log(data)
          setData(data)
      })
  }, [])
  return (
    <div className="px-4 md:px-6 lg:px-60"> 
      <h1 className="text-3xl my-4">Projects</h1>
      {
        data && data.map((item) =>  (
          <div key={item.id} className='flex flex-col gap-5'>
            <p className="text-xl capitalize">
              {item.slug}
            </p>
            <div className='w-[80%]'>
              <a href={item.metadata["live-url"]} target="_blank" rel="noopener noreferrer">
                <img src={item.metadata.image.url} alt="" />
              </a>
            </div>
            <p>{item.metadata.description}</p>
            <p>Tools Used: {item.metadata.tools_used}</p>
          </div>
        )
        )
      }
    </div>
  )
}

export default Projects
