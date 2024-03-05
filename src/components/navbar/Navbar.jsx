import { auth } from "@/lib/auth";
import Links from "@/components/navbar/links/Links";
import styles from  '@/components/navbar/navbar.module.css'
import Link from "next/link"

const NavBar = async()=> {

  const session = await auth()

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links  session={session}/>
      </div>
    </div>
  )
}


export default NavBar;
