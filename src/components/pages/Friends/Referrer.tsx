const Referrer = () => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r rounded-lg p-2">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-center">Referrer</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg text-black">
            Quien te refirió:{" "}
            <span className="font-semibold text-black">
              Nombre del Referrer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Referrer;
