const MainA = (props) => {
  return (
    <div className='font-waheed mt-2'>
      <a href={props.href} className={`${props.className} flex flex items-center justify-center rounded px-4 leading-relaxed sm:px-0 text-xl md:text-2xl md:py-10 mb-0`}>
        {props.children}
      </a>
    </div>
  )
}

export default MainA;