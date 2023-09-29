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
      <div className="flex flex-col bg-white m-auto h-5/6 w-5/6 rounded-lg">    
      <button onClick={onClose} className="ml-auto p-2 h-fit mr-4 text-2xl text-light-gray-300" >x</button>
        <div className="flex justify-center items-center h-26 w-80 text-3xl">
            New project 
        </div>
        <div className="flex ml-20  ">
          <div className="p-1 mt-10">
          Project name<br/>
            <input 
            className="mt-4 border-b-2 border-gray-300 w-96"
            type="text"
            placeholder="Name">
              {/* value={projectData.name} */}
            </input>
            <div className="mt-7"> 
              Privacy
              </div>
              <select className="mt-4 border-b-2 border-gray-300 w-96">
              <option selected disabled> Public to My Workspace</option>
              <option >Public to My Workspace</option> 
              <option >Private to My Workspace</option>
              </select>
            <div className="mt-8 ">
              Default view
            </div>
            <div className="grid grid-cols-2  gap-4">
              {/* <img width="48" height="48" src="https://img.icons8.com/color/48/000000/multiple-choice.png"/>*/}
              <button>list</button>
               <button >board</button>
               <button >timeline</button>
              <button>calendar</button>
            </div>
          </div>
      
        </div>


      </div>
    </div>

  );
}