import React, { memo } from "react";
import { ToggleButton } from "..";
import styled from "styled-components";
const Cotaniner = styled.div`
    border-radius: 15px;
    background: darkgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 2px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    border-radius: 15px;
    :focus {
        background: #a00;
    }
    :hover {
        background: #a00;
    }
`;

export default memo(() => {
    return (
        <div className='flex-fw'>
            <ToggleButton  />
        </div>
    );
});
