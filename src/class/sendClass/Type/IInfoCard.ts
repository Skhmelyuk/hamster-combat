export interface IInfoCard {
	upgradesForBuy: UpgradesForBuy[];
	sections:       SectionElement[];
	dailyCombo:     DailyCombo;
}

interface DailyCombo {
	upgradeIds:    string[];
	bonusCoins:    number;
	isClaimed:     boolean;
	remainSeconds: number;
}

interface SectionElement {
	section:     SectionEnum;
	isAvailable: boolean;
}

export enum SectionEnum {
	Legal = "Legal",
	Markets = "Markets",
	PRTeam = "PR&Team",
	Specials = "Specials",
}

export interface UpgradesForBuy {
	id:                    string;
	name:                  string;
	price:                 number;
	profitPerHour:         number;
	condition:             Condition | null;
	section:               SectionEnum;
	level:                 number;
	currentProfitPerHour:  number;
	profitPerHourDelta:    number;
	isAvailable:           boolean;
	isExpired:             boolean;
	cooldownSeconds?:      number;
	totalCooldownSeconds?: number;
	expiresAt?:            Date;
	maxLevel?:             number;
	welcomeCoins?:         number;
	releaseAt?:            Date;
}

interface Condition {
	_type:               Type;
	upgradeId?:          string;
	level?:              number;
	referralCount?:      number;
	moreReferralsCount?: number;
	link?:               string;
	channelId?:          number;
	subscribeLink?:      string;
	links?:              string[];
}

enum Type {
	ByUpgrade = "ByUpgrade",
	LinkWithoutCheck = "LinkWithoutCheck",
	LinksToUpgradeLevel = "LinksToUpgradeLevel",
	MoreReferralsCount = "MoreReferralsCount",
	ReferralCount = "ReferralCount",
	SubscribeTelegramChannel = "SubscribeTelegramChannel",
}
