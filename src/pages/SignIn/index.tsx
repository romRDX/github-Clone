import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { FaGithub, FaArrowCircleRight } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';
import signInBackground from '../../assets/gitBkg.png';

interface RepositoryVars {
  user: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState('');

  const { signIn } = useAuth();

  const handleChangeField = useCallback(
    ({ target }) => {
      setUser(target.value);
    },
    [setUser],
  );

  const handleSignIn = useCallback(() => {
    signIn(user);
  }, [signIn, user]);

  return (
    <Container img={signInBackground}>
      <Content>
        <strong>
          Github Explorer {user}
          <FaGithub />
        </strong>
        <input onChange={handleChangeField} placeholder="Your github user" />
        <button type="button" onClick={handleSignIn}>
          Explore!
          <FaArrowCircleRight />
        </button>
      </Content>
    </Container>
  );
};

export default Dashboard;
