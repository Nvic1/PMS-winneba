'use client';

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import NavItem from '../miscellaneous/dashboard-link';

const menuItems = [

  {
    name: 'Inmates',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 fill-slate-500' fill="none" viewBox="0 0 24 24">
            <path  fill-rule="evenodd" d="M3 18a6.002 6.002 0 0 1 8.018-5.652c.343.122.671.275.982.455A5.965 5.965 0 0 1 15 12a6.002 6.002 0 0 1 6 6v3h-5.25v-1.5h3.75V18a4.5 4.5 0 0 0-6.188-4.172A5.98 5.98 0 0 1 15 18v3H3v-3Zm6-6.75A3.748 3.748 0 0 1 5.25 7.5 3.75 3.75 0 0 1 12 5.25a3.75 3.75 0 1 1 0 4.5 3.733 3.733 0 0 1-3 1.5ZM13.5 18v1.5h-9V18a4.5 4.5 0 1 1 9 0ZM11.25 7.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM15 5.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd"/>
        </svg>
    ,props: {
      urlOne: `/dashboard/inmates/list`, 
      urlTwo: `/dashboard/inmates/add`, 
      one:`Inmates`, 
      two: `Add New Inmate`
    }
  },

  {
    name: 'Blocks',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 icon stroke-slate-500 fill-slate-500' viewBox="0 0 1024 1024">
            <path d="M512 0 0 320h1024L512 0zm288 384 32 64v384h128V448l32-64H800zm-256 0 32 64v384h128V448l32-64H544zm-256 0 32 64v384h128V448l32-64H288zm-256 0 32 64v384h128V448l32-64H32zm0 512L0 1024h1024l-32-128H32zm544-704c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64z"/>
          </svg>,
    props: {
      urlOne: `/dashboard/blocks/cells`, 
      urlTwo: `/dashboard/blocks/add`, 
      one:`Cells`, 
      two: `Add New Cell`
    }
  }
]


export default function NavItemDrop() {
  return (
<>

  {
    menuItems.map((item, i) => (


      <Disclosure key={i}>
        {({ open }) => (
          <li key={i + 2}>
            <Disclosure.Button className="flex justify-between  text-left text-sm w-full hover:text-fuchsia-500">
              <div className="flex space-x-3 items-center">
                <span>{item.icon}</span>
                <span
                  className={`text-sm   ${
                    open ? 'text-fuchsia-700 font-medium': 'text-slate-600'
                  } hover:text-fuchsia-700`}
                >{item.name}</span>                
              </div>    
              <ChevronRightIcon
                className={`${
                  open ? 'rotate-90 transform text-fuchsia-800' : 'text-slate-600'
                } h-5 w-5  `}
              />
            </Disclosure.Button>
            <div className="flex flex-col space-y-4 ml-7">

              <Disclosure.Panel className="text-left text-sm text-gray-500 pt-6">  
                <NavItem href={item.props?.urlOne}>{item.props?.one}</NavItem>
              </Disclosure.Panel>
              <Disclosure.Panel className="text-left text-sm text-gray-500">  
                <NavItem href={item.props?.urlTwo}>{item.props?.two}</NavItem>
              </Disclosure.Panel>
            </div>

          </li>
        )}
      </Disclosure>
  ))}
</>

  )
}
