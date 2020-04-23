import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../app/stores/activityStore';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activityStore = useContext(ActivityStore);
  const { openCreateForm } = activityStore;
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
          Your Activities
        </Menu.Item>
        <Menu.Item name="Activities" as={NavLink} to="/activities" />
        <Menu.Item>
          <Button as={NavLink} to="/create-activity" onClick={openCreateForm} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
