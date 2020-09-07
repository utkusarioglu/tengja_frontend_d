export interface IGamesList {
    items: IGameListing[]
}

export interface IGameListing extends IGameListingCreate {
}

export interface IGameListingCreate extends IGameListingUserFill {
    creationDate: string;
    id: string;
}

export interface IGameListingUserFill {
    gameName:string;    
    private: boolean;    
    playerCount: string;
    rules: IGameRules;
}

export type winMode = 'firstStreak' | 'mostStreaks'

export interface IGameRules {
    timeLimit: number;
    winMode: winMode;
    tilePop: boolean;    
    rowCount: number;
    colCount: number;
    streakLength: number;
    maxPlayerCount: number;
}