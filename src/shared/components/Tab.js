import React from "react";
import styled from "styled-components";

const TabItem = styled.li`
  cursor: pointer;
  text-align: center;
  margin: 10px;
  padding: 12px;
  width: 15%;
`;

export default function Tab(props) {
  const { activeTab, label, onClick } = props;
  let className = "nav-link";

  if (activeTab === label) {
    className += " active";
  }

  return (
    <TabItem className={className} onClick={() => onClick(label)}>
      {label}
    </TabItem>
  );
}
