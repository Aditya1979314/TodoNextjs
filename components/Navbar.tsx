"use client"
import React from "react"
import NavbarBox from "./NavbarBox";
import NavbarTop from "./NavbarTop";
import Modal from "./Modal";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function  Navbar(){

  const seachparms = useSearchParams();
  const show = seachparms.get('show');

    return (
      <>
        <div className='bg-navbarColor basis-2/12 h-full shadow'>
      <NavbarTop/>

       <NavbarBox href="/todo?show=addtask" label="Add task" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#DC4C3E" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.711-16.5a.75.75 0 1 1 1.5 0v4.789H17.5a.75.75 0 0 1 0 1.5h-4.711V17.5a.75.75 0 0 1-1.5 0V12.79H6.5a.75.75 0 1 1 0-1.5h4.789V6.5Z" clip-rule="evenodd"></path></svg>}/>

      <NavbarBox 
      href="/todo?show=search"
      label="Search"
      icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708-.707l-3.563-3.563ZM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"></path></svg>}
      />

      <NavbarBox
      href="/todo/today"
      label="Today"
      icon={<svg width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)" font-weight="500"><tspan x="8" y="15" text-anchor="middle">10</tspan></text></g></svg>}
      />

      <NavbarBox href="/todo/upcoming" label="Upcoming" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z" clip-rule="evenodd"></path></svg>}/>

        </div>
        {
          (show === 'addtask') ? (
          <Modal>
            <input placeholder="Enter title" className=" focus:outline-none focus:ring focus:ring-blue-500"></input>
                        <input placeholder="Enter Description" className="focus:outline-none focus:ring focus:ring-blue-500"></input>
                        <div className="absolute right-1 bottom-1">
                        <Link href='/todo' className="hover:bg-gray-400 bg-gray-100 px-2 py-1 rounded-md mr-1">Cancel</Link>
                        <Link href='/todo' className="bg-[#DC4C3E] px-2 py-1 rounded-md">Add task</Link>
                        </div>
          </Modal>
          ):((show === "search") && (
            <Modal>
              <div className="p-4 h-full w-full flex flex-col gap-1 item-center justify-center">
              <input placeholder="Search" className=" focus:outline-none focus:ring focus:ring-blue-500 "></input>
              <Link href='/todo' className="bg-[#DC4C3E] px-2 py-1 rounded-md">Search</Link>
              </div>
            </Modal>
          ))
        }
        </>
    )
}
