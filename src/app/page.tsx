import Header from '@/components/home/header';
import Animation from '@/components/home/animation';

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

        <div className='w-full relative flex justify-center items-center z-10'>
          <Animation />
        </div>
      </div>
    </main>
  );
}
