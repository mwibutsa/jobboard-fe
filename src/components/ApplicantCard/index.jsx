import { Card, Tag, Typography } from "antd";
import cs from "classnames";
import PropTypes from "prop-types";
import "./applicant-card.scss";
const { Title, Text } = Typography;
const ApplicantCard = ({ onSelect, selected, application }) => {
  const { applicant = {} } = application;
  const variants = {
    Pending: "gold",
    Dropped: "red",
    Passed: "green",
  };
  return (
    <Card
      className={cs("applicant-card", {
        active: selected,
      })}
      onClick={() => onSelect(application)}
    >
      <Title level={3} className="applicant-card__name">
        {`${applicant.firstName} ${applicant.lastName}`}
        <Tag color={variants[application.status]}>{application.status}</Tag>
      </Title>
      <Text>{applicant.email} </Text>
      <br />
      <Text> {applicant.phoneNumber} </Text>
    </Card>
  );
};

ApplicantCard.propTypes = {
  onSelect: PropTypes.func.isRequired,
  application: PropTypes.objectOf(PropTypes.any),
  selected: PropTypes.bool,
};

ApplicantCard.defaultProps = {
  selected: false,
};

export default ApplicantCard;
