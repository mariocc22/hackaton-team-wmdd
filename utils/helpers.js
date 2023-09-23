//  fetch reports
const fetchReports = async () => {
  const res = await fetch("http://localhost:5000/reports");
  const data = await res.json();
  return data;
};

// fetch single report
const fetchReport = async (id) => {
  const res = await fetch(`http://localhost:5000/reports/${id}`);
  const data = await res.json();
  return data;
};

// add task
const addReport = async (task) => {
  const res = await fetch("http://localhost:5000/reports", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();
  return data;
};

// delete report
const deleteReport = async (id) => {
  await fetch(`http://localhost:5000/reports/${id}`, {
    method: "DELETE",
  });
};

// update report
const updateReport = async (id, property) => {
  const reportToUpdate = await fetchReport(id);
  const updatedReport = { ...reportToUpdate, ...property };

  const res = await fetch(`http://localhost:5000/reports/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedReport),
  });

  const data = await res.json();
  return data;
};

// export
export { fetchReports, fetchReport, addReport, deleteReport, updateReport };
