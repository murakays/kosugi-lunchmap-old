// レストランのエリア
import { css } from '@emotion/core';

export const restaurantArea: { [key: string]: string } = {
  NE: '新丸子駅東',
  NW: '新丸子駅西',
  SE: 'グランツリー・ららテラス周辺',
  SW: '市役所・法政通り周辺',
};

// 画像サイズ
export const mediaSize = {
  lists: css`
    width: 324px;
    height: 200px;
  `,
};
