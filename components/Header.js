export default function Header({ titleText, subtitleText, children }) {
  return (
    <>
      <header className='container w-full mx-auto mb-4'>
        <div className='flex flex-col items-center'>
          <h1 className='mt-8 mb-4 p-4 font-typeface text-synthgrape-800 text-center bg-synthblue-400 md:text-5xl text-4xl shadow-2xl rounded-xl border-t-4'>
            {titleText}
          </h1>
          <div className='flex flex-row'>
            <p className='font-typeface text-center text-synthgrape-50 px-4 mt-2'>{subtitleText}</p>
            {children}
          </div>
        </div>
      </header>
      <div className='w-1/2 md:w-1/3 py-1 mb-8 mx-auto bg-synthgreen-200 rounded'></div>
    </>
  )
}
