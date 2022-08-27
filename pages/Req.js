import {useSession} from 'next-auth/react'
import HomePage from '../Components/Req/HomePage'
export default function Req() {
    const {data: session} = useSession();
  return (
    <div>
       <HomePage />
    </div>
  )
}
