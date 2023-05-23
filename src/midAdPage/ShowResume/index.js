import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { actions } from "../../state/club/minAd";
const ShowResume = () => {
  const { clubId } = useParams();
  const dispatch = useDispatch();
  const resumeData = useSelector(({ midAdReducer }) => midAdReducer.resumeData);
  useEffect(() => {
    dispatch(actions.fetchShowClubResume({ clubId }));
  }, [clubId, dispatch]);
  return (
    <Wrapper>
      {resumeData &&
        resumeData.map(({ email, resume }) => (
          <Card key={email}>
            <>
              <Title>{email}</Title>
              {resume}
            </>
          </Card>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 400px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  padding: 5px;
  max-width: 500px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  width: 500px;
  border-radius: 5px;
`;
const Title = styled.div`
  border-bottom: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
`;
export default ShowResume;
