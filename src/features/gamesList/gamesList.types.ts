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
    rowCount: string;
    colCount: string;
    streakLength: string;
    maxPlayerCount: string;
    exactPlayerCount: string;
    timeLimit: string;
    winMode: string;
    tilePop: string;
}