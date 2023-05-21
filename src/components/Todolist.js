import React from "react";

export default function Todolist({ todolist, markasdone ,remove}) {
  const completedhandler = (id) => {
    markasdone(id);
  };
  const removehandler = (id) => {
    remove(id);
  };
  return (
    <>
      <div className="container" style={{width:"900px" }}>
        <br />
        <h2 style={{textAlign:"center"}}>Todo List</h2>
        <br />

        <table class="table">
          <thead>
            <tr>
              <th scope="col-1" style={{width:"105px"}}>#</th>
              <th scope="col-5" style={{width:"455px"}}>TASK</th>
              <th scope="col-1" style={{width:"55px"}}>Action1</th>
              <th scope="col-1" style={{width:"55px"}}>Action2</th>
            </tr>
          </thead>
          <tbody>
            {(todolist || []).map(function (el, key) {
              return (
                <tr className={el.status === 2 ? 'markdone' : ''}>
                  <td style={{fontWeight:"bold"}}>{key + 1}</td>
                  <td style={{fontWeight:"bold"}}>{el.todo}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => {
                        completedhandler(el.id)
                      }}
                    >
                      Completed
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        removehandler(el.id)
                      }}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
