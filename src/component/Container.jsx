function Container({children}) {
  return (
    <div className="flex items-center min-h-screen justify-center W-[1080px]">
      {children}
    </div>
  )
}
export default Container