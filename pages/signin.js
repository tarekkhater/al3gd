import styles from '../styles/signin.module.css';
import { getProviders , signIn } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.css';
function signin({providers}) {
  
  return (
    <div className={styles.container} >
     {Object.values(providers).map((provider)=> (
      <div key={provider.id}>
        <button id={styles.sign} className=" bg-red-400" onClick={()=> signIn(provider.id , {callbackUrl:'/Req'})}>Sign in with {provider.name}</button>
      </div>
     ))}
     
    </div>
  )
}
export default signin

export async function getServerSideProps(){
  const providers = await getProviders();
  return({
    props:{
      providers,
    }
  })
}