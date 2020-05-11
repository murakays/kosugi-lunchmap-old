/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FirebaseUser, firebaseLogin, firebaseLogout } from '@/lib/firebase';
import { useDispatch } from 'react-redux';

const HeaderStyle = styled.header`
  min-width: 980px;
  margin: 0 auto;
  height: 50px;
  display: flex;
`;

type UseHooksProps = {
  login: () => void;
  logout: () => void;
};
const useHooksProps = (): UseHooksProps => {
  const dispatch = useDispatch();
  return {
    login: React.useCallback(() => {
      dispatch(firebaseLogin());
    }, [dispatch]),
    logout: React.useCallback(() => {
      dispatch(firebaseLogout());
    }, [dispatch]),
  };
};

type IProps = {
  user: FirebaseUser;
};
type IHeader = IProps & UseHooksProps;

const Header: React.FC<IHeader> = (props: IHeader) => {
  const TitleLogo = styled.div`
    width: 500px;
    height: 40px;
    background-color: blue;
  `;
  const { user, login, logout } = props;

  // ログイン用リンクはGoogleの公式バナーを用いる
  return (
    <HeaderStyle>
      <TitleLogo />
      {user ? (
        <div>
          <span>{user?.displayName || 'guest'}</span>
          <a
            href=""
            onClick={(event: React.MouseEvent<HTMLAnchorElement>): void => {
              event.preventDefault();
              logout();
            }}
          >
            ログアウト
          </a>
        </div>
      ) : (
        <div>
          <span>ログインしていません(バナーを使う）</span>
          <a
            href=""
            onClick={(event: React.MouseEvent<HTMLAnchorElement>): void => {
              event.preventDefault();
              login();
            }}
          >
            Googleアカウントでログインする
          </a>
        </div>
      )}
    </HeaderStyle>
  );
};

export default function HeaderContainer(props: IProps): JSX.Element {
  const _props = { ...props, ...useHooksProps() };
  return <Header {..._props} />;
}
