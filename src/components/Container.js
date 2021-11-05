const Container = (props) => {

  return (
    <div className='container max-w-6xl px-4 mx-auto flex flex-wrap items-center justify-between'>
      {props.children}
    </div>
  )
}

export default Container;