export default function CreateModal({visible, onClose}) {
    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose()
    };

    if(!visible) return null;

  return (
    <div 
        id='container'
     onClick={handleOnClose} 
     className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center intems-center"> 
      <div className="flex bg-white m-auto h-5/6 w-5/6 rounded-lg">
        <div className="flex justify-center items-center h-40 w-80 text-3xl">
            New project 
        </div>
      </div>
    </div>

  );
}