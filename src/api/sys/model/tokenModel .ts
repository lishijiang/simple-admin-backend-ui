import { BaseListResp } from '../../model/baseModel';

/**
 *  author: Ryan Su
 *  @description: token info response
 */
export interface TokenInfo {
  id: number;
  createAt?: number;
  UUID: string;
  token: string;
  source: string;
  status: string;
  expireAt: number;
}

/**
 *  author: Ryan Su
 *  @description: token list response
 */

export type TokenListResp = BaseListResp<TokenInfo>;