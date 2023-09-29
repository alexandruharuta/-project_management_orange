import {useState} from "react";
import {IProject} from "../../api/interfaces/IProject";
import api from "../../api/mockApi";

type Props = {
  visible: boolean;
  onClose: Function;
  onCreate: Function;
};

const CreateProjectModal: React.FC<Props> = (props) => {
  const {visible, onClose, onCreate} = props;

  const [projectData, setProjectData] = useState<IProject>({
    id: 0,
    name: "",
    tasks: [],
  });

  async function createProject(project: Partial<IProject>) {
    await api.createProject({
      id: 0,
      name: project.name || "",
      tasks: project.tasks || [],
    });
    onCreate();
  }

  const handleOnClose = (e: any) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center intems-center">
      <div className="flex bg-white m-auto h-5/6 w-5/6 rounded-lg">
        <div className="flex flex-col justify-center items-center h-40 w-full text-3xl text-black">
          <div className=" w-fit">Inser Project Name</div>
          <input
            className="w-fit text-center outline rounded-full h-fit"
            type="text"
            placeholder="Name"
            value={projectData.name}
            onChange={(e) => {
              setProjectData((p) => ({...p, name: e.target.value}));
            }}
          />
          <button
            onClick={() => createProject(projectData)}
            className="bg-green-400 mt-4">
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
