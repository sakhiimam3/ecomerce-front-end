import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AboutmeTab from '../compoents/AboutmeTab'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'
import OrderTab from '../compoents/OrderTab'
import Setting from '../compoents/setting'

const Account = () => {
  return (
   
    <>
    <header>
        <Header/>

    </header>
    <main>
    <Tabs
      defaultActiveKey="About"
      id="uncontrolled-tab-example"
      className="mb-3 mt-5"
    >
      <Tab eventKey="About" title="About" >
        <AboutmeTab />
      </Tab>
      <Tab eventKey="Order" title="Order">
        <OrderTab />
      </Tab>
      <Tab eventKey="Settings" title="Settings" >
        <Setting />
      </Tab>
    </Tabs>
    </main>
    <footer>
        <Footer/>
    </footer>
</>
  )
}

export default Account