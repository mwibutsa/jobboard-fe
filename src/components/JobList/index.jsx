import { Button, Card, Divider, Skeleton, Typography } from "antd";
import JobApplicationModal from "components/JobApplicationModal";
import JobCard from "components/JobCard";
import JobCardSkeleton from "components/JobCard/JobCardSkeleton";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import getJobs from "reduxStore/actions/jobs/getJobs";
import "./job-list.scss";
const { Title, Text, Paragraph } = Typography;
const JobList = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const dispatch = useDispatch();
  const params = useParams();

  const { loading, data } = useSelector(({ getJobs }) => getJobs);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(data) && data.length) {
      setSelectedJob(data[0]);
    }
  }, [data]);

  useEffect(() => {
    getJobs()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (params.id && data) {
      const selectedJobIndex = data.findIndex(
        (job) => job._id === String(params.id)
      );
      if (selectedJobIndex !== -1) {
        setSelectedJob(data[selectedJobIndex]);
        setActiveIndex(selectedJobIndex);
      }
    }
  }, [params, data]);

  const selectJobHandler = useCallback(
    (job, index) => () => {
      setActiveIndex(index);
      setSelectedJob(job);
      navigate(`/jobs/${job._id}`);
    },
    [navigate]
  );

  const jobCards = useMemo(() => {
    if (!loading && data) {
      return data.map((job, index) => (
        <JobCard
          onClick={selectJobHandler(job, index)}
          job={job}
          key={job._id}
          isSelected={activeIndex === index}
        />
      ));
    }
    return null;
  }, [data, loading, activeIndex, selectJobHandler]);

  return (
    <>
      <div className="job-list">
        <div className="job-list__jobs">
          {jobCards}
          {loading &&
            [...Array(4).keys()].map((item) => <JobCardSkeleton key={item} />)}
        </div>

        <Card className="job-list__job-description">
          {!loading && selectedJob && (
            <>
              <Title className="job-list__title">{selectedJob.title}</Title>
              <Text className="badge job-list__pay-range">
                {selectedJob.payRange}
              </Text>
              <br />
              <Button type="primary" size="large" onClick={handleShowModal}>
                Apply now
              </Button>

              <Divider />
              <Title level={3}>Full job description</Title>
              <Paragraph>{selectedJob.description}</Paragraph>
            </>
          )}
          {loading && (
            <>
              <Skeleton.Button block active />
              <br />
              <br />
              <Skeleton.Input active />
              <br />
              <br />
              <Skeleton.Button active />
              <Divider />
              <Skeleton paragraph />
            </>
          )}
        </Card>
      </div>
      {selectedJob && (
        <JobApplicationModal
          open={showModal}
          onHide={handleCloseModal}
          jobId={selectedJob._id}
          jobTitle={selectedJob.title}
        />
      )}
    </>
  );
};

export default React.memo(JobList);
