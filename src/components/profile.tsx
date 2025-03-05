'use client'
import { useSession } from "next-auth/react"
export default function Profile() {
    const session = useSession();
  return (
    <div>
        {session?.data?.user ? <div>User Logged in</div>:<div>User Logout</div>}
    </div>
  )
}
