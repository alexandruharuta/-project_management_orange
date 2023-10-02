const DeleteModal = ({onDialog, message}) => {
  return (
    <div
      id="deleteContainer"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex bg-white m-auto h-50 w-1/2 rounded-lg items-center justify-center">
        <div className="flex flex-col justify-center items-center h-40 w-full text-3xl text-black">
          <div className="w-fit my-4 font-semibold">{message}</div>
          <div className="flex mt-4 space-x-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => onDialog(true)}>
              Yes
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              onClick={() => onDialog(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
