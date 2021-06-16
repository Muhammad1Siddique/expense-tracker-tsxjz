import styled from 'styled-components';


export const Appbox = styled.div`
  max-width: 500px;
  width: 100%;
  margin:auto;
  display:block;
  background: #ececec;
  border-radius: 4px;

  h1{
    color:navy;
    font-weight: 800;
    font-size: 2.5rem;
  }
  div > strong{
    padding:0px 24px;
  }
  div > h2{
    padding: 0px 24px;
    font-weight: 700;
    font-size: 36px;
    margin:0px 0px;
  }
  .history p{
    display: flex;
    justify-content: space-between;
}
.delete-btn {
    cursor: pointer;
    background-color: #145649;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    top: 50%;
    float: right;
    transform: translate(70%, -0%);
    transition: opacity 0.3s ease;
  }
`;