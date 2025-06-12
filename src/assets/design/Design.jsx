

const Design = () => {
  return (
    <>
    <header className="flex justify-around relative bg-lime-300 py-4 ">
      <div>
        <h1>logo</h1>
      </div>
      <nav className="flex gap-4 list-none">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Address</li>
      </nav>

      {/* Blue Circle positioned on the right half visible */}
      <div className="w-[700px] h-[700px] bg-blue-400 rounded-full absolute top-[-20px] right-[-200px] z-[1]" />
    </header>
    <main className="mt-10">
        <p className="bg-yellow-400 w-[200px] text-[14px] py-1 m-auto relative left-[100px] text-slate-800 uppercase text-center rotate rounded-lg font-semibold">your idea start here</p>
        <p className="text-center text-[20px] w[300px] m-auto mt-6">Collaborate without constraints</p>
    </main>
    </>
  )
}

export default Design
