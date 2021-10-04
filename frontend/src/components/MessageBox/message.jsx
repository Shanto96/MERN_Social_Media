import React from "react";

function Message({own}) {
  return (
    <div> { !own ? <div className="message-wraper mt-4">
        <div className="user-info-msg">
          <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
        </div>
        <div className="message-body">
          <span className="message-content p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolore, animi libero ipsam illum quia asperiores iure esse quae
            nobis voluptas illo hic ratione vel tenetur ducimus, accusantium
            magni excepturi quasi! Quod beatae ut minus eligendi itaque fugit
            saepe impedit.
          </span>
          <span className="time d-block text-muted">3 hours ago</span>
        </div>
        
      </div>  :<div className="message-wraper mt-4">
       
        <div className="message-body ">
          <span className="message-content ml-5 p-3 msg-own ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolore, animi libero ipsam illum quia asperiores iure esse quae
            nobis voluptas illo hic ratione vel tenetur ducimus, accusantium
            magni excepturi quasi! Quod beatae ut minus eligendi itaque fugit
            saepe impedit.
          </span>
          <span className="time d-block text-muted">3 hours ago</span>
        </div>
       
        
      </div>}
      
    </div>
  );
}

export default Message;
