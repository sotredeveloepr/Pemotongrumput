import GameServer from "./server/game/GameServer.js";
import DispatchServer from "./server/dispatch/DispatchServer.js";

const gameServer = new GameServer();
const dispatchServer = new DispatchServer();

dispatchServer.start();
gameServer.start();