import React from 'react'
import BlogsItem from './blogsItem'
import BlogsItemLoading from './blogsItemLoading'
import useBlogsData from '../../hooks/useBlogsData'
import AlertMessage from '../utility/alerts-message/AlertMessage'

export default function AllBlogs() {

   const { blogs , loading , error } = useBlogsData('https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/blogs')


  return (
    <div className=''>
        <h2 className=' text-left font-extrabold text-3xl mb-10'>Blogs</h2>
        <div className='grid grid-cols-4 gap-x-12 gap-y-20'>
            {
                error ? <div>{<><AlertMessage alertMessage={`مشکلی پیش آمده است`} type={`errorM`} /></>}</div>
                :
                !loading?(blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((item,index)=>(
                    <BlogsItem blog={item} index={index} key={index}/>
                )))
                :<>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className=''>
                        <BlogsItemLoading />
                    </div>
                ))}
                </>
            }
        </div>
    </div>
  )
}
