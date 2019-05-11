import styled from "styled-components";

export const Container = styled.ul`
  padding: 0.875rem 0.5rem;
  background-color: #eff1f3;
  margin: 0;
  list-style: none;
  margin: 0.875rem;
  margin-left: 0;
  border-radius: 4px;
  width: 353px;
  flex-basis: 353px;
  flex-shrink: 0;
  flex-grow: 0;
  height: 378.05px;
  display: flex;
  flex-direction: column;
`;

export const IssuesWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  flex-grow: 1;
`;

export const TodosCount = styled.div`
  border-radius: 0.5rem;
  padding: 2px 5px;
  background-color: rgba(27, 31, 35, 0.15);
  width: fit-content;
  font-size: 12px;
  font-weight: 600;
  margin-right: 0.875rem;
`;
export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoInfo = styled.div`
  display: flex;
`;
export const TodoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
export const ActionsWrapper = styled.div`
  display: flex;
`;
export const AddTodo = styled.button`
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  border: none;
  background-color: transparent;
  outline: none;
`;

export const ManageTodo = styled.button`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  border: none;
  background-color: transparent;
  outline: none;
`;
export const NewIssue = styled.form`
  width: 100%;
`;
export const NewIssueTitle = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  color: #24292e;
  padding: 8px;
  outline: none;
  width: inherit;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
    outline: none;
  }
  &:active {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
    outline: none;
  }
`;
export const IssueActions = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const AddButton = styled.button`
  background-image: none;
  border-color: rgba(27, 31, 35, 0.2);
  box-shadow: none;
  color: #fff;
  background-repeat: repeat-x;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 12px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  flex-grow: 1;
  margin-right: 0.5rem;
  background-color: #28a745;

  &:disabled {
    background-color: #94d3a2;
    color: hsla(0, 0%, 100%, 0.75);
  }
`;

export const CancelButton = styled.button`
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  color: #24292e;
  background-repeat: repeat-x;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 12px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  flex-grow: 1;
`;
