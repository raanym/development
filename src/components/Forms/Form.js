const Form = (props) => {

  console.log(props)
  return (
    <div className='sm:px-40' style={{ direction: 'ltr' }}>
      <h1 className='text-center sm:text-2xl text-xl bg-teal text-white font-bold py-3 rounded'>{props.heading}</h1>
      <p className='text-left p-4 leading-relaxed font-noto'>Fuvahmulah City Council is working on a new City Development Plan. Get involved in the planning process. We want to hear your voice.

        We want you to provide your ideas and views on how you want Fuvahmulah City to be developed. The concepts and ideas you contribute will provide valuable insights into how the future development of Fuvahmulah be shaped.
        Share with us how you want to see {props.name} area to be developed. You can submit in writing or concept drawing or sketches.

        Thank you for your contribution to improve the quality of life in Fuvahmulah City.
        The name and photo associated with your Google Account will be recorded when you upload files and submit this form</p>

      <div className=' flex flex-col'>
        <h1 className='text-xl text-left font-bold'>{props.name}</h1>
        <img className='sm:w-4/5' src='https://lh3.googleusercontent.com/n3L2pKlw_F11_E_IEcG6Gv_anU1tNfHvh5d43uE-rA_20GCVevn9HKJPa8NH7F9YlnTvfdMzQ1xMogdhBCHykXcM_BgnC6Rdbd5lmHpDEM0O9SuuTzqoW5toI1rNyhs8zw=w740' />
      </div>

      <form
        className='mt-4 p-1'
        name={props.name}
        data-netlify='true'
        method='POST'
        onSubmit='submit'
      >
        <input type='hidden' name={props.name} value={props.name} />

        <div className='text-left block'>
          <label htmlFor='idea'>Describe your future vision for Thoondu. Tell us how you want it to be developed.
          </label>
          <textarea name='idea' className='text-left block w-full px-1 border boder-gray-20' />
        </div>
        <div className='text-left block mt-4'>
          <label htmlFor='upload'>Share your vision/ideas in writing or as a concept sketch / drawing.</label>
          <input name='upload' type='file' className='text-left block w-full' />
        </div>
        <div className='text-left block mt-4'>
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' className='text-left block w-full border boder-gray-20 py-2' />
        </div>
        <div className='text-left block mt-4'>
          <label htmlFor='email'>Email
          </label>
          <input name='email' type='email' className='text-left block w-full border boder-gray-20 py-2' />
        </div>
        <div className='text-left block mt-4'>
          <label htmlFor='contact'>Contact
          </label>
          <input name='contact' type='number' className='text-left block w-full border boder-gray-20 py-2' />
        </div>
        <button type='submit' className='bg-gray-200 mt-2 rounded px-20 py-2 hover:bg-gray-300'>Submit</button>
      </form>
      <div className='mt-4 pl-1 mb-4'>
        <h2 className='text-2xl mb-1'>Thank you!</h2>
        <img className='sm:w-4/5' src='https://lh3.googleusercontent.com/c1C-_wHmrZ3_G3ld-nNLq3jmBeBsHL04Ns5HWPJ7Uyn_Q9VRK7M1nulk3R3Ol1JHzbnLR_eXVs7OF26u4bKt1QARMSdzdBxDsiQ4oFseA6WNvBSbCO0thY3IkwsTF1dbQg=w2000' />
      </div>
    </div >
  );
}

export default Form;