import "../styles/loading.css";

const Loading = () => {
  return (
    <div className="container">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;