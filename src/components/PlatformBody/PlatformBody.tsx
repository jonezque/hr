import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { MainMenu, SubMenu, ContentInfo } from "..";

const mobileBreakpoint = 640;
const tabletBreakpoint = 960;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

enum Layout {
    None,
    Mobile,
    Tablet,
    Desktop,
}

export default memo(() => {
    const [layout, setLayout] = useState(Layout.None);

    const measuredRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            let currentLayout =
                mobileBreakpoint > node.clientWidth
                    ? Layout.Mobile
                    : tabletBreakpoint <= node.clientWidth
                    ? Layout.Desktop
                    : Layout.Tablet;

            setLayout(currentLayout);
        }
    }, []);

    return <Content ref={measuredRef}>{renderPanels(layout)}</Content>;
});

const renderPanels = (layout: Layout) => {
    switch (layout) {
        case Layout.Mobile:
            return <MainMenu />;
        case Layout.Tablet:
            return (
                <>
                    <MainMenu />
                    <SubMenu />
                </>
            );
        case Layout.Desktop:
            return (
                <>
                    <MainMenu />
                    <SubMenu />
                    <ContentInfo />
                </>
            );
    }

    return null;
};
