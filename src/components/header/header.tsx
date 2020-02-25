import React, { memo } from "react";
import { Icon } from "..";

import styled from "styled-components";

const Spacer = styled.div`
    flex: 1000;
`;

const HLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export default memo(() => {
    return (
        <HLayout>
            <Icon />
            <Spacer />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
        </HLayout>
    );
});
