'use client';

import Link from 'next/link';
import ProductCart from './components/ProductCart';

import { useState } from 'react';


//lazy loading - use only for large/heavy component
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className='relative h-screen'>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <Link href='/users'>Users</Link>
      <ProductCart />

      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;

          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];

          const sortedUsers = _.orderBy(users, ['name']);
          console.log(sortedUsers);
        }}
      >
        Show
      </button>

      {/* lazyLoading */}
      {/* <button onClick={() => setIsVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}

      {/* image */}
      {/* <Image src={cat} alt='cat' /> */}
      {/* <Image
        src='https://bit.ly/react-cover'
        alt='mosh'
        // width={300}
        // height={170}
        fill
        className='object-cover'
        sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
        quality={75}
        priority
      /> */}
    </main>
  );
}

//optimize search
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'produce.title',
//     description: '...',
//   };
// }
