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

// create a function that gives you lat and lng from a random address in canada the lat range is 49.2 to 49.3 and the lng range is -123.1 to -123.2 4 decimals
const randomAddress = () => {
  const lat = (Math.random() * (49.3 - 49.2) + 49.2).toFixed(4);
  const lng = (Math.random() * (-123.1 - -123.2) + -123.2).toFixed(4);
  return { lat, lng };
};

// export
export {
  fetchReports,
  fetchReport,
  addReport,
  deleteReport,
  updateReport,
  randomAddress,
};
