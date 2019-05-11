import styled from "styled-components";

export const Container = styled.li`
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  border: 1px solid lightgrey;
  list-style: none;
  padding: 1rem;
  padding-left: 2rem;
  border-radius: 8px;
  margin: 0.5rem 0;
`;
export const TodoTitle = styled.div`
  color: #0366d6;
  font-weight: 600;
  display: inline-block;
`;

export const RepoName = styled.small`
  color: rgba(#586069, 0.7);
  display: block;
`;

export const IssueOwner = styled.small`
  color: #586069!;
`;

export const IssueLabels = styled.div`
  display: flex;
  margin-top: 0.2rem;
`;
export const IssueLabel = styled.div`
  background-color: #a2eeef;
  font-size: 14px;
  font-weight: 500;
  padding: 0.2rem;
  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
  margin-right: 0.25rem;
`;
