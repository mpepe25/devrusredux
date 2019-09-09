import React from "react";

function HomePage({ Events }) {
    return (
      <div>
        <h1> DevRus</h1>
        <hr/>
        {
          Events && Events.map((event, i) => {
            return (
              <div key={i+"-event"}>
                <h5>{event.name}</h5>
                <p>{event.location}</p>
                <p>{event.description}</p>
              </div>
            )
          })
        }
      </div>
    );
}
export default HomePage;
