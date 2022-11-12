import Landing from "../components/Landing";
import {ampli} from '../src/ampli'

export default function Home() {
 ampli.track("homepage viewed");
 
  return (
    <>
      <Landing />
    </>
  )
}
