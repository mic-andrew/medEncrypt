import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { API_BASE_URL } from "../utils";
import ReactLoading from "react-loading";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

const Analytics = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/patients`);
      const data = await response.json();
      setPatients(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching patients:", error);
      setLoading(false);
    }
  };

  const getDiagnosisData = () => {
    const diagnosisCounts = patients.reduce((acc, patient) => {
      acc[patient.diagnosis] = (acc[patient.diagnosis] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(diagnosisCounts).map(([name, value]) => ({
      name,
      value,
    }));
  };

  const getAgeData = () => {
    const ageCounts = patients.reduce((acc, patient) => {
      acc[patient.age] = (acc[patient.age] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(ageCounts).map(([name, value]) => ({ name, value }));
  };

  if (loading) {
    return <ReactLoading type="spin" color="#007BFF" />;
  }

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Patient Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold mb-4">Diagnosis Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getDiagnosisData()}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {getDiagnosisData().map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold mb-4">Age Group Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getAgeData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
