import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Exerciselist from '../Components/Exerciselist'
import exe from '../Assets/Image/Exercise.jpg'
import { Image } from 'react-bootstrap';

function Exercise() {
  
    const [key, setKey] = useState([0]);
  
  return (
    <div className='background'>


<div>
        <Image className='learning' src={exe}></Image>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >

        {/* <Tab eventKey={0} title="All">
          <Exerciselist idx={0} />
        </Tab> */}

        <Tab eventKey={0} title="Javascript">
          <Exerciselist idx={0} />
        </Tab>
        <Tab eventKey={1} title="C++">
          <Exerciselist idx={1} />
        </Tab>
        <Tab eventKey={2} title="Python" >
          <Exerciselist idx={2} />
        </Tab>
        <Tab eventKey={3} title="Java" >
          <Exerciselist idx={3} />
        </Tab>
        <Tab eventKey={4} title="C" >
          <Exerciselist idx={4} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Exercise
