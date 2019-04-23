import React from 'react';
import styled from 'styled-components';
import { getColor } from 'views/App/theme';

const Wrapper = styled.div.attrs({ 'data-test': 'wrapper' })`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  padding: 0 25px;
  border-top: 1px solid ${getColor('lightGrey')};
`;

const PagesList = styled.ul.attrs({ 'data-test': 'pageList' })`
  display: flex;
  margin: 0;
  padding: 0;
`;

const PageOption = styled.li`
  font-family: Roboto, sans-serif;
  list-style: none;
  cursor: pointer;
  margin-right: 20px;
  color: ${getColor('primary')};
  
  &:hover {
    color: ${getColor('text')};
  }
`;

const Copyright = styled.span.attrs({ 'data-test': 'copyright' })`
  color: ${getColor('secondary')};
`;

const Footer = props => (
  <Wrapper>
    <PagesList>
      <PageOption><span>About</span></PageOption>
      <PageOption><span>Services</span></PageOption>
      <PageOption><span>About</span></PageOption>
      <PageOption><span>Products</span></PageOption>
      <PageOption><span>Blog</span></PageOption>
    </PagesList>
    <Copyright>Copyright © 2019 Binariks</Copyright>
  </Wrapper>
);

export default Footer;