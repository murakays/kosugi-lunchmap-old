/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { FirebaseUser, firebaseLogin, firebaseLogout } from '@/lib/firebase';
import { useDispatch } from 'react-redux';

// images
import logo from '../../../images/KOSUGILUNCHMAP-logo.png';
import signInButton from '../../../images/btn_google_signin_light_focus_web.png';

const HeaderStyle = styled.header`
  min-width: 980px;
  margin: 0 auto;
  height: 120px;
  display: flex;
`;

const SignInStateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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
  const { user, login, logout } = props;

  // ログイン用リンクはGoogleの公式バナーを用いる
  return (
    <HeaderStyle>
      <img src={logo} alt="KOSUGILUNCHMAP" />
      {user ? (
        <SignInStateWrapper>
          <div
            css={css`
              color: gray;
            `}
          >
            <span>ユーザー：</span>
            <span
              css={css`
                margin-right: 8px;
              `}
            >
              {user?.displayName || 'guest'}
            </span>
          </div>
          <a
            href=""
            onClick={(event: React.MouseEvent<HTMLAnchorElement>): void => {
              event.preventDefault();
              logout();
            }}
          >
            ログアウト
          </a>
        </SignInStateWrapper>
      ) : (
        <SignInStateWrapper>
          <img
            src={signInButton}
            alt="signInGoogle"
            onClick={login}
            css={css`
              cursor: pointer;
            `}
          />
        </SignInStateWrapper>
      )}
    </HeaderStyle>
  );
};

export default function HeaderContainer(props: IProps): JSX.Element {
  const _props = { ...props, ...useHooksProps() };
  return <Header {..._props} />;
}
