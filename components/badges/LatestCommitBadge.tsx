import React from "react";
import { Button, Typography } from "antd";
import { SingleCommitIcon } from "../../assets/icons";

const { Text } = Typography;

const LatestCommitBadge = ({ repoURL }) => {
  if (!repoURL) return null;

  const repoName = repoURL.split("/").slice(-1);

  return (
    <a href={repoURL} target="_blank" rel="noopener noreferrer">
      <div className="badge-container last-commit-badge-container">
        <Button
          icon={<SingleCommitIcon />}
          className="badge-button last-commit-badge-content"
        >
          <Text ellipsis style={{ maxWidth: 260 }}>
            {repoName}
          </Text>
        </Button>
      </div>
    </a>
  );
};

export default LatestCommitBadge;
