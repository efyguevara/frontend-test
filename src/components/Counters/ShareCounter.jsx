import React, { useState } from 'react';
import { Popover, Col } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import { useDispatch } from 'react-redux';
import { shareCounter } from '../../actions';

const ShareCounter = (props) => {
  const dispatch = useDispatch();

  const [showPopover, setShowPopover] = useState(true)
  let setAllCountersSelected = `${props.selectedCounter.map(el => el.count)} x ${props.selectedCounter.map(el => el.title)}`

  const copyText = () => {
    navigator.clipboard.writeText(setAllCountersSelected)
    dispatch(shareCounter(false))
  }

  return (
    <Popover id="popover-basic" className="share-counter" show={showPopover}>
      <Col>
        <Popover.Title as="h3">Share {props.selectedCounter.length} counter</Popover.Title>
        <Popover.Content>
          <Btn theme="action" title="Copy" onClick={copyText} />
        </Popover.Content>
      </Col>
      <Col>
        <Popover.Content>
          {setAllCountersSelected}
        </Popover.Content>
      </Col>
    </Popover>
  )
}
export default ShareCounter;