import * as actions from '@/services';
import {auth} from '@/auth';
import { Button } from '@nextui-org/react';
import Profile from '@/components/profile';

export default async function Home() {
  const session  = await auth();
  console.log(session);
  return (
    <div className="">
     <form action={actions.signIn}>
        <Button type="submit">
          Sign In
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button  type="submit">
          Sign Out
        </Button>
      </form>

      {session?.user ? (<div>{JSON.stringify(session.user)} </div>) : (<div>Logout</div>)}
      <Profile/>
    </div>
  );
}
