
import { Flex } from 'antd'
import { AppBar } from './AppBar'
import { Footer } from './Footer'

export const  App = () => {

  return (
    <Flex vertical style={{background:"transparent", width:"100%"}}>
      <AppBar/>
      <Footer/>
    </Flex>
  )
}
