import React from "react";
import PropTypes from "prop-types";

class ProblemsSummary extends React.Component {
  render() {
    const problemComponentOptions = this.props.problemData.map((problem) => {
      return <option key={problem.key} value={problem.description}>{problem.label}</option>
    });

    return (
      <ButtonGroup vertical block>
        { problemComponentOptions }
      </ButtonGroup>
    );
  }
}

ProblemSummary.propTypes = {
  problemData: PropTypes.array.isRequired,
};

export default ProblemSummary;
