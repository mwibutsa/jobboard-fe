import { Alert, Card, Skeleton } from "antd";
import ApplicantCard from "components/ApplicantCard";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getJobApplicants from "reduxStore/actions/jobs/getJobApplicants";
import "./applicant-list.scss";

const ApplicantList = ({ selectedJobId, selectApplicant }) => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    ({ jobApplicants }) => jobApplicants
  );

  useEffect(() => {
    if (selectedJobId) {
      getJobApplicants(selectedJobId)(dispatch);
    }
  }, [dispatch, selectedJobId]);

  return (
    <div className="applicants">
      {loading && (
        <div className="applicants__placeholder">
          {[...Array(4).keys()].map((item) => (
            <Card key={item} className="placeholder-card">
              <Skeleton paragraph={{ rows: 2 }} active />
            </Card>
          ))}
        </div>
      )}
      {!loading &&
        data &&
        data.map((application) => {
          return (
            <ApplicantCard
              key={application._id}
              onSelect={selectApplicant}
              application={application}
            />
          );
        })}

      {!loading && error && <Alert message={error.message} type="error" />}

      {!loading && Array.isArray(data) && !data.length && (
        <Alert
          className="no-applicants"
          message="No applications have been submitted yet."
        />
      )}
    </div>
  );
};

ApplicantList.propTypes = {
  selectedJobId: PropTypes.string.isRequired,
  selectApplicant: PropTypes.func.isRequired,
};

export default ApplicantList;
