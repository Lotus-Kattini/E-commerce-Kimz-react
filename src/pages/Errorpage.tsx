import { Link,useRouteError,isRouteErrorResponse } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const Errorpage = () => {

  const error=useRouteError()
  let errorStatus:number;
  let errorText:string;

  if(isRouteErrorResponse(error)){
    errorStatus=error.status;
    errorText=error.statusText
  }else{
    errorStatus=404;
    errorText="Page Not Found";
  }


  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  )
}

export default Errorpage