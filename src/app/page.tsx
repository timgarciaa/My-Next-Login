import Header from '@/components/home/header';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 bg-primary'>
      <Header />

      <div className='flex flex-row w-full mt-20'>
        <div className='w-full'>
          <h1 className='font-bold text-6xl text-white'>
            Nothing to see here. Just SignUp, Login and Logout.
          </h1>
        </div>

        <div className='w-full'>
          <h1>image here</h1>
        </div>
      </div>
    </main>
  );
}
