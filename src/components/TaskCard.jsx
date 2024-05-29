

function TaskCard({name, description, imageUrl, duration, priority}) {

  
    return (
      <div className="card">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{duration} Hours</p>
          <p>{priority} Priority</p>
          <img className="card-image" src={imageUrl} alt="broken image" height={"150 px"} />
          
      </div>
        
    );
  };
  
  export default TaskCard;