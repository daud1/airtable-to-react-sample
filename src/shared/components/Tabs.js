import React, { useState } from "react";
import Tab from "./Tab";
import styled from "styled-components";

const TabList = styled.ul`
  padding: 10px;
  align-items: center;
`;

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const { children, className } = props;

  const onClickTab = (tab) => setActiveTab(tab);

  return (
    <>
      <TabList className={className}>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTab}
              className="nav-item"
            />
          );
        })}
      </TabList>
      {children.map((child) => {
        return child.props.label === activeTab
          ? child.props.children
          : undefined;
      })}
    </>
  );
}
