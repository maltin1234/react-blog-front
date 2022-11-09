import { useState , useEffect} from 'react' 
import { useAddNewPostMutation, useGetPostsQuery } from '../api/post'
import AddPost from './AddPost'
import Post from './PostComponent'

export default function PostList() {
  // Using a query hook automatically fetches data and returns query values
  const [page, setPage] = useState(1);
  // const { totalPages,posts, error, isLoading ,isSuccess,isFetching} = useGetPostsQuery(page, {
  // selectFromResult: ({data}) => ({
  //   totalPages: data?.totalPages,
  //   posts: data
  // }),
  // })
  const { posts = [], totalPages,currentPage } = useGetPostsQuery(page, {
    selectFromResult: ({ data }) => ({
      posts: data?.posts,
      totalPages: data?.totalPages,
      currentPage: data?.currentPage

    }),
    })


  return (
    
    <div className="App">
        <div>
      
    </div>
    <div className="">
      {posts.map((post, index) => (
     
        <Post key={index} name={post.name}  /> 
      ))}
      {totalPages}
      {currentPage}
    </div>
    
<div class="flex flex-col items-center">

  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{currentPage}</span> to <span class="font-semibold text-gray-900 dark:text-white"></span> of <span class="font-semibold text-gray-900 dark:text-white">{totalPages}</span> Entries
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
    
    <button   onClick={() => setPage(page - 1)} class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Prev
    </button>
    <button   onClick={() => setPage(page + 1)} class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</div>

       
  </div>
  )
}