import React, { useState } from 'react';
import styled from 'styled-components';

const Sidebar = (props) => {
  const { links } = props;
  const [selectedMenus, setSelectedMenus] = useState([]);
  const handleMenuSelection = (label, depth) => {
    setSelectedMenus((selectedMenus) => {
      // trim any menus after the depth
      selectedMenus.length = depth;
      if (label !== '') {
        selectedMenus[depth] = label;
      }
      return [...selectedMenus];
    });
  };

  return (
    <Sidebar.Wrapper>
      <Sidebar.List onMouseLeave={() => setSelectedMenus([])}>
        {links.map((link) => {
          return (
            <SidebarItem
              link={link}
              handleMenuSelection={handleMenuSelection}
              key={link.label}
              selectedMenus={selectedMenus}
            />
          );
        })}
      </Sidebar.List>
    </Sidebar.Wrapper>
  );
};

const SidebarItem = ({
  link,
  handleMenuSelection,
  selectedMenus,
  depth = 0,
}) => {
  const { label, path, children = [] } = link;
  return (
    <>
      {children.length > 0 ? (
        <SidebarItem.Item>
          <SidebarItem.Label
            onMouseEnter={() => handleMenuSelection(label, depth)}
          >
            {label}
          </SidebarItem.Label>
          {selectedMenus[depth] === label && (
            <SidebarItem.List depth={depth}>
              {children.map((child, i) => {
                const { label } = child;
                const childDepth = depth + 1;
                return (
                  <SidebarItem
                    link={child}
                    handleMenuSelection={handleMenuSelection}
                    key={`child-${label}-${i}`}
                    depth={childDepth}
                    selectedMenus={selectedMenus}
                  />
                );
              })}
            </SidebarItem.List>
          )}
        </SidebarItem.Item>
      ) : (
        <SidebarItem.Item onMouseEnter={() => handleMenuSelection('', depth)}>
          <SidebarItem.Anchor href={path}>{label}</SidebarItem.Anchor>
        </SidebarItem.Item>
      )}
    </>
  );
};

Sidebar.Wrapper = styled.nav`
  background: white;
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 375px;
  border-right: 1px solid lightgrey;
`;
Sidebar.List = styled.ul``;
SidebarItem.List = styled.ul`
  width: 375px;
  display: block;
  position: absolute;
  left: 375px;
  top: -1px;
  border: 1px solid lightgrey;
  border-width: 1px 1px 0 0;
`;
SidebarItem.Item = styled.li`
  position: relative;
  border-bottom: 1px solid lightgrey;
`;
SidebarItem.Anchor = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-decoration: none;
  color: black;
`;
SidebarItem.Label = styled.span`
  position: relative;
  padding: 20px;
  width: 100%;
  display: block;
  &::after {
    position: absolute;
    content: '\\276F';
    right: 20px;
  }
`;

export default Sidebar;
