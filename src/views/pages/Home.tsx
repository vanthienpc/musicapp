import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import SearchBox from 'views/components/SearchBox';
import ErrorBox from 'views/components/ErrorBox';
import { GlobalStyled } from 'views/components/GlobalStyled';
import FilterGenre from 'views/components/FilterGenre';
import Results from 'views/components/Results';

const { Header, Content, Footer } = Layout;

const MainContent = styled(Content)`
  background-color: #ffffff;
  background: linear-gradient(180deg, #fdfeff 0%, #f4f9ff 100%);
`;

function Home(): React.ReactElement {
  const [filterValue, setFilterValue] = React.useState<string | number>('');

  const handleFilterGenre = (value: string | number): void => {
    setFilterValue(value);
  };

  return (
    <Layout>
      <GlobalStyled />
      <Header>
        <SearchBox />
      </Header>
      <MainContent>
        <ErrorBox />
        <FilterGenre handleOnClick={handleFilterGenre} />
        <Results filterValue={filterValue} />
      </MainContent>
      <Footer>@2021 Created by Thien Vo</Footer>
    </Layout>
  );
}

export default Home;
