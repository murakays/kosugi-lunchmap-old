// レストランのエリア
import { css } from '@emotion/core';

// Todo 分別を検討し直す
export const restaurantArea: { [key: string]: string } = {
  NE: '新丸子駅東',
  NW: '新丸子駅西',
  SE: '市役所・東急南口周辺',
  SW: '法政通り周辺',
};

// 画像サイズ
export const mediaSize = {
  lists: css`
    width: 324px;
    height: 200px;
  `,
  details: css`
    width: 648px;
    height: 400px;
  `,
};

// detailInfoCardのラベル

export const detailInfoLabel: { [key: string]: string } = {
  restaurantName: '店名',
  area: 'エリア',
  address: '住所',
  smoking: '禁煙・喫煙',
  eMoney: '電子マネー',
  sns: 'SNS',
  businessDay: '営業日',
};

export const detailTitleLabel: { [key: string]: string } = {
  detail: '店舗詳細',
  businessDay: '営業日',
};

export type IDetailTitleLabel = keyof typeof detailTitleLabel;

export const businessDayLabel: { [key: string]: string } = {
  sun: '日',
  mon: '月',
  tue: '火',
  wed: '水',
  thu: '木',
  fri: '金',
  sat: '土',
};
