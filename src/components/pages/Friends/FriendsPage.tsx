import Referred from "./Referred";
import Referrer from "./Referrer";

const FriendsPage = () => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r rounded-lg p-4">
      <div className="mb-2 p-1">
        <h2>FriendsPage Page</h2>
      </div>
      <Referrer />
      <Referred />

      <p>Esto no hace nada</p>
    </div>
  );
};
export default FriendsPage;
