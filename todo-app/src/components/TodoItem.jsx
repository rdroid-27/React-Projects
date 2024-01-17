/* eslint-disable react/prop-types */

function TodoItem1({todoName, todoDate}) {
  return (
    <div className="container">
      <div className="row rg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger rg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
