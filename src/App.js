import React from 'react';

function App() {
  return (
    <div>
      {/* Top-level heading */}
      <h1>Hi, I'm Mark</h1>

      {/* Image */}
      <img
        src="image.jpg"
        alt="This is an image of me.jpg"></img>
        

      {/* Second-level heading */}
      <h2>About Me</h2>

      {/* Biography paragraph */}
      <p>This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
      
      {/* Links to GitHub and LinkedIn */}
      <a href="https://github.com/mark-kibuthu">GitHub</a>
      <a href="https://linkedin.com/in/my-username">LinkedIn</a>
    </div>
  );
}

export default App;
