
export default function pingPong (number) {
  if ( number === 3 ) {
    return "ping";
  } else if ( number === 5 ) {
    return "pong"
  } else if ( number % 3 === 0 && number % 5 === 0) {
    return "pingpong"
  } else {
    return number;
  }
   
}
