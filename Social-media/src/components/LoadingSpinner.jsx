const LoadingSpinner = () => {
  return (
    <center>
      <div className="d-flex justify-content-center spinner">
        <div
          className="spinner-border"
          role="status"
          style={{
            width: "5rem",
            height: "5rem",
            margin: "10% 0%"
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
};
export default LoadingSpinner;
