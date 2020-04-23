import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../app/stores/activityStore';

const NavBar = () => {
  const activityStore = useContext(ActivityStore);
  const { openCreateForm } = activityStore;
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
          Your Activities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button onClick={openCreateForm} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
