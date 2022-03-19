import { Card, Skeleton } from "antd";

const JobCardSkeleton = () => {
  return (
    <Card className="job-card">
      <Skeleton active></Skeleton>
    </Card>
  );
};

export default JobCardSkeleton;
