const Form = (props) => {


  return (
    <div className='sm:px-40' style={{ direction: 'ltr' }}>
      <h1 className='text-center sm:text-2xl text-xl bg-teal text-white font-bold py-3 rounded'>{props.heading}</h1>
      <p className='text-left p-4 leading-relaxed font-noto'>Fuvahmulah City Council is working on a new City Development Plan. Get involved in the planning process. We want to hear your voice.</p>
      <p className='text-left p-4 leading-relaxed font-noto'>
        We want you to provide your ideas and views on how you want Fuvahmulah City to be developed. The concepts and ideas you contribute will provide valuable insights into how the future development of Fuvahmulah be shaped.
        Share with us how you want to see {props.name} to be developed. You can submit in writing or concept drawing or sketches.
      </p>
      <p className='text-left p-4 leading-relaxed font-noto'>
        Thank you for your contribution to improve the quality of life in Fuvahmulah City.
        The data you enter and files uploaded will be recorded when you submit this form</p>

      <div className=' flex flex-col'>
        <h1 className='text-xl text-left font-bold'>{(props.form === 'other') ? '' : props.name}</h1>
        <img className='sm:w-4/5' src={(props.imgTop ? props.imgTop : null)} />
      </div>

      <form
        className='mt-4 p-1'
        name={props.form}
        method='POST'
        data-netlify='true'
        encType="multipart/form-data"
      >
        <input type="hidden" name="form-name" value={props.form} />

        {props.form === 'other' &&
          <label>
            Tell us which area you want to be developed.
            <input name='area-name' type='text' className='px-2 mb-4 py-2 text-left block w-full px-1 border boder-gray-20' />
          </label>
        }

        <label>Describe your future vision for {props.name}. Tell us how you want it to be developed.
          <textarea name='message' className='text-left block w-full px-2 py-2 border boder-gray-20 h-40' ></textarea>
        </label>
        <div className='text-left block mt-4'>
          <label>Share your vision/ideas in writing or as a concept sketch / drawing.
            <input name='picture' type='file' className='text-left block w-full' />
          </label>
        </div>
        <div className='text-left block mt-4'>
          <label>Name
            <input name='name' type='text' className='px-2 text-left block w-full border boder-gray-20 py-2' />
          </label>
        </div>
        <div className='text-left block mt-4'>
          <label htmlFor='email'>Email
            <input name='email' type='email' className='px-2 text-left block w-full border boder-gray-20 py-2' />
          </label>
        </div>
        <div className='text-left block mt-4'>
          <label htmlFor='contact'>Phone Number
            <input name='contact' type='text' className='px-2 text-left block w-full border boder-gray-20 py-2' />
          </label>
        </div>
        <button type='submit' className='bg-gray-200 mt-2 rounded px-20 py-2 hover:bg-gray-300'>Submit</button>
      </form>
      <div className='mt-4 pl-1 mb-4'>
        <h2 className='text-2xl mb-1'>Thank you!</h2>
        <img className='sm:w-4/5' src={(props.imgBottom) ? props.imgBottom : null} />
      </div>
    </div >
  );
}

export default Form;