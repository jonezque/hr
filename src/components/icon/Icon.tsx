import React, { memo } from "react";
import styled from "styled-components";

const Icon = styled.div`
    cursor: pointer;
    background: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default memo(() => <Icon>1</Icon>);
