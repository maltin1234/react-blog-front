import { useState , useEffect} from 'react' 
import { useAddNewPostMutation, useGetPostsQuery } from '../api/car'
import AddCar from './AddCar'
import Car from './Car'

export default function CarList() {
  // Using a query hook automatically fetches data and returns query values
  const { data = [], error, isLoading ,isSuccess,isFetching} = useGetPostsQuery()



  return (
    <div className="App">
        <div>
      {JSON.stringify(error)} 
    </div>
    <div className="">
      {data.filter((post, index) => index < 3).map((post, index) => (
      
        <Car key={index} name={post.name}  /> 
      ))}
    </div>

  </div>
  )
}