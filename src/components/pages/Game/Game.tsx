import Daily from "./Daily";
import Coins from "./Coins";
import Click from "./Click";
import Status from "./Status";

const Game = () => {
  return (
    <div className="min-h-[400px] ">
      <Daily />
      <Coins />
      <Click />
      <Status />
    </div>
  );
};
export default Game;
