import React from 'react';
import { Popover } from 'react-bootstrap';
import Btn from '../Btn/Btn';

const ShareCounter = () => {
    return (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Share '#' counter</Popover.Title>
              <Popover.Content>
                <Btn theme="action" title="Copy" />
              </Popover.Content>
            </Popover>
    )
}
export default ShareCounter;