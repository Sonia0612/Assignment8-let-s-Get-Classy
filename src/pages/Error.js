import { useRouteError } from 'react-router-dom'

function Error() {
    const err=useRouteError();
    console.log("*****",err)
  return (
    <div>
      <h1>error!! try refreshing the page.</h1>
      <p>{err.status}: {err.statusText}</p>
    </div>
  )
}

export default Error
