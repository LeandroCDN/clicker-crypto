const Referred = () => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r rounded-lg p-2 text-black">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-white">
          Referidos
        </h2>
        <div className="bg-gray-100 bg-opacity-5 p-4 rounded-lg space-y-2">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <p className="text-lg">Referido 1</p>
          </div>
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <p className="text-lg">Referido 2</p>
          </div>
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <p className="text-lg">Referido 3</p>
          </div>
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <p className="text-lg">Referido 4</p>
          </div>
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <p className="text-lg">Referido 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Referred;
