export interface ISync {
	clickerUser: ClickerUser;
}

interface ClickerUser {
	id:                 string;
	totalCoins:         number;
	balanceCoins:       number;
	level:              number;
	availableTaps:      number;
	lastSyncUpdate:     number;
	exchangeId:         string;
	boosts:             Boosts;
	upgrades:           { [key: string]: BoostEarnPerTap };
	tasks:              Tasks;
	airdropTasks:       AirdropTasks;
	referralsCount:     number;
	maxTaps:            number;
	earnPerTap:         number;
	earnPassivePerSec:  number;
	earnPassivePerHour: number;
	lastPassiveEarn:    number;
	tapsRecoverPerSec:  number;
	createdAt:          Date;
	claimedCipherAt:    Date;
	balanceTickets:     number;
}

interface AirdropTasks {
	airdrop_connect_ton_wallet: AirdropConnectTonWallet;
}

interface AirdropConnectTonWallet {
	id:            string;
	walletAddress: string;
	completedAt:   Date;
}

interface Boosts {
	BoostEarnPerTap:        BoostEarnPerTap;
	BoostMaxTaps:           BoostEarnPerTap;
	BoostFullAvailableTaps: BoostEarnPerTap;
}

interface BoostEarnPerTap {
	id:                      string;
	level:                   number;
	lastUpgradeAt:           number;
	snapshotReferralsCount?: number;
}

interface Tasks {
	streak_days:                  StreakDays;
	subscribe_telegram_channel:   HamsterYoutubeAcademyS1E6;
	select_exchange:              HamsterYoutubeAcademyS1E6;
	hamster_youtube_academy_s1e6: HamsterYoutubeAcademyS1E6;
	subscribe_x_account:          HamsterYoutubeAcademyS1E6;
}

interface HamsterYoutubeAcademyS1E6 {
	id:          string;
	completedAt: Date;
}

interface StreakDays {
	id:          string;
	completedAt: Date;
	days:        number;
}