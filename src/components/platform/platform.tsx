import React, { memo } from "react";
import { Header, PlatformBody } from "..";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export default memo(() => {
    return (
        <Container>
            <Header />
            <PlatformBody />
        </Container>
    );
});
