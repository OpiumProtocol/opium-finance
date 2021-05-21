---
title: 'Opium Staking'
date: '2021-05-07'
author: 'Andrey Belyakov'
featuredImage: ./opiumstaking.png
previewText: 'Staking pools eanr premiums by selling protection contracts and turbo products'
---

# STAKING

## Opium insurance 

1) Stablecoin: USDT
Stake USDC into USDT protection pool. Pooled funds are used to provide coverage for the insurance buyers.
If USDT price drops below 0.95 USD by the end of the insurance period, part of the pooled funds will be used for payout to insurance buyers. Pool earns premiums by selling protection contracts.

2) Smart contract: Matic Bridge 
Stake USDT into Matic Bridge protection pool. Pooled funds are used to provide coverage for the insurance buyers. If Matic Bridge is hacked by the end of the insurance period, part of the pooled funds will be used for payout to insurance buyers. Pool earns premiums by selling protection contracts.

3) Smart contract: xDAI Omnibridge
Stake USDC into xDAI Omnibridge protection pool. Pooled funds are used to provide coverage for the insurance buyers. If xDAI Omnibridge is hacked by the end of the insurance period, part of the pooled funds will be used for payout to insurance buyers. Pool earns premiums by selling protection contracts.


**Example**

*Decentralized insurance sellers stake their capital in an insurance pool and receive a liquidity provider token. They earn income on their deposit because the premium paid by buyers is added to the pool.*


Let’s imagine you stake 700 USDC to the USDT protection pool for a month. In this month, the pool sells insurances to cover 2000 USDT. There are other 6300 USDC staked in the pool, so your premium payment is 10% of overall premium paid by insurance buyers. At the end of the month, if no event covered by the decentralized insurance has occurred, you retain your funds. However, if any of the covered events have taken place, insurance buyers are eligible for a payout that is covered by pooled funds. Payout is calculated by the formula (1-current price of the asset)* sold cover amount. If by the end of one month USDT will cost 0.90 USD, the payout will be (1-0.90)*2000=200 USD.



## Turbos

Turbo is a product with a short expiry that gives investors highly leveraged exposure to the underlying asset. Crypto stakers form a liquidity pool that covers turbo products. The staking pool can offer a statistically stable return on staked crypto, but stakers will sacrifice abnormal daily or weekly returns for the proceeds from selling Turbos. On the other hand, if the pool does not sell enough Turbos, crypto is not utilized and remains in the pool without any risk associated, as they would stay in a wallet.


### Opium Turbos

- Weekly Turbo AAVE
- Daily Turbo ETH


Stake AAVE/ETH into AAVE/ETH Turbo selling pool. Pooled funds are used to provide coverage for the turbo buyers. If the price of AAVE/ETH is above the strike price by the end of the turbo period, part of the pooled funds will be used to payout turbo buyers. Pool earns premiums by selling turbo contracts.

**Example**

*The pool works this way: you can stake some crypto, for example 2 ETH, into the pool to cover the mining of Turbos. In return, you receive the fees from the Turbo purchasers (costs of Turbo) generated in a day plus retain a daily appreciation of ETH up to 3%, while all daily appreciation above 3% goes to the Turbo purchasers.*

*If the pool does not sell any Turbos on a specific day, the ETH will not be at market risk and retain all price appreciation. By setting 3% floor on daily appreciation, most of the time, profits from selling Turbos should cover payouts to the Turbo purchasers while effectively generating interest on crypto for stakers.*




## Call option
Put option is a financial contract that gives the seller the right, but not the obligation, to sell an underlying asset at a specified price within a specific time period from several months to a year. A seller profits when the underlying asset decreases in price as they receive the premium from the buyer and can retain their assets. It is a covered position with hedged risks.

### **OPIUM Pool Call Option (coming soon)**

Stake $OPIUM into the OPIUM Call Option selling pool. Pooled funds are used to provide coverage for the option buyers. If the price of the OPIUM token is above the strike price by the end of the option period, part of the pooled funds will be used for payouts to option buyers. Pool earns premiums by selling option contracts.

**Example**

*You own OPIUM governance tokens and you are willing to make an option call on this asset. Currently, $OPIUM costs 6 USD. You issue 20 option calls with a strike price of 10 USD and a maturity date within three months, and receive a premium of 5 USD. 
In three months, $OPIUM is 20 USD. It means you own option buyer 10 USD per contract, or 200 USD in total. Theoretically, you could sell your tokens for 400 USD, pay out 200 USD to the option buyer and retain the remaining 200 USD as profit. On Opium, you don’t have to sell your tokens, but transfer upside to the option buyer instead. 
If in three months $OPIUM is down to 5 USD, you retain your premium and your tokens in the likely scenario that the option buyer decides not to proceed with the trade.* 



