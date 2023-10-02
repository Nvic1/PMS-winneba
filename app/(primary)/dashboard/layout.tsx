


import SearchBar from '@/components/dialogues/searchbar';
import NavItemDrop from '@/components/disclosures/sidebar-items';
import NavItem from '@/components/miscellaneous/dashboard-link';
import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';



export const metadata: Metadata = {
  title: 'dashboard',
  description: 'Record management system',
}

const menuItems = [
    { label: `Overview`, url: `/` },
    { label: `Dashboard`, url: `/dashboard/analytics` },
  ];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <main className='flex h-screen w-screen bg-image p-6'>
        <section className='flex flex-col'>
            <aside className='flex space-x-2 items-center'>
                <Image src={`/assets/images/gpsLOGO.png`} width={30} height={30} alt='gpsLOGO' />
                <p className="text-md font-bold text-slate-800 uppercase tracking-widest leading-loose">winneba</p>
            </aside>
            <nav className='pt-10 w-40'>
                <ul className='flex flex-col space-y-6 w-full'>
                    <li className='flex items-center space-x-3'>
                      <span>
                        <svg className='h-5 w-5 fill-slate-500' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M15.024 22C16.2771 22 17.3524 21.9342 18.2508 21.7345C19.1607 21.5323 19.9494 21.1798 20.5646 20.5646C21.1798 19.9494 21.5323 19.1607 21.7345 18.2508C21.9342 17.3524 22 16.2771 22 15.024V12C22 10.8954 21.1046 10 20 10H12C10.8954 10 10 10.8954 10 12V20C10 21.1046 10.8954 22 12 22H15.024Z"></path> <path d="M2 15.024C2 16.2771 2.06584 17.3524 2.26552 18.2508C2.46772 19.1607 2.82021 19.9494 3.43543 20.5646C4.05065 21.1798 4.83933 21.5323 5.74915 21.7345C5.83628 21.7538 5.92385 21.772 6.01178 21.789C7.09629 21.9985 8 21.0806 8 19.976L8 12C8 10.8954 7.10457 10 6 10H4C2.89543 10 2 10.8954 2 12V15.024Z"></path> <path d="M8.97597 2C7.72284 2 6.64759 2.06584 5.74912 2.26552C4.8393 2.46772 4.05062 2.82021 3.4354 3.43543C2.82018 4.05065 2.46769 4.83933 2.26549 5.74915C2.24889 5.82386 2.23327 5.89881 2.2186 5.97398C2.00422 7.07267 2.9389 8 4.0583 8H19.976C21.0806 8 21.9985 7.09629 21.789 6.01178C21.772 5.92385 21.7538 5.83628 21.7345 5.74915C21.5322 4.83933 21.1798 4.05065 20.5645 3.43543C19.9493 2.82021 19.1606 2.46772 18.2508 2.26552C17.3523 2.06584 16.2771 2 15.024 2H8.97597Z" ></path> </g></svg>
                      </span>
                      <NavItem href='/dashboard'>Overview</NavItem>
                    </li>                    
                    <NavItemDrop/>
                </ul>
            </nav>
        </section>
        <section className='flex-1 flex flex-col pl-6 space-y-6'>
            <header className='flex justify-between items-center'>
              <search className='relative ml-12 mb-12 w-96'>
                <SearchBar />
              </search>

              <div className="flex space-x-6 items-center px-4">

                <Link href={`/dashboard/inmates/add`} className='flex items-center space-x-3 px-6 py-2 bg-fuchsia-500 rounded-lg hover:bg-fuchsia-900 ouline-none focus:ring focus:ring-fuchsia-400'>
                  <span>
                    <svg className='h-4 w-4 stroke-white fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="person-add"> <rect width="24" height="24" opacity="0"></rect> <path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"></path> <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path> <path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"></path> </g> </g> </g></svg>
                  </span>
                  <span className="text-sm text-white tracking-tight font-semibold cursor-pointer ">New Inmate</span>
                </Link>






              </div>

              <div className='flex space-x-3 items-center'>
                <Image className='rounded-full' src={`/assets/images/users/peterAsiedu.jpg`} width={40} height={50} alt='currentUser' />
                <span className="flex flex-col items-center">
                  <p className="text-slate-700 text-sm font-bold">Peter Asiedu</p>
                  <p className="text-slate-500 text-sm tracking-tighter leading-tight uppercase">officer</p>
                </span>
              </div>
            </header>
            <section className='flex overflow-hidden h-full'>{children}</section>
        </section>
    </main>
  )
}
