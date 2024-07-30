import React from 'react'

const Header = () => {
    const navLink=[
        {title:"Home",link:"/"},
        {title:"About",link:"/about"},
        {title:"Project",link:"/project"},
        {title:"contact",link:"/contact"},
    ]
  return (
    <div className="flex justify-between items-center bg-blue-600 h-20">
      <div>
        <h1 className="font-bold px-7 cursor-pointer hover:text-yellow-400 text-3xl duration-500 tracking-wide">
          HOME WORK
        </h1>
      </div>
      <div className='flex gap-4 items-center'>
        {navLink?.map((item, index) => (
          <div key={index} className='text-lg font-semibold tracking-wide hover:text-yellow-300 px-6 cursor-pointer underline underline-offset-2' >{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Header