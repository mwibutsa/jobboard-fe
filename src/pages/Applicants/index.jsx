import { Alert, Select } from "antd";
import ApplicantList from "components/ApplicantList";
import DashboardLayout from "HOC/DashboardLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRecruiterJobs from "reduxStore/actions/jobs/getRecruiterJobs";

const { Option } = Select;
const Applicants = () => {
  const dispatch = useDispatch();
  const [selectedApplicant, setSelectedApplicant] = useState();
  const {
    loading,
    data: recruiterJobs,
    error,
  } = useSelector(({ recruiterJobs }) => recruiterJobs);
  const [selectedJobId, setSelectedJobId] = useState("");

  useEffect(() => {
    if (Array.isArray(recruiterJobs) && recruiterJobs.length) {
      setSelectedJobId(recruiterJobs[0]._id);
    }
  }, [recruiterJobs]);
  useEffect(() => {
    getRecruiterJobs()(dispatch);
  }, [dispatch]);

  const handleSelectApplicant = (application) => {
    setSelectedApplicant(application);
  };

  return (
    <DashboardLayout>
      <Select
        value={selectedJobId}
        placeholder="Select job"
        onChange={(value) => setSelectedJobId(value)}
        style={{ marginBottom: "2rem", minWidth: "25rem" }}
      >
        {!loading &&
          recruiterJobs &&
          recruiterJobs.map((job) => (
            <Option key={job._id} value={job._id}>
              {job.title}
            </Option>
          ))}
      </Select>
      {Array.isArray(recruiterJobs) && recruiterJobs.length > 0 && (
        <ApplicantList
          selectedJobId={selectedJobId}
          selectApplicant={handleSelectApplicant}
        />
      )}
      {!loading && error && !recruiterJobs && (
        <Alert message={error.message} type="error" />
      )}
    </DashboardLayout>
  );
};

export default Applicants;
