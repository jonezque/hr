import React, { memo, useState } from "react";

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
    const [pressed1, setPressed1] = useState(true);
    const [pressed2, setPressed2] = useState(false);
    const [pressed3, setPressed3] = useState(false);
    const [pressed4, setPressed4] = useState(false);

    const clickHandler = (callback: (a: boolean) => void) => {
        setPressed1(false);
        setPressed2(false);
        setPressed3(false);
        setPressed4(false);
        callback(true);
    };
    console.log(pressed1, pressed2, pressed3, pressed4);
    return (
        <Cotaniner>
            <Button
                aria-pressed={pressed1}
                onClick={clickHandler.bind(null, setPressed1)}
            >
                1
            </Button>
            <Button
                aria-pressed={pressed2}
                onClick={clickHandler.bind(null, setPressed2)}
            >
                2
            </Button>
            <Button
                aria-pressed={pressed3}
                onClick={clickHandler.bind(null, setPressed3)}
            >
                3
            </Button>
            <Button
                aria-pressed={pressed4}
                onClick={clickHandler.bind(null, setPressed4)}
            >
                4
            </Button>
        </Cotaniner>
    );
});
