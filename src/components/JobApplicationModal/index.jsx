import { Input, message, Modal } from "antd";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jobApplication from "reduxStore/actions/jobs/jobApplication";
const JobApplicationModal = ({ open, onHide, jobId, jobTitle }) => {
  const [cvFile, setCvFile] = useState(null);
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(
    ({ jobApplication }) => jobApplication
  );
  const submitApplication = useCallback(() => {
    if (cvFile) {
      const formData = new FormData();
      formData.append("cvFile", cvFile);
      formData.append("jobId", jobId);
      jobApplication(formData)(dispatch);
    }
  }, [cvFile, jobId, dispatch]);

  useEffect(() => {
    if (success) {
      message.success("Your application has been submitted successfully.", 10);
      onHide();
    }
  }, [success, onHide]);

  useEffect(() => {
    if (error) {
      message.error(error.message, 10);
    }
  }, [error]);

  const handleFileChange = ({ target }) => {
    setCvFile(target.files[0]);
  };

  return (
    <Modal
      visible={open}
      onCancel={onHide}
      onOk={submitApplication}
      okText="Submit application"
      title={`${jobTitle} application`}
      cancelButtonProps={{
        disabled: loading,
      }}
      okButtonProps={{
        disabled: loading,
        loading: loading,
      }}
    >
      <Input
        type="file"
        placeholder="Select your cv file"
        accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.xls,.xlsx"
        onChange={handleFileChange}
      />
    </Modal>
  );
};

JobApplicationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  jobId: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default JobApplicationModal;
