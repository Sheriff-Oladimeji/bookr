
import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json"

const Room = () => {
  const params = useParams();
  

 
    const filteredRooms = rooms.filter((room) => room.id === params.id);
    console.log(filteredRooms)
  
  

  return (
    <div>
      {filteredRooms.map((roomInfo) => (
        <div key={roomInfo.id}>
          <div>
            <img src={roomInfo.img} alt="" />
            <p>{roomInfo.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
