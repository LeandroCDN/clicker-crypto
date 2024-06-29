import Boosts from "./Boosts";
import Tools from "./Tools";

const UpgradesPage = () => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r  rounded-lg p-4">
      <div className="mb-4 p-1">
        <h2>Upgrades Page</h2>
      </div>
      <Boosts />
      <Tools />
      <p>Esto no hace nada</p>
    </div>
  );
};
export default UpgradesPage;
