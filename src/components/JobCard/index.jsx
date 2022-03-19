import { Card, Divider, Typography } from "antd";
import cs from "classnames";
import PropTypes from "prop-types";
import "./job-card.scss";

const { Title, Paragraph, Text } = Typography;
const JobCard = ({ job, isSelected, onClick }) => {
  return (
    <Card className={cs("job-card", { active: isSelected })} onClick={onClick}>
      <Title level={3} className="job-card__title">
        {job.title}
      </Title>
      <Divider />
      <Text className="badge job-card__pay-range">{job.payRange}</Text>

      <Paragraph className="job-card__short-description">
        {job.description.substr(0, 150)}...
      </Paragraph>
    </Card>
  );
};

JobCard.propTypes = {
  job: PropTypes.objectOf(PropTypes.any).isRequired,
  isSelected: PropTypes.bool,
};

JobCard.defaultProps = {
  isSelected: false,
};

export default JobCard;
