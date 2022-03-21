import { DownloadOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import ApplicantList from "components/ApplicantList";
import DashboardLayout from "HOC/DashboardLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRecruiterJobs from "reduxStore/actions/jobs/getRecruiterJobs";
import "./applicants.scss";

const { Option } = Select;
const { Title, Text } = Typography;
const Applicants = () => {
  const dispatch = useDispatch();
  const [selectedApplicant, setSelectedApplicant] = useState();
  const [selectedApplication, setSelectedApplication] = useState();
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
    setSelectedApplicant(application.applicant);
    setSelectedApplication(application);
  };

  useEffect(() => {
    setSelectedApplicant(null);
    setSelectedApplication(null);
  }, [selectedJobId]);

  return (
    <DashboardLayout>
      <Title>Job applicants</Title>
      <Select
        value={selectedJobId}
        placeholder="Select job"
        onChange={(value) => setSelectedJobId(value)}
        className="select-input"
        loading={loading}
      >
        {!loading &&
          recruiterJobs &&
          recruiterJobs.map((job) => (
            <Option key={job._id} value={job._id}>
              {job.title}
            </Option>
          ))}
      </Select>
      <Row gutter={32}>
        <Col md={10} xs={24} sm={12}>
          <ApplicantList
            selectedJobId={selectedJobId}
            selectApplicant={handleSelectApplicant}
          />

          {!loading && error && !recruiterJobs && (
            <Alert message={error.message} type="error" />
          )}
        </Col>
        <Col md={14} xs={24} sm={12}>
          {selectedApplicant && (
            <Card
              actions={[
                <Button icon={<DownloadOutlined />}>
                  <a
                    href={selectedApplication.cvFile}
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    Download CV
                  </a>
                </Button>,
                <Button>Make decision</Button>,
              ]}
            >
              <Title level={2}>Application details</Title>
              <Divider />

              {selectedApplicant && (
                <>
                  <Title level={4}>
                    {`${selectedApplicant.firstName} ${selectedApplicant.lastName}`}
                  </Title>
                  <Text>{selectedApplicant.email}</Text>
                  <br />
                  <Text>{selectedApplicant.phoneNumber}</Text>
                  <br />
                  <Tag>{selectedApplication.status}</Tag>
                </>
              )}
            </Card>
          )}
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default Applicants;
