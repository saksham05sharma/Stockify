import React from "react";
import {FaStar} from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}


function Feedback() {

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
   
  };


  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = value => {
    setHoverValue(undefined)
  }

  
  function submitHandler(){
    console.log(currentValue);
  }


  return (
    
    <div style = {styles.container}>
      <h2>Rate Us</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar key = {index} size = {24} style = {
              {
                marginRight: 10,
                cursor: "pointer",
              }
            }
            color={(hoverValue || currentValue)> index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={()=>handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your feedback"
        style={styles.textarea}
      />
      <button style={styles.button} onClick={submitHandler} >Submit</button>
    </div>
  );
};

const styles = {
  container: {
    margin: "40px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
}

export default Feedback;