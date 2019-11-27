import React from 'react';


const layout = (props) => {

  return(

    <div>
      <p>toolbar, nav items </p>

      <main>
        {props.children}
      </main>

    </div>
  )
}

export default layout;
